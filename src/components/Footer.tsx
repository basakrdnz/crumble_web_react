import { Facebook, Instagram } from "lucide-react";
import { ADDRESS_LINES, EMAIL, FACEBOOK, HOURS, INSTAGRAM, PHONE, PHONE_HREF } from "../data/info";

const Footer = () => {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 pt-20 lg:px-10 lg:pt-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-4xl font-medium tracking-[0.09em] text-cream">CRUMBLE</div>
            <p className="mt-4 max-w-xs leading-relaxed text-cream/70">
              Kahve, sohbet ve şömine başı. Her gün taze, her gün el yapımı.
            </p>
            <div className="mt-5 flex gap-4">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/70 transition-colors hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream/70 transition-colors hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/60">Çalışma saatleri</h3>
            <dl className="mt-4 space-y-2">
              {HOURS.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="text-cream/80">{h.days}</dt>
                  <dd className="tabular-nums">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/60">İletişim</h3>
            <div className="mt-4 space-y-1 text-cream/80">
              {ADDRESS_LINES.map((l) => (
                <p key={l}>{l}</p>
              ))}
              <p className="pt-3">
                <a href={PHONE_HREF} className="hover:text-white">{PHONE}</a>
              </p>
              <p>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-cream/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Crumble Kafe. Tüm hakları saklıdır.</span>
          <span>Güneypark · Çankaya · Ankara</span>
        </div>
      </div>

      {/* Sayfayı kapatan dev imza */}
      <div aria-hidden="true" className="select-none overflow-hidden">
        <div className="-mb-[0.18em] mt-6 text-center font-serif text-[21.5vw] font-medium leading-none tracking-[0.06em] text-cream/[0.07]">
          CRUMBLE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
