import { MENU } from "../data/menu";
import { Icon } from "./Menu";

// Menüdeki kırmızı zeminli kaseleri sayfanın üstünde hareketsiz kartlar olarak da gösterir
const group = (() => {
  for (const s of MENU) if ("groups" in s) for (const g of s.groups) if (g.highlight) return g;
  return undefined;
})();

const Returned = () => {
  if (!group?.id) return null;
  const go = () => document.getElementById(group.id!)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section aria-label="Geri gelenler" className="bg-paper pb-4 lg:pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <h2 className="mb-3 flex items-center gap-3 font-serif text-2xl font-semibold lg:mb-5 lg:text-3xl">
          <span className="h-px w-6 bg-brick" aria-hidden="true" />
          <span>
            Geri <span className="italic text-brick">gelenler</span>
          </span>
        </h2>
        <div className="grid grid-cols-2 gap-3 lg:max-w-4xl lg:gap-4">
          {group.items.map(([name, price]) => (
            <button
              key={name}
              type="button"
              onClick={go}
              className="flex items-center gap-2 rounded-2xl bg-[#F3D6CC] p-3 text-left sm:gap-3 lg:gap-4 lg:p-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                <Icon name="yemek" className="h-9 w-9 text-ink/60 sm:h-11 sm:w-11 lg:h-12 lg:w-12" />
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-[17px] font-semibold leading-tight sm:text-xl">{name}</span>
                <span className="mt-0.5 block text-[13px] font-semibold tabular-nums text-ink/70">{price} ₺</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Returned;
