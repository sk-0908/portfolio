/*
  Fetch GitHub repos and generate src/data/projects.json
  Usage:
    node scripts/fetch_github.js <github-username> [--include-forks] [--include-archived] [--max N]
  Tips:
    - Set GITHUB_TOKEN env var to increase rate limits.
*/
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const USER = args[0];
const includeForks = args.includes('--include-forks');
const includeArchived = args.includes('--include-archived');
const updateProfile = args.includes('--update-profile');
const maxIdx = args.findIndex(a => a === '--max');
const max = maxIdx !== -1 ? Number(args[maxIdx + 1]) : Infinity;
if (!USER) {
  console.error('Usage: node scripts/fetch_github.js <github-username>');
  process.exit(1);
}

const API = 'https://api.github.com';

async function get(url) {
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'codex-cli-portfolio-script',
      ...(process.env.GITHUB_TOKEN ? { 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}` } : {})
    }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

function formatPeriod(created_at, updated_at) {
  try {
    const c = new Date(created_at);
    const u = new Date(updated_at);
    const fy = c.getFullYear();
    const ty = u.getFullYear();
    return fy === ty ? `${fy}` : `${fy}-${ty}`;
  } catch {
    return '';
  }
}

async function main() {
  // paginate all repos
  let page = 1;
  const repos = [];
  while (true) {
    const batch = await get(`${API}/users/${USER}/repos?per_page=100&page=${page}&sort=updated`);
    if (!Array.isArray(batch) || batch.length === 0) break;
    repos.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }
  // filter by flags and sort by stars then pushed_at
  const filtered = repos
    .filter(r => includeForks ? true : !r.fork)
    .filter(r => includeArchived ? true : !r.archived)
    .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at) - new Date(a.pushed_at)));
  const limited = Number.isFinite(max) ? filtered.slice(0, max) : filtered;

  const enriched = [];
  for (const r of limited) {
    let languages = [];
    let topics = [];
    let readmeSummary = '';
    try {
      const langMap = await get(`${API}/repos/${USER}/${r.name}/languages`);
      languages = Object.keys(langMap).slice(0, 6);
    } catch (e) {
      // ignore language errors
    }
    try {
      const t = await get(`${API}/repos/${USER}/${r.name}/topics`);
      if (t && Array.isArray(t.names)) topics = t.names.slice(0, 12);
    } catch (e) {
      // ignore topic errors
    }
    try {
      // raw README content
      const res = await fetch(`${API}/repos/${USER}/${r.name}/readme`, {
        headers: {
          'Accept': 'application/vnd.github.raw',
          'User-Agent': 'codex-cli-portfolio-script',
          ...(process.env.GITHUB_TOKEN ? { 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}` } : {})
        }
      });
      if (res.ok) {
        const md = await res.text();
        readmeSummary = summarizeMarkdown(md);
      }
    } catch (e) {
      // ignore readme errors
    }
    const tech = dedupe([...(languages || []), ...(topics || [])]).slice(0, 12);
    enriched.push({
      id: r.name,
      title: { ja: r.name, en: r.name },
      summary: {
        ja: readmeSummary || r.description || 'GitHubリポジトリ',
        en: readmeSummary || r.description || 'GitHub repository'
      },
      tech: tech.length ? tech : (r.language ? [r.language] : []),
      period: formatPeriod(r.created_at, r.updated_at),
      role: { ja: '個人開発', en: 'Solo' },
      links: {
        github: r.html_url,
        demo: r.homepage || undefined
      },
      images: ["/images/projects/placeholder.svg"]
    });
  }

  const outPath = path.join(__dirname, '..', 'src', 'data', 'projects.json');
  fs.writeFileSync(outPath, JSON.stringify(enriched, null, 2), 'utf-8');
  console.log(`Wrote ${enriched.length} projects to ${outPath}`);

  if (updateProfile) {
    try {
      const user = await get(`${API}/users/${USER}`);
      const profilePath = path.join(__dirname, '..', 'src', 'data', 'profile.json');
      const current = JSON.parse(fs.readFileSync(profilePath, 'utf-8'));
      const merged = {
        ...current,
        name: { ja: user.name || current.name?.ja || USER, en: user.name || current.name?.en || USER },
        bio: { ja: user.bio || current.bio?.ja || '', en: user.bio || current.bio?.en || '' },
        social: { ...current.social, github: user.html_url },
        avatar: user.avatar_url || current.avatar,
      };
      fs.writeFileSync(profilePath, JSON.stringify(merged, null, 2), 'utf-8');
      console.log(`Updated profile from GitHub user ${USER} -> ${profilePath}`);
    } catch (e) {
      console.warn('Failed to update profile from GitHub:', e.message);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

function dedupe(arr) {
  return Array.from(new Set((arr || []).filter(Boolean)));
}

function summarizeMarkdown(md) {
  if (!md) return '';
  // remove frontmatter
  md = md.replace(/^---[\s\S]*?---\n/, '');
  // remove code blocks
  md = md.replace(/```[\s\S]*?```/g, '');
  // remove images ![alt](url)
  md = md.replace(/!\[[^\]]*\]\([^\)]*\)/g, '');
  // links [text](url) -> text
  md = md.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
  // headers, blockquotes, list markers
  md = md.replace(/^\s{0,3}(#{1,6}|>|\-|\*|\+)\s+/gm, '');
  // collapse spaces
  md = md.replace(/\r?\n+/g, '\n').trim();
  const firstPara = md.split('\n\n')[0] || md.split('\n')[0] || '';
  const clean = firstPara.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
  return clean.slice(0, 220);
}
