import skills from "@/data/skills.json";
import { L } from "@/lib/locale";
import type { SkillCategory } from "@/types/content";

export default function SkillsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">スキル</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {(skills as unknown as SkillCategory[]).map((cat) => (
          <div key={L(cat.category, "ja")} className="border rounded-lg p-4 bg-white">
            <h3 className="font-semibold mb-2">{L(cat.category, "ja")}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <span key={s} className="text-sm bg-gray-100 px-2 py-1 rounded">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
