import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

// Yeni ürün gelince buraya bir kart eklemek yeterli (fiyat yazılmaz; fiyatlar QR menüde)
const ITEMS = [
  {
    tag: "Kışa özel",
    name: "Balkabağı Latte",
    desc: "Pumpkin spice ve karamel, espresso; üzeri sweet cream köpük. Sıcak ya da buzlu.",
    img: "/media/yeni-balkabagi-latte.webp",
    alt: "Buzlu balkabağı latte, Crumble logolu bardakta",
    width: 276,
    height: 367,
    panel: "bg-[#EED6B4]",
    imgClass: "h-full w-auto",
  },
  {
    tag: "Kahvaltılık",
    name: "Granola Kase",
    desc: "Chia tohumlu ballı süzme yoğurt, muz, granola, ay çekirdeği, fıstık ezmesi ve kuru üzüm.",
    img: "/media/yeni-granola-kase.webp",
    alt: "Yoğurt, muz, granola, fıstık ezmesi ve kuru üzümlü granola kase",
    width: 900,
    height: 680,
    panel: "bg-[#E4E6D2]",
    imgClass: "max-h-full w-auto max-w-full",
  },
];

const NewArrivals = () => (
  <section id="yeni" className="bg-paper py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 lg:px-10">
      <SectionHeader eyebrow="Yeni gelenler" title={<>Menüde <span className="italic text-olive">yeni</span> ne var?</>}>
        Kışa özel kahvemiz ve güne iyi başlatan yeni kahvaltılığımız.
      </SectionHeader>

      <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
        {ITEMS.map((item, i) => (
          <Reveal key={item.name} delay={i * 120}>
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] ${item.panel} px-7 pb-8 pt-10 lg:px-10 lg:pb-10`}>
              <div className="flex h-[280px] items-end justify-center lg:h-[340px]">
                <img
                  src={item.img}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className={`${item.imgClass} object-contain drop-shadow-[0_24px_24px_rgba(46,42,32,0.25)] transition-transform duration-700 ease-out group-hover:-translate-y-2`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream">
                  <span className="h-1.5 w-1.5 rounded-full bg-brick" aria-hidden="true" />
                  Yeni · {item.tag}
                </span>
                <h3 className="mt-4 font-serif text-4xl font-semibold leading-none lg:text-5xl">{item.name}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink/70">{item.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default NewArrivals;
