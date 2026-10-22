import type { ReactNode } from "react";
import Reveal from "./Reveal";

// Mobilde alt alta; masaüstünde başlık solda, açıklama sağda (12 sütun)
const SectionHeader = ({
  eyebrow,
  title,
  children,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  dark?: boolean;
}) => (
  <Reveal className="mb-12 grid gap-6 lg:mb-20 lg:grid-cols-12 lg:items-end lg:gap-10">
    <div className="lg:col-span-7">
      <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] ${dark ? "text-on-brick-muted" : "text-olive"}`}>
        <span className="h-px w-8 bg-current" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-serif text-[clamp(44px,11vw,64px)] font-semibold leading-[0.95] tracking-[-0.01em] lg:text-[clamp(64px,6.4vw,96px)] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
    {children && (
      <div className={`text-lg leading-relaxed lg:col-span-4 lg:col-start-9 ${dark ? "text-cream/70" : "text-muted"}`}>{children}</div>
    )}
  </Reveal>
);

export default SectionHeader;
