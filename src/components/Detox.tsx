import Reveal from "./ui/Reveal";

// Fiyatlar burada yok: menü yalnızca QR sayfasında
const DETOXES = [
  { no: "No.1", color: "bg-[#F5C400]", ingredients: ["Elma", "Limon", "Zencefil"] },
  { no: "No.2", color: "bg-[#C8391F]", ingredients: ["Havuç", "Pancar", "Portakal"] },
  { no: "No.3", color: "bg-[#6E9A2E]", ingredients: ["Salatalık", "Limon", "Taze nane"] },
];

// Fotoğrafın kenarlarını bölüm zeminine eritir
const FEATHER = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 14%, #000 86%, transparent), linear-gradient(to bottom, transparent, #000 3%)",
  WebkitMaskComposite: "source-in",
  maskImage:
    "linear-gradient(to right, transparent, #000 14%, #000 86%, transparent), linear-gradient(to bottom, transparent, #000 3%)",
  maskComposite: "intersect",
} as const;

// Bölümün zemini fotoğrafın duvarı (hardal) ve masası (yeşil): bardaklar sayfanın üstünde duruyormuş gibi görünür
const Detox = () => (
  <section id="detox" className="relative isolate overflow-hidden bg-mustard pt-20 text-ink lg:pt-28">
    <div className="mx-auto grid max-w-7xl px-5 lg:grid-cols-12 lg:gap-10 lg:px-10">
      <Reveal className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:self-start lg:pb-[19vw] xl:pb-[250px]">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink/70">
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          Detox
        </p>
        <h2 className="mt-5 font-serif text-[clamp(52px,14vw,72px)] font-semibold leading-[0.9] tracking-[-0.01em] lg:text-[clamp(72px,7vw,108px)]">
          Biri <span className="italic text-leaf">detox</span>
          <br />
          mu dedi?
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">
          Üç renk, üç ayrı ferahlık. Buz gibi gelir; tatlıdan önce de iyi gider, sonra da.
        </p>

        <ol className="mt-9 border-t border-ink/20">
          {DETOXES.map((d) => (
            <li key={d.no} className="flex items-baseline gap-5 border-b border-ink/20 py-4 lg:py-5">
              <span className="flex w-16 shrink-0 items-center gap-2 text-sm font-semibold tabular-nums">
                <span className={`h-2.5 w-2.5 rounded-full ${d.color}`} aria-hidden="true" />
                {d.no}
              </span>
              <span className="font-serif text-[23px] font-semibold leading-tight sm:text-[28px] lg:text-[30px]">
                {d.ingredients.join(" · ")}
              </span>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Masa: fotoğraftaki yeşil zemin bölüm boyunca uzar (fotoğraf yüksekliğinin %35,8'si) */}
      <div className="relative mt-10 lg:col-span-7 lg:row-start-1 lg:mt-0 lg:self-end">
        <div aria-hidden="true" className="absolute bottom-0 left-[-100vw] right-[-100vw] -z-10 h-[35.8%] bg-floor" />
        <img
          src="/media/detox.jpg"
          alt="Üç detox içeceği ve malzemeleri: elma, limon, zencefil; havuç, pancar, portakal; salatalık, limon, taze nane"
          width={1080}
          height={1072}
          className="mx-auto block h-auto w-full max-w-[560px] lg:max-w-[640px]"
          style={FEATHER}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
);

export default Detox;
