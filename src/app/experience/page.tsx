import experience from "@/data/experience.json";
import { L } from "@/lib/locale";
import type { Experience } from "@/types/content";

export default function ExperiencePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">職務経歴</h1>
      <div className="space-y-4">
        {(experience as unknown as Experience[]).map((e, idx) => (
          <div key={idx} className="border rounded-lg p-4 bg-white">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{e.company}</h3>
              <span className="text-sm text-gray-500">{e.period}</span>
            </div>
            <div className="text-gray-700">{L(e.role, "ja")}</div>
            <p className="text-gray-600 mt-2">{L(e.description, "ja")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
