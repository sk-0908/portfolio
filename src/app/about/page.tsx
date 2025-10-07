import profile from "@/data/profile.json";
import { L } from "@/lib/locale";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">概要 / プロフィール</h1>
      <div className="flex items-start gap-6">
        <Image src={profile.avatar} alt="avatar" width={96} height={96} className="rounded-full bg-gray-100" />
        <div className="space-y-2">
          <div className="text-xl font-medium">{L(profile.name, "ja")}</div>
          <div className="text-gray-700">{L(profile.title, "ja")}</div>
          <p className="text-gray-600">{L(profile.bio, "ja")}</p>
        </div>
      </div>
    </section>
  );
}
