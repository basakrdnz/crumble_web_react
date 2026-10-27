import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { PRIVACY, type Lang } from "./data/privacy";

// /gizlilik (Türkçe) ve /privacy ya da ?lang=en (İngilizce). App Store ve
// uygulamadaki bağlantılar bu sayfaya gelir.
const initialLang = (): Lang => {
  const lang = new URLSearchParams(location.search).get("lang");
  if (lang === "en" || lang === "tr") return lang;
  return location.pathname.replace(/\/+$/, "") === "/privacy" ? "en" : "tr";
};

const PrivacyPage = () => {
  const [lang, setLang] = useState<Lang>(initialLang);
  const text = PRIVACY[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "tr" ? "Gizlilik Politikası | Crumble Kafe" : "Privacy Policy | Crumble Kafe";
  }, [lang]);

  const switchTo = (next: Lang) => {
    setLang(next);
    const url = new URL(location.href);
    url.searchParams.set("lang", next);
    history.replaceState(null, "", url);
  };

  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-50 h-16 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-full max-w-3xl items-center justify-between px-5">
          <a href="/" className="font-serif text-[28px] font-medium leading-none tracking-[0.09em] text-olive">
            CRUMBLE
          </a>
          <div className="flex gap-1 text-sm font-semibold" role="group" aria-label="Dil / Language">
            {(["tr", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => switchTo(l)}
                aria-pressed={lang === l}
                className={`min-h-[44px] rounded-full px-4 uppercase transition-colors ${
                  lang === l ? "bg-olive text-paper" : "text-muted hover:text-ink"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-12 text-ink lg:pt-16">
        <h1 className="font-serif text-4xl font-medium leading-tight sm:text-5xl">{text.title}</h1>
        <p className="mt-3 text-sm text-muted">{text.updated}</p>
        <p className="mt-8 leading-relaxed">{text.intro}</p>

        {text.sections.map((s) => (
          <section key={s.title} className="mt-10">
            <h2 className="font-serif text-2xl font-medium">{s.title}</h2>
            {s.items && (
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-olive">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            )}
            {s.paragraphs?.map((p) => (
              <p key={p} className="mt-4 leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
