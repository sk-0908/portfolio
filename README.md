## Portfolio 2025

モダンなスタックで構築した個人ポートフォリオサイトです。`Next.js 15`、`React 19`、`Tailwind CSS v4` を採用し、パフォーマンスと拡張性を重視しています。

### ライブデモ
- Vercel: https://portfolio-five-ruby-qcmh8i263j.vercel.app/

### 主な機能
- セクション構成: `Hero` / `About` / `Skills` / `Projects` / `Contact` / `Footer`
- 遅延アニメーションやダークテーマ対応のスタイル
- 型定義に基づくデータ管理（`src/data/*.ts`）

### 技術スタック
- Next.js 15 / React 19
- TypeScript
- Tailwind CSS v4
- ESLint

---

## はじめかた

### 必要要件
- Node.js 18 以上（推奨: 20 以上）

### セットアップ
```bash
npm install
npm run dev
```
開発サーバ: http://localhost:3000

### 本番ビルド
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

---

## プロジェクト構成
```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Navigation.tsx / Hero.tsx / About.tsx / Skills.tsx / Projects.tsx / Contact.tsx / Footer.tsx
  data/
    personal.ts   # プロフィール・連絡先・SNS
    projects.ts   # プロジェクト一覧
    skills.ts     # スキル一覧
  types/
    index.ts
public/
  *.svg, 画像類
```

---

## カスタマイズ
- プロフィールやSNS: `src/data/personal.ts`
- プロジェクトカード: `src/data/projects.ts`
- スキル一覧: `src/data/skills.ts`
- 画像・アイコン: `public/` 配下を差し替え

### 連絡フォームについて
`Contact.tsx` の送信は現在ダミー（setTimeout による成功表示）です。実送信に切り替えるには以下のいずれかをご検討ください。
- Next.js の API ルートを作成し、メール送信（例: SendGrid）を実装
- 外部フォームサービス（Formspree など）を利用

---

## デプロイ
Vercel でのデプロイを想定しています。
1. リポジトリを GitHub にプッシュ
2. Vercel で「New Project」→ 対象リポジトリをインポート
3. フレームワークは `Next.js` を自動検出
4. デプロイ後の URL を `README.md` の「ライブデモ」に反映

既存デプロイ: https://portfolio-five-ruby-qcmh8i263j.vercel.app/

---

## 著者
sk-0908

## ライセンス
MIT