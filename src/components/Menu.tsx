import { useEffect, useRef, useState } from "react";
import { MENU, type MenuIcon, type MenuItem } from "../data/menu";
import SectionHeader from "./ui/SectionHeader";

const ICONS: Record<MenuIcon, JSX.Element> = {
  kahve: (
    <>
      <path d="M10 19h24v9a10 10 0 0 1-10 10h-4a10 10 0 0 1-10-10z" />
      <path d="M34 22h3a4 4 0 0 1 0 8h-3" />
      <path d="M17 7c-2 3 2 5 0 8M24 7c-2 3 2 5 0 8M31 7c-2 3 2 5 0 8" />
    </>
  ),
  cay: (
    <>
      <path d="M17 9h14c-1 6-4 7-4 11s3 6 3 11c0 3-3 4-6 4s-6-1-6-4c0-5 3-7 3-11s-3-5-4-11z" />
      <path d="M10 40h28" />
      <path d="M19 14h10" />
    </>
  ),
  kap: (
    <>
      <path d="M7 26h34l-4 11H11z" />
      <path d="M7 26c1-4 4-5 6-3 1-3 5-4 7-1 2-3 6-3 8 0 2-2 6-2 7 1 2-1 5 0 6 3" />
      <circle cx="16" cy="17" r="1.4" />
      <circle cx="26" cy="14" r="1.4" />
      <circle cx="33" cy="18" r="1.4" />
    </>
  ),
  soguk: (
    <>
      <path d="M13 15h22l-3 25H16z" />
      <path d="M26 15l5-9h5" />
      <rect x="18" y="21" width="6" height="6" rx="1.5" />
      <rect x="24" y="27" width="6" height="6" rx="1.5" />
    </>
  ),
  detox: (
    <>
      <path d="M11 37C11 21 21 12 38 10c-1 17-10 27-27 27z" />
      <path d="M11 37l15-15" />
      <path d="M19 29h6M24 24v-6" />
    </>
  ),
  yemek: (
    <>
      <path d="M7 23h34a17 14 0 0 1-34 0z" />
      <path d="M17 39h14" />
      <path d="M19 17c0-3 3-3 3-6M26 17c0-3 3-3 3-6" />
    </>
  ),
};

const Icon = ({ name, className }: { name: MenuIcon; className: string }) => (
  <svg
    viewBox="0 0 48 48"
    aria-hidden="true"
    className={`block fill-none stroke-current ${className}`}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {ICONS[name]}
  </svg>
);

const Item = ({ item: [name, price, desc] }: { item: MenuItem }) => (
  <li className="py-2.5">
    <div className="flex items-baseline gap-2.5">
      <span className="font-medium">{name}</span>
      <span aria-hidden="true" className="flex-1 min-w-3 -translate-y-1 border-b-[1.5px] border-dotted border-line" />
      <span className="font-semibold tabular-nums whitespace-nowrap">{price} ₺</span>
    </div>
    {desc && <p className="mt-1 max-w-[46ch] text-sm leading-snug text-muted">{desc}</p>}
  </li>
);

// Bölüm başlığı bu çizginin üstüne çıkınca aktif sayılır (header + mobil çubuk + pay)
const SPY_LINE = 160;

