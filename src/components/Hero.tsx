import { useEffect, useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { MAPS_URL, todaysHours } from "../data/info";

// Tam ekran şömine fotoğrafı; yazılar üstteki karanlık alanda, ateş ve çizimler altta görünür kalır
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
      <img
        src="/media/atmosfer-somine.jpg"
        srcSet="/media/atmosfer-somine-1200.jpg 1200w, /media/atmosfer-somine.jpg 2000w"
        sizes="100vw"
        alt="Crumble'ın şömineli iç mekânında kahve içen misafirler"
        className={`absolute inset-0 h-full w-full object-cover object-[50%_70%] transition-transform duration-[2400ms] ease-out ${
          loaded ? "scale-100" : "scale-[1.06]"
        }`}
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/5" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-black/55 via-black/10 to-transparent lg:block" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-10 pt-28 lg:px-10 lg:pt-36">
        <p className="rise flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cream/85">
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          Güneypark · Çankaya<span className="hidden sm:inline"> · 2022'den beri</span>
        </p>
        <h1 className="mt-6 max-w-4xl font-serif font-semibold leading-[0.92] tracking-[-0.02em]">
          <span className="rise block text-[clamp(52px,14vw,76px)] lg:text-[clamp(84px,8vw,128px)]" style={{ animationDelay: "120ms" }}>
            Kahve, kurabiye
          </span>
          <span className="rise block text-[clamp(52px,14vw,76px)] italic text-cream lg:text-[clamp(84px,8vw,128px)]" style={{ animationDelay: "240ms" }}>
            ve biraz sohbet.
          </span>
        </h1>
        <p className="rise mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg" style={{ animationDelay: "380ms" }}>
          Her şey el yapımı: güzel kahveler, sağlıklı kaseler, ev yapımı makarnalar ve şömine başında sakin bir mola.
        </p>

        <div className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-4" style={{ animationDelay: "500ms" }}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 font-semibold text-ink transition hover:bg-white"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Yol tarifi
          </a>
          <span className="flex items-center gap-2 text-sm text-white/85">
            <Clock className="h-4 w-4" aria-hidden="true" />
            Bugün {todaysHours()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
