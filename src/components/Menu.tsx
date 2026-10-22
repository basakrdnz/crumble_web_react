import { useEffect, useRef, useState } from "react";
import { MENU, type MenuIcon, type MenuItem } from "../data/menu";

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

const Menu = () => {
  const [active, setActive] = useState(MENU[0].id);
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Kaydırırken görünen kategoriyi işaretle
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const nav = navRef.current;
      if (!nav) return;
      const line = nav.getBoundingClientRect().bottom + 24;
      let id = MENU[0].id;
      for (const s of MENU) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) id = s.id;
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

  // Aktif kategoriyi yatay listede ortala
  useEffect(() => {
    const ul = listRef.current;
    const a = ul?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (ul && a) ul.scrollTo({ left: a.offsetLeft - ul.clientWidth / 2 + a.clientWidth / 2 });
  }, [active]);

  return (
    <section id="menu" className="bg-paper pt-20 md:pt-28">
      <header className="px-5 pb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">Ne yesek, ne içsek?</p>
        <h2 className="mt-3 font-serif text-5xl font-semibold md:text-6xl">Menü</h2>
      </header>

      <nav ref={navRef} aria-label="Menü bölümleri" className="sticky top-16 z-30 border-y border-line bg-paper">
        <ul ref={listRef} className="no-scrollbar mx-auto flex max-w-2xl gap-1.5 overflow-x-auto px-4 py-2.5">
          {MENU.map((s) => {
            const on = s.id === active;
            const kap = "kap" in s;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={on ? "true" : undefined}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-full py-1.5 pl-2.5 pr-3.5 text-[15px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive ${
                    on ? (kap ? "bg-brick text-on-brick" : "bg-olive text-white") : "text-muted hover:text-ink"
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

      <div className="mx-auto max-w-2xl px-5 pb-16">
        {MENU.map((s) =>
          "kap" in s ? (
            <section key={s.id} id={s.id} className="-mx-5 mt-12 scroll-mt-14 bg-brick px-5 pb-8 pt-9 text-on-brick sm:mx-0 sm:rounded-3xl sm:px-8">
              <div className="flex items-center gap-3">
                <Icon name={s.icon} className="h-12 w-12" />
                <h3 className="font-serif text-[clamp(48px,15vw,68px)] font-semibold leading-[0.95]">Varsa Kap!</h3>
              </div>
              <p className="mt-3.5 max-w-[32ch] text-on-brick-muted">{s.lede}</p>
              <div className="mt-6 grid grid-cols-1 gap-5 min-[361px]:grid-cols-2">
                {[["Tatlı", s.tatli], ["Tuzlu", s.tuzlu]].map(([label, list]) => (
                  <div key={label as string}>
                    <h4 className="mb-2 text-[15px] font-semibold">{label}</h4>
                    <ul>
                      {(list as string[]).map((x) => (
                        <li key={x} className="border-t border-white/20 py-1.5 text-[15px]">{x}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <section key={s.id} id={s.id} className="scroll-mt-14 pt-10">
              <div className="mb-1 flex items-center gap-3">
                <Icon name={s.icon} className="h-10 w-10 text-olive" />
                <h3 className="font-serif text-4xl font-semibold leading-tight">{s.title ?? s.nav}</h3>
              </div>
              {s.groups.map((g, i) => (
                <div key={g.title ?? i}>
                  {g.title && <h4 className={`${i === 0 ? "mt-3.5" : "mt-6"} mb-1.5 text-[15px] font-semibold text-olive`}>{g.title}</h4>}
                  <ul>
                    {g.items.map((item) => (
                      <Item key={item[0] + item[1]} item={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ),
        )}
      </div>
    </section>
  );
};

export default Menu;
