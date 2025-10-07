import certifications from "@/data/certifications.json";
import { L } from "@/lib/locale";
import type { Certification } from "@/types/content";

export default function CertificationsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">資格</h1>
      <ul className="space-y-3">
        {(certifications as unknown as Certification[]).map((c, idx) => (
          <li key={idx} className="border rounded-lg p-4 bg-white flex items-center justify-between">
            <div>
              <div className="font-medium">{L(c.name, "ja")}</div>
              <div className="text-sm text-gray-600">{c.issuer}</div>
            </div>
            <div className="text-sm text-gray-500">{c.year}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
