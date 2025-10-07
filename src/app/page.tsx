import profile from "@/data/profile.json";
import projects from "@/data/projects.json";
import { L } from "@/lib/locale";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import type { Project } from "@/types/content";

export default function Home() {
  const all = projects as unknown as Project[];
  const latest = all.slice(0, 3);
  return (
    <div className="space-y-10">
      <section className="flex items-center gap-6">
        <Image src={profile.avatar} alt="avatar" width={80} height={80} className="rounded-full bg-gray-100" />
        <div>
          <h1 className="text-2xl font-semibold">{L(profile.name, "ja")} — {L(profile.title, "ja")}</h1>
          <p className="text-gray-600">{L(profile.bio, "ja")}</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">最新の作品</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {latest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
