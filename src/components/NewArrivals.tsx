import { useEffect, useRef, useState } from "react";
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
    short: "Pumpkin spice ve karamel ile espresso; sweet cream köpük.",
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
    short: "Ballı süzme yoğurt; muz, granola ve fıstık ezmesi ile.",
    img: "/media/yeni-granola-kase.webp",
    alt: "Yoğurt, muz, granola, fıstık ezmesi ve kuru üzümlü granola kase",
    panel: "bg-[#E4E6D2]",
    variants: [{ menuName: "Granola Kase" }],
  },
];

const REPEAT = 4; // şeridin kesintisiz dönmesi için kartlar tekrarlanır (yarısı ekranı doldurmalı)
const SPEED = 28; // kendiliğinden kayma, px/sn
const RESUME_AFTER = 2500; // kullanıcı bıraktıktan sonra kendiliğinden kaymaya dönme süresi (ms)

const Card = ({ item, hidden, onOpen }: { item: Arrival; hidden: boolean; onOpen: () => void }) => (
  <button
    type="button"
    onClick={onOpen}
    tabIndex={hidden ? -1 : undefined}
    aria-hidden={hidden || undefined}
    aria-label={hidden ? undefined : `${item.name}: fiyat ve içerik`}
    className={`relative flex w-[80vw] max-w-[340px] shrink-0 items-center gap-3 rounded-2xl ${item.panel} p-3 pr-10 text-left sm:w-[340px] lg:w-[380px] lg:gap-4 lg:p-4 lg:pr-11`}
  >
    <span className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-ink/70 shadow-sm">
      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
    </span>
    <span className="flex h-16 w-16 shrink-0 items-center justify-center lg:h-20 lg:w-20">
      <img
        src={item.img}
        alt=""
        className="max-h-full max-w-full object-contain drop-shadow-[0_8px_8px_rgba(46,42,32,0.25)]"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </span>
    <span className="min-w-0">
      <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-ink/60 lg:text-[10px]">
        <span className="h-1.5 w-1.5 rounded-full bg-brick" aria-hidden="true" />
        Yeni · {item.tag}
      </span>
      <span className="block truncate font-serif text-xl font-semibold leading-tight lg:text-2xl">{item.name}</span>
      <span className="mt-0.5 block truncate text-[13px] text-ink/70">{item.short}</span>
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
  const track = useRef<HTMLDivElement>(null);
  const secondHalf = useRef<HTMLDivElement>(null);
  // Animasyon durumu render'a bağlı değil: her karede transform doğrudan yazılır (akıcı, takılmasız)
  const st = useRef({ x: 0, vel: 0, hover: false, lastTouch: -Infinity, moved: false, open: false });
  const drag = useRef<{ id: number; sx: number; sy: number; sOff: number; lx: number; lt: number; axis: "x" | "y" | null } | null>(null);

  useEffect(() => {
    st.current.open = !!open;
  }, [open]);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      const s = st.current;
      const half = secondHalf.current?.offsetLeft ?? 0;
      if (!drag.current?.axis) {
        if (Math.abs(s.vel) > 8) {
          // parmakla atınca savrulup yavaşlar
          s.x += s.vel * dt;
          s.vel *= Math.pow(0.04, dt);
        } else {
          s.vel = 0;
          if (!reduce && !s.hover && !s.open && now - s.lastTouch > RESUME_AFTER) s.x += SPEED * dt;
        }
      }
      if (half > 0) s.x = ((s.x % half) + half) % half;
      if (track.current) track.current.style.transform = `translate3d(${-s.x}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Dokunma ve fare için tek sürükleme mantığı; dikey hareket sayfayı kaydırmaya devam eder (touch-action: pan-y)
  const onPointerDown = (e: React.PointerEvent) => {
    const s = st.current;
    s.vel = 0;
    s.moved = false;
    s.lastTouch = performance.now();
    drag.current = { id: e.pointerId, sx: e.clientX, sy: e.clientY, sOff: s.x, lx: e.clientX, lt: performance.now(), axis: null };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const dx = e.clientX - d.sx;
    const dy = e.clientY - d.sy;
    if (!d.axis) {
      if (Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(dy)) {
        d.axis = "x";
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      } else if (Math.abs(dy) > 6) {
        drag.current = null;
        return;
      } else return;
    }
    const now = performance.now();
    const s = st.current;
    s.x = d.sOff - dx;
    s.moved = true;
    s.lastTouch = now;
    const dtm = Math.max(now - d.lt, 1) / 1000;
    s.vel = 0.7 * (-(e.clientX - d.lx) / dtm) + 0.3 * s.vel;
    d.lx = e.clientX;
    d.lt = now;
  };
  const endDrag = (e: React.PointerEvent) => {
    if (!drag.current || drag.current.id !== e.pointerId) return;
    if (performance.now() - drag.current.lt > 80) st.current.vel = 0; // durup bıraktıysa savurma yok
    st.current.lastTouch = performance.now();
    drag.current = null;
  };

  const half = Array.from({ length: REPEAT }, () => ITEMS).flat();

  return (
    <section id="yeni" aria-label="Yeni gelenler" className="bg-paper py-6 lg:py-10">
      <div className="mx-auto mb-3 max-w-7xl px-5 lg:mb-5 lg:px-10">
        <h2 className="flex items-center gap-3 font-serif text-2xl font-semibold lg:text-3xl">
          <span className="h-px w-6 bg-olive" aria-hidden="true" />
          <span>
            Yeni <span className="italic text-olive">gelenler</span>
          </span>
        </h2>
      </div>

      <div
        className="cursor-grab select-none overflow-hidden px-5 active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => (st.current.hover = true)}
        onMouseLeave={() => {
          st.current.hover = false;
          st.current.lastTouch = performance.now();
        }}
        onClickCapture={(e) => {
          // sürükleme bir karta tıklama sayılmaz
          if (st.current.moved) {
            e.stopPropagation();
            e.preventDefault();
            st.current.moved = false;
          }
        }}
      >
        <div ref={track} className="relative flex w-max gap-3 will-change-transform lg:gap-4">
          {[false, true].map((second) => (
            <div key={String(second)} ref={second ? secondHalf : undefined} className="flex shrink-0 gap-3 lg:gap-4">
              {half.map((item, i) => (
                <Card key={i} item={item} hidden={second || i >= ITEMS.length} onOpen={() => setOpen(item)} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {open && <Detail item={open} onClose={() => setOpen(null)} />}
    </section>
  );
};

export default NewArrivals;
