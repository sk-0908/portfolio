import profile from "@/data/profile.json";

export default function ContactPage() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("[Portfolio] お問い合わせ")}`;
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">連絡先</h1>
      <p className="text-gray-700">ご連絡はメールにてお願いします。</p>
      <a
        href={mailto}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        メールを送る
      </a>
      <div className="pt-4">
        <a href={profile.social.github} target="_blank" className="text-blue-600 hover:underline">
          GitHub
        </a>
      </div>
    </section>
  );
}

