import AutoVideo from "./ui/AutoVideo";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const Caption = ({ title, sub }: { title: string; sub: string }) => (
  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 text-white">
    <span className="block font-serif text-2xl font-semibold leading-tight md:text-3xl">{title}</span>
    <span className="mt-0.5 block text-sm text-white/80">{sub}</span>
  </figcaption>
);

const tile = "group relative overflow-hidden rounded-3xl bg-cream";
const media = "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105";

const Kitchen = () => {
  return (
    <section id="kitchen" className="bg-ink py-20 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader dark eyebrow="Mutfaktan" title={<>Bugün ne <span className="italic text-cream">canın</span> çekiyor?</>}>
          Makarnalar siparişle hazırlanır, tatlılar her sabah fırından çıkar. Vitrinde ne varsa, o gün onun günü.
        </SectionHeader>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-[280px_280px] lg:grid-rows-[320px_320px] md:gap-4">
          <Reveal className="col-span-2 md:col-span-1 md:row-span-2">
            <figure className={`${tile} aspect-[9/14] md:aspect-auto md:h-full`}>
              <AutoVideo
                label="Pesto alfredo servis ediliyor"
                poster="/media/pesto-poster.jpg"
                src="/media/pesto-720"
                className={media}
              />
              <Caption title="Pesto Alfredo" sub="Krema ve taze pesto sos" />
            </figure>
          </Reveal>

          <Reveal className="col-span-2" delay={80}>
            <figure className={`${tile} aspect-[4/3] md:aspect-auto md:h-full`}>
              <img src="/media/baget.jpg" alt="Taze baget sandviç" className={media} loading="lazy" decoding="async" />
              <Caption title="Bagetler" sub="Hindi füme, peynir ya da jambon" />
            </figure>
          </Reveal>

          <Reveal className="col-span-2 md:col-span-1 md:row-span-2" delay={160}>
            <figure className={`${tile} aspect-[4/5] md:aspect-auto md:h-full`}>
              <img src="/media/kase.jpg" alt="Ahşap masada kase" className={media} loading="lazy" decoding="async" />
              <Caption title="Sakin öğlenler" sub="Pencere kenarında güneş" />
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <figure className={`${tile} aspect-square md:aspect-auto md:h-full`}>
              <img src="/media/latte-crumble.jpg" alt="Latte ve crumble turta" className={media} loading="lazy" decoding="async" />
              <Caption title="Latte & Crumble" sub="Klasik ikili" />
            </figure>
          </Reveal>

          <Reveal delay={200}>
            <figure className={`${tile} aspect-square md:aspect-auto md:h-full`}>
              <img src="/media/kurabiye.jpg" alt="Pudra şekerli kurabiye" className={media} loading="lazy" decoding="async" />
              <Caption title="Varsa Kap!" sub="Günün kurabiyesi" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Kitchen;