const Menu = () => {
  const [active, setActive] = useState(MENU[0].id);
  const listRef = useRef<HTMLUListElement>(null);

  // Kaydırırken görünen kategoriyi işaretle
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      let id = MENU[0].id;
      for (const s of MENU) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= SPY_LINE) id = s.id;
      }
      setActive(id);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", update);
    update();
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", update);
    };
  }, []);

  // Mobil çubukta aktif kategoriyi yatayda ortala
  useEffect(() => {
    const ul = listRef.current;
    const a = ul?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!ul || !a || !ul.offsetParent) return;
    const ulBox = ul.getBoundingClientRect();
    const aBox = a.getBoundingClientRect();
    ul.scrollTo({ left: ul.scrollLeft + aBox.left - ulBox.left - ulBox.width / 2 + aBox.width / 2 });
  }, [active]);

  return (
    <section id="menu" className="bg-paper pt-20 lg:pt-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader eyebrow="Menü" title={<>Ne yesek, <span className="italic text-olive">ne içsek?</span></>}>
          Kahveden detoxa, makarnadan bagete. Vitrindekiler için kırmızı bölüme bakın; her gün değişir.
        </SectionHeader>
      </div>

      {/* Mobil: yatay kategori çubuğu */}
      <nav aria-label="Menü bölümleri" className="sticky top-16 z-30 border-y border-line bg-paper lg:hidden">
        <ul ref={listRef} className="no-scrollbar flex gap-1.5 overflow-x-auto px-4 py-2.5">
          {MENU.map((s) => {
            const on = s.id === active;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={on ? "true" : undefined}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-full py-1.5 pl-2.5 pr-3.5 text-[15px] font-medium transition-colors ${
                    on ? ("kap" in s ? "bg-brick text-on-brick" : "bg-olive text-white") : "text-muted"
                  }`}
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                  {s.nav}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mx-auto max-w-7xl px-5 pb-20 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-32">
        {/* Masaüstü: yapışkan dikey kategori listesi */}
        <aside className="hidden lg:col-span-3 lg:block">
          <nav aria-label="Menü bölümleri" className="sticky top-28">
            <ol className="border-l border-line">
              {MENU.map((s, i) => {
                const on = s.id === active;
                const kap = "kap" in s;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={on ? "true" : undefined}
                      className={`-ml-px flex items-baseline gap-4 border-l-2 py-2.5 pl-6 transition-colors ${
                        on ? (kap ? "border-brick text-brick" : "border-olive text-ink") : "border-transparent text-muted hover:text-ink"
                      }`}
                    >
                      <span className="w-5 text-xs tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-serif text-[26px] font-semibold leading-tight">{s.nav}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </aside>

        <div className="lg:col-span-9">
          {MENU.map((s) =>
            "kap" in s ? (
              <section
                key={s.id}
                id={s.id}
                className="-mx-5 mt-14 scroll-mt-14 bg-brick px-5 pb-9 pt-10 text-on-brick sm:mx-0 sm:rounded-3xl sm:px-8 lg:mt-20 lg:scroll-mt-12 lg:grid lg:grid-cols-9 lg:gap-10 lg:p-12"
              >
                <div className="lg:col-span-4">
                  <Icon name={s.icon} className="h-12 w-12 lg:h-16 lg:w-16" />
                  <h3 className="mt-3 font-serif text-[clamp(52px,15vw,68px)] font-semibold leading-[0.9] lg:text-[88px]">Varsa Kap!</h3>
                  <p className="mt-4 max-w-[30ch] text-on-brick-muted lg:text-lg">{s.lede}</p>
                </div>
                <div className="mt-7 grid grid-cols-1 gap-6 min-[361px]:grid-cols-2 lg:col-span-5 lg:mt-0">
                  {([["Tatlı", s.tatli], ["Tuzlu", s.tuzlu]] as const).map(([label, list]) => (
                    <div key={label}>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-on-brick-muted">{label}</h4>
                      <ul>
                        {list.map((x) => (
                          <li key={x} className="border-t border-white/20 py-2 text-[15px]">{x}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ) : (
              <section key={s.id} id={s.id} className="scroll-mt-14 pt-12 first:pt-4 lg:scroll-mt-12 lg:border-t lg:border-line lg:mt-14 lg:pt-14 lg:first:mt-0 lg:first:border-0 lg:first:pt-0">
                <div className="mb-2 flex items-center gap-3 lg:mb-6">
                  <Icon name={s.icon} className="h-10 w-10 text-olive lg:h-12 lg:w-12" />
                  <h3 className="font-serif text-4xl font-semibold leading-tight lg:text-5xl">{s.title ?? s.nav}</h3>
                </div>
                <div className="lg:columns-2 lg:gap-14">
                  {s.groups.map((g, i) => (
                    <div key={g.title ?? i} className="break-inside-avoid lg:mb-8">
                      {g.title && (
                        <h4 className={`${i === 0 ? "mt-3.5" : "mt-6"} mb-1.5 text-[15px] font-semibold text-olive lg:mt-0 lg:text-xs lg:uppercase lg:tracking-[0.25em]`}>
                          {g.title}
                        </h4>
                      )}
                      <ul>
                        {g.items.map((item) => (
                          <Item key={item[0] + item[1]} item={item} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
