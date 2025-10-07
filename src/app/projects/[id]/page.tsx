import projects from "@/data/projects.json";
import { L } from "@/lib/locale";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/content";

export async function generateStaticParams() {
  return (projects as unknown as Project[]).map((p) => ({ id: p.id }));
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const all = projects as unknown as Project[];
  const project = all.find((p) => p.id === params.id);
  if (!project) return <div>Not found</div>;
  return (
    <article className="space-y-4">
      <Link href="/projects" className="text-sm text-blue-600 hover:underline">← Back</Link>
      <h1 className="text-2xl font-semibold">{L(project.title, "ja")}</h1>
      {project.images?.[0] && (
        <div className="aspect-video relative bg-gray-50">
          <Image src={project.images[0]} alt={project.id} fill className="object-cover" />
        </div>
      )}
      <p className="text-gray-700">{L(project.summary, "ja")}</p>
      <div className="text-sm text-gray-500 flex flex-wrap gap-3">
        <span>期間: {project.period}</span>
        <span>役割: {L(project.role, "ja")}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((s) => (
          <span key={s} className="text-xs bg-gray-100 px-2 py-1 rounded">{s}</span>
        ))}
      </div>
      <div className="flex gap-4 pt-2">
        {project.links.github && (
          <a href={project.links.github} target="_blank" className="text-blue-600 hover:underline">GitHub</a>
        )}
        {project.links.demo && (
          <a href={project.links.demo} target="_blank" className="text-blue-600 hover:underline">Demo</a>
        )}
      </div>
    </article>
  );
}
