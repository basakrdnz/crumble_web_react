import { RotateCcw } from "lucide-react";
import { MENU } from "../data/menu";

// Menüdeki "Geri gelenler" kutusunu sayfanın üstünde hareketsiz bir şerit olarak da gösterir
const group = (() => {
  for (const s of MENU) if ("groups" in s) for (const g of s.groups) if (g.highlight) return g;
  return undefined;
})();

const Returned = () => {
  if (!group?.id) return null;
  const go = () => document.getElementById(group.id!)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section aria-label={group.title} className="bg-paper pb-4 lg:pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <h2 className="mb-3 flex items-center gap-3 font-serif text-2xl font-semibold lg:mb-5 lg:text-3xl">
          <span className="h-px w-6 bg-brick" aria-hidden="true" />
          <span>
            Geri <span className="italic text-brick">gelenler</span>
          </span>
        </h2>
        <div className="grid grid-cols-2 gap-3 lg:max-w-3xl lg:gap-4">
          {group.items.map(([name, price]) => (
            <button
              key={name}
              type="button"
              onClick={go}
              className="flex items-center gap-3 rounded-2xl bg-brick/10 p-3 text-left transition-colors hover:bg-brick/15 lg:p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brick text-on-brick">
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-lg font-semibold leading-tight lg:text-xl">{name}</span>
                <span className="text-sm font-semibold tabular-nums text-brick">{price} ₺</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Returned;
