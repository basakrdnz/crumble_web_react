import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { MAPS_URL, todaysHours } from "../data/info";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-out ${
          isLoaded ? "scale-100" : "scale-110"
        }`}
      >
        <img
          src="/images/herobgcrumble.jpg"
          alt="Crumble Cafe"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" />

      <div
        className={`relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 transition-all duration-1000 md:pb-24 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/90">Çankaya · Ankara</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold leading-[1.02] text-white sm:text-6xl md:text-7xl">
          Kahve ve kruvasanın buluşma noktası
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Günlük pişen kruvasanlar, taze kavrulmuş kahveler ve sakin bir atmosfer. Crumble'da kısa bir mola verin.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#menu"
            className="rounded-full bg-olive px-6 py-3 font-semibold text-white transition-colors hover:bg-olive-dark"
          >
            Menüye göz at
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Yol tarifi
          </a>
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-white/80">
          <Clock className="h-4 w-4" aria-hidden="true" />
          Bugün {todaysHours()} arası açığız
        </p>
      </div>
    </section>
  );
};

export default Hero;
