import { useCallback, useEffect, useRef, useState } from "react";
import { Plus, X } from "lucide-react";
import { MENU } from "../data/menu";

// Fiyat ve açıklama menü verisinden okunur; menüde değişince burası da güncellenir
const menuItem = (name: string) => {
  for (const s of MENU) if ("groups" in s) for (const g of s.groups) for (const it of g.items) if (it[0] === name) return it;
  return undefined;
};

type Arrival = {
  tag: string;
  name: string;
  short: string;
  img: string;
  alt: string;
  panel: string;
  variants: { label?: string; menuName: string }[];
};

// Yeni ürün gelince buraya bir kart eklemek yeterli
const ITEMS: Arrival[] = [
  {
    tag: "Kışa özel",
    name: "Balkabağı Latte",
    short: "Pumpkin spice, karamel, espresso; üzeri sweet cream köpük.",
    img: "/media/yeni-balkabagi-latte.webp",
    alt: "Buzlu balkabağı latte, Crumble logolu bardakta",
    panel: "bg-[#EED6B4]",
    variants: [
      { label: "Sıcak", menuName: "Balkabağı Latte (sıcak)" },
      { label: "Buzlu", menuName: "Balkabağı Latte (buzlu)" },
    ],
  },
  {
    tag: "Kahvaltılık",
    name: "Granola Kase",
    short: "Ballı süzme yoğurt, muz, granola, fıstık ezmesi, kuru üzüm.",
    img: "/media/yeni-granola-kase.webp",
    alt: "Yoğurt, muz, granola, fıstık ezmesi ve kuru üzümlü granola kase",
    panel: "bg-[#E4E6D2]",
    variants: [{ menuName: "Granola Kase" }],
  },
];

const REPEAT = 3; // şeridin kesintisiz dönmesi için kartlar tekrarlanır
const SPEED = 30; // px/sn
const RESUME_AFTER = 2500; // kullanıcı bıraktıktan sonra kendiliğinden kaymaya dönme süresi (ms)

const Card = ({ item, hidden, onOpen }: { item: Arrival; hidden: boolean; onOpen: () => void }) => (
  <button
    type="button"
    onClick={onOpen}
    tabIndex={hidden ? -1 : undefined}
    aria-hidden={hidden || undefined}
    aria-label={hidden ? undefined : `${item.name}: fiyat ve içerik`}
    className={`relative flex w-[290px] shrink-0 items-center gap-4 rounded-3xl ${item.panel} p-4 pr-5 text-left transition-transform active:scale-[0.98] sm:w-[360px] lg:w-[400px] lg:gap-5 lg:p-5`}
  >
    <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-ink/70 shadow-sm">
      <Plus className="h-4 w-4" aria-hidden="true" />
    </span>
    <span className="flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28">
      <img
        src={item.img}
        alt=""
        className="max-h-full max-w-full object-contain drop-shadow-[0_12px_12px_rgba(46,42,32,0.25)]"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </span>
    <span className="min-w-0 pr-7">
      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/60">
        <span className="h-1.5 w-1.5 rounded-full bg-brick" aria-hidden="true" />
        Yeni · {item.tag}
      </span>
      <span className="mt-1 block font-serif text-2xl font-semibold leading-tight lg:text-[28px]">{item.name}</span>
      <span className="mt-1 block text-sm leading-snug text-ink/70">{item.short}</span>
    </span>
  </button>
);

