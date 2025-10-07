"use client";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";

export default function NavBar() {
  const { lang, setLang, t } = useLang();
  const nav = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/skills", label: t("nav.skills") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/experience", label: t("nav.experience") },
    { href: "/certifications", label: t("nav.certifications") },
    { href: "/contact", label: t("nav.contact") }
  ];
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <nav className="flex gap-4 text-sm font-medium">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-blue-600">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-sm">
          <button
            className={`px-2 py-1 rounded ${lang === "ja" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
            onClick={() => setLang("ja")}
            aria-label="Switch to Japanese"
          >
            JA
          </button>
          <button
            className={`px-2 py-1 rounded ${lang === "en" ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
            onClick={() => setLang("en")}
            aria-label="Switch to English"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

