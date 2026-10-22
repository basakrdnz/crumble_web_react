import Reveal from "./ui/Reveal";

// Fiyatlar burada yok: menü yalnızca QR sayfasında
const DETOXES = [
  { no: "No.1", color: "bg-[#F5C400]", ingredients: ["Elma", "Limon", "Zencefil"] },
  { no: "No.2", color: "bg-[#C8391F]", ingredients: ["Havuç", "Pancar", "Portakal"] },
  { no: "No.3", color: "bg-[#6E9A2E]", ingredients: ["Salatalık", "Limon", "Taze nane"] },
];

const Detox = () => (
  <section id="detox" className="overflow-hidden bg-mustard py-20 text-ink lg:py-32">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-10">
      <Reveal className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-leaf">
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          Detox
        </p>
        <h2 className="mt-5 font-serif text-[clamp(52px,14vw,72px)] font-semibold leading-[0.9] tracking-[-0.01em] lg:text-[clamp(72px,7vw,112px)]">
          Biri <span className="italic text-leaf">detox</span>
          <br />
          mu dedi?
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">
          Üç renk, üç ayrı ferahlık. Buz gibi gelir; tatlıdan önce de iyi gider, sonra da.
        </p>

        <ol className="mt-10 border-t border-ink/20">
          {DETOXES.map((d) => (
            <li key={d.no} className="flex items-baseline gap-5 border-b border-ink/20 py-5 lg:py-6">
              <span className="flex w-16 shrink-0 items-center gap-2 text-sm font-semibold tabular-nums">
                <span className={`h-2.5 w-2.5 rounded-full ${d.color}`} aria-hidden="true" />
                {d.no}
              </span>
              <span className="font-serif text-[23px] font-semibold leading-tight sm:text-[28px] lg:text-[34px]">
                {d.ingredients.join(" · ")}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-ink/70">
          Matcha sevenlere: tonik, limon ya da meyve suyuyla <span className="font-semibold text-ink">dört farklı matcha detox</span>.
        </p>
      </Reveal>

      <Reveal className="order-first lg:order-none lg:col-span-5 lg:row-start-1" delay={120}>
        <figure className="relative mx-auto max-w-md lg:max-w-none">
          <img
            src="/media/detox.jpg"
            alt="Üç detox içeceği ve malzemeleri: elma, limon, zencefil; havuç, pancar, portakal; salatalık, limon, taze nane"
            className="aspect-[4/5] w-full rounded-[1.5rem] lg:rounded-[2rem] object-cover shadow-[0_40px_80px_-30px_rgba(46,42,32,0.55)] lg:-rotate-2"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </Reveal>
    </div>
  </section>
);

export default Detox;
