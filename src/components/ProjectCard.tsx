"use client";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { L } from "@/lib/locale";
import Image from "next/image";

type Project = {
  id: string;
  title: { ja: string; en: string };
  summary: { ja: string; en: string };
  tech: string[];
  period: string;
  role: { ja: string; en: string };
  links: { github?: string; demo?: string };
  images?: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useLang();
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-900">
      {project.images?.[0] && (
        <div className="aspect-video relative bg-gray-50 dark:bg-gray-800">
          <Image
            src={project.images[0]}
            alt={L(project.title, lang)}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{L(project.title, lang)}</h3>
        <p className="text-gray-600 text-sm">{L(project.summary, lang)}</p>
        <div className="text-xs text-gray-500 flex flex-wrap gap-2">
          <span>#{t("common.period")} {project.period}</span>
          <span>· #{t("common.role")} {L(project.role, lang)}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((s) => (
            <span key={s} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {s}
            </span>
          ))}
        </div>
        <div className="pt-2">
          <Link href={`/projects/${project.id}`} className="text-blue-600 hover:underline text-sm">
            {t("common.viewDetails")}
          </Link>
        </div>
      </div>
    </div>
  );
}