const Detail = ({ item, onClose }: { item: Arrival; onClose: () => void }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const desc = menuItem(item.variants[0].menuName)?.[2] ?? item.short;

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label={item.name}>
      <div className="sheet-fade absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} />
      <div className="sheet-in relative w-full max-w-md overflow-hidden rounded-t-[2rem] bg-paper shadow-2xl sm:rounded-[2rem]">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className={`flex h-56 items-end justify-center ${item.panel} pt-6`}>
          <img src={item.img} alt={item.alt} className="max-h-full max-w-[80%] object-contain drop-shadow-[0_16px_16px_rgba(46,42,32,0.25)]" />
        </div>
        <div className="px-6 pb-8 pt-6">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/60">
            <span className="h-1.5 w-1.5 rounded-full bg-brick" aria-hidden="true" />
            Yeni · {item.tag}
          </span>
          <h3 className="mt-2 font-serif text-4xl font-semibold leading-none">{item.name}</h3>
          <p className="mt-3 leading-relaxed text-muted">{desc}</p>
          <ul className="mt-5 border-t border-line">
            {item.variants.map((v) => (
              <li key={v.menuName} className="flex items-baseline gap-2.5 border-b border-line py-3">
                <span className="font-medium">{v.label ?? "Fiyat"}</span>
                <span aria-hidden="true" className="min-w-3 flex-1 -translate-y-1 border-b-[1.5px] border-dotted border-line" />
                <span className="font-semibold tabular-nums">{menuItem(v.menuName)?.[1]} ₺</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const NewArrivals = () => {
  const [open, setOpen] = useState<Arrival | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const secondHalf = useRef<HTMLDivElement>(null);
  const hold = useRef(0); // bu zamana kadar otomatik kayma durur
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  const pause = useCallback((ms = RESUME_AFTER) => {
    hold.current = Math.max(hold.current, performance.now() + ms);
  }, []);

  // Kendiliğinden kayma + sonsuz döngü
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pos = el.scrollLeft;
    let last = performance.now();
    let raf = 0;
    const half = () => secondHalf.current?.offsetLeft ?? 0;
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      if (reduce || now < hold.current || open) {
        pos = el.scrollLeft;
      } else {
        pos += SPEED * dt;
        if (pos >= half()) pos -= half();
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // kullanıcı elle kaydırırken de döngüyü koru
    const onScroll = () => {
      const h = half();
      if (h && el.scrollLeft >= h) el.scrollLeft -= h;
      else if (h && el.scrollLeft <= 0 && performance.now() < hold.current) el.scrollLeft += h;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  // Fareyle sürükleme (dokunmatikte tarayıcının kendi kaydırması kullanılır)
  const onPointerDown = (e: React.PointerEvent) => {
    pause(60_000);
    if (e.pointerType !== "mouse" || !scroller.current) return;
    drag.current = { x: e.clientX, left: scroller.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || !scroller.current) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 5) d.moved = true;
    if (d.moved) scroller.current.scrollLeft = d.left - dx;
  };
  const onPointerUp = () => {
    pause();
    setTimeout(() => (drag.current = null));
  };

  const half = Array.from({ length: REPEAT }, () => ITEMS).flat();
  const openItem = (item: Arrival) => {
    if (drag.current?.moved) return; // sürükleme tıklama sayılmaz
    pause();
    setOpen(item);
  };

  return (
    <section id="yeni" aria-label="Yeni gelenler" className="bg-paper py-10 lg:py-14">
      <div className="mx-auto mb-5 max-w-7xl px-5 lg:mb-7 lg:px-10">
        <h2 className="flex items-center gap-3 font-serif text-3xl font-semibold lg:text-4xl">
          <span className="h-px w-8 bg-olive" aria-hidden="true" />
          <span>
            Yeni <span className="italic text-olive">gelenler</span>
          </span>
        </h2>
      </div>

      <div
        ref={scroller}
        className="no-scrollbar flex cursor-grab gap-4 overflow-x-auto px-5 active:cursor-grabbing lg:gap-5"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={() => drag.current && onPointerUp()}
        onMouseEnter={() => pause(60_000)}
        onMouseLeave={() => pause()}
        onTouchStart={() => pause(60_000)}
        onTouchEnd={() => pause()}
      >
        {[false, true].map((second) => (
          <div key={String(second)} ref={second ? secondHalf : undefined} className="flex shrink-0 gap-4 lg:gap-5">
            {half.map((item, i) => (
              <Card key={i} item={item} hidden={second || i >= ITEMS.length} onOpen={() => openItem(item)} />
            ))}
          </div>
        ))}
      </div>

      {open && <Detail item={open} onClose={() => setOpen(null)} />}
    </section>
  );
};

export default NewArrivals;
