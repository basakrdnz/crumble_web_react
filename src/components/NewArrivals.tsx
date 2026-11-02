import { useState } from "react";

// Yeni ürün gelince buraya bir kart eklemek yeterli (fiyat yazılmaz; fiyatlar QR menüde)
const ITEMS = [
  {
    tag: "Kışa özel",
    name: "Balkabağı Latte",
    desc: "Pumpkin spice, karamel, espresso; üzeri sweet cream köpük.",
    img: "/media/yeni-balkabagi-latte.webp",
    alt: "Buzlu balkabağı latte, Crumble logolu bardakta",
    panel: "bg-[#EED6B4]",
  },
  {
    tag: "Kahvaltılık",
    name: "Granola Kase",
    desc: "Ballı süzme yoğurt, muz, granola, fıstık ezmesi, kuru üzüm.",
    img: "/media/yeni-granola-kase.webp",
    alt: "Yoğurt, muz, granola, fıstık ezmesi ve kuru üzümlü granola kase",
    panel: "bg-[#E4E6D2]",
  },
];

// Şeridin kesintisiz dönmesi için kartlar tekrarlanır (yarısı ekranı doldurmalı)
const REPEAT = 3;

const Card = ({ item, hidden }: { item: (typeof ITEMS)[number]; hidden: boolean }) => (
  <article
    aria-hidden={hidden || undefined}
    className={`flex w-[290px] shrink-0 items-center gap-4 rounded-3xl ${item.panel} p-4 pr-5 sm:w-[360px] lg:w-[400px] lg:gap-5 lg:p-5`}
  >
    <div className="flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28">
      <img
        src={item.img}
        alt={hidden ? "" : item.alt}
        className="max-h-full max-w-full object-contain drop-shadow-[0_12px_12px_rgba(46,42,32,0.25)]"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
    <div className="min-w-0">
      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/60">
        <span className="h-1.5 w-1.5 rounded-full bg-brick" aria-hidden="true" />
        Yeni · {item.tag}
      </span>
      <h3 className="mt-1 font-serif text-2xl font-semibold leading-tight lg:text-[28px]">{item.name}</h3>
      <p className="mt-1 text-sm leading-snug text-ink/70">{item.desc}</p>
    </div>
  </article>
);

const NewArrivals = () => {
  const [paused, setPaused] = useState(false);
  const half = Array.from({ length: REPEAT }, () => ITEMS).flat();

  return (
    <section id="yeni" aria-label="Yeni gelenler" className="bg-paper py-10 lg:py-14">
      <div className="mx-auto mb-5 flex max-w-7xl items-baseline justify-between gap-4 px-5 lg:mb-7 lg:px-10">
        <h2 className="flex items-center gap-3 font-serif text-3xl font-semibold lg:text-4xl">
          <span className="h-px w-8 bg-olive" aria-hidden="true" />
          <span>
            Yeni <span className="italic text-olive">gelenler</span>
          </span>
        </h2>
        <span className="text-xs text-muted">{paused ? "Devam için dokun" : "Durdurmak için dokun"}</span>
      </div>

      {/* Fareyle üstüne gelince ya da dokununca durur; tekrar dokununca devam eder */}
      <div className={`carousel overflow-hidden ${paused ? "is-paused" : ""}`} onClick={() => setPaused((p) => !p)}>
        <div className="carousel-track flex w-max gap-4 lg:gap-5">
          {[false, true].map((hiddenHalf) =>
            half.map((item, i) => (
              <Card key={`${hiddenHalf}-${i}`} item={item} hidden={hiddenHalf || i >= ITEMS.length} />
            )),
          )}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
