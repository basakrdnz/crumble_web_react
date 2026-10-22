import { Facebook, Instagram } from "lucide-react";
import { ADDRESS_LINES, EMAIL, FACEBOOK, HOURS, INSTAGRAM, PHONE, PHONE_HREF } from "../data/info";

const Footer = () => {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-4xl font-medium tracking-[0.09em] text-cream">CRUMBLE</div>
            <p className="mt-4 max-w-xs leading-relaxed text-cream/70">
              Kahve ve kruvasanın buluşma noktası. Her gün taze, her gün el yapımı.
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

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-cream/60">
          © {new Date().getFullYear()} Crumble Kafe. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
