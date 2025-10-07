import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types/content";

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">作品</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {(projects as unknown as Project[]).map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
