import { ArrowDownRight, Clock, MapPin } from "lucide-react";
import { MAPS_URL, todaysHours } from "../data/info";
import AutoVideo from "./ui/AutoVideo";

// Mobil: tam ekran video. Masaüstü: solda tipografi, sağda dikey video kendi oranında bir kartta.
const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-ink text-white">
      <div className="mx-auto grid min-h-[100svh] max-w-7xl lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="absolute inset-0 lg:relative lg:inset-auto lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:flex lg:items-center lg:py-28">
          <figure className="relative h-full w-full overflow-hidden lg:aspect-[9/14] lg:h-auto lg:rounded-[2rem] lg:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
            <AutoVideo
              eager
              label="Kremalı chicken alfredo yakın çekim"
              poster="/media/hero-alfredo-poster.jpg"
              src="/media/hero-alfredo-720"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40 lg:from-black/50 lg:via-transparent lg:to-transparent" />
            <figcaption className="absolute bottom-5 left-5 hidden items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur-md lg:flex">
              <span className="h-2 w-2 rounded-full bg-brick" aria-hidden="true" />
              Mutfaktan · Chicken Alfredo
            </figcaption>
          </figure>
        </div>

        <div className="relative z-10 flex flex-col justify-end px-5 pb-12 pt-28 lg:col-span-7 lg:row-start-1 lg:justify-center lg:px-0 lg:py-28">
          <p className="rise flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cream/80">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            Çankaya · Ankara<span className="hidden sm:inline"> · 2022'den beri</span>
          </p>
          <h1 className="mt-6 font-serif font-semibold leading-[0.9] tracking-[-0.02em]">
            <span className="rise block text-[clamp(56px,15vw,84px)] lg:text-[clamp(84px,8.4vw,132px)]" style={{ animationDelay: "120ms" }}>
              Kahve,
            </span>
            <span className="rise block text-[clamp(56px,15vw,84px)] lg:text-[clamp(84px,8.4vw,132px)]" style={{ animationDelay: "220ms" }}>
              kurabiye
            </span>
            <span className="rise block text-[clamp(56px,15vw,84px)] italic text-cream lg:text-[clamp(84px,8.4vw,132px)]" style={{ animationDelay: "320ms" }}>
              ve biraz sohbet.
            </span>
          </h1>
          <p className="rise mt-7 max-w-md text-base leading-relaxed text-white/80 sm:text-lg" style={{ animationDelay: "440ms" }}>
            Taze kavrulmuş kahveler, her sabah fırından çıkan tatlılar, ev yapımı makarnalar ve şömine başında sakin bir mola.
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "560ms" }}>
            <a
              href="#kitchen"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 font-semibold text-ink transition hover:bg-white"
            >
              Mutfağa göz at
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Yol tarifi
            </a>
          </div>

          <dl className="rise mt-12 hidden max-w-lg grid-cols-2 border-t border-white/15 pt-6 text-sm lg:grid" style={{ animationDelay: "680ms" }}>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 text-cream/70" aria-hidden="true" />
              <div>
                <dt className="text-white/50">Bugün</dt>
                <dd className="mt-0.5 tabular-nums">{todaysHours()}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-cream/70" aria-hidden="true" />
              <div>
                <dt className="text-white/50">Adres</dt>
                <dd className="mt-0.5">Güneypark, Çankaya</dd>
              </div>
            </div>
          </dl>
          <p className="rise mt-6 flex items-center gap-2 text-sm text-white/75 lg:hidden" style={{ animationDelay: "680ms" }}>
            <Clock className="h-4 w-4" aria-hidden="true" />
            Bugün {todaysHours()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
