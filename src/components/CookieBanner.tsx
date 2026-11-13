import { useEffect, useState } from "react";
import { getConsent, OPEN_CONSENT_EVENT, setConsent, type Consent } from "../lib/analytics";

// Google Analytics için çerez onayı. Karar verilene kadar GA yüklenmez.
const CookieBanner = () => {
  const [open, setOpen] = useState(() => getConsent() === null);

  useEffect(() => {
    const reopen = () => setOpen(true);
    addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  if (!open) return null;
  const choose = (c: Consent) => {
    setConsent(c);
    setOpen(false);
  };

  return (
    <div role="dialog" aria-label="Çerez tercihleri" className="fixed inset-x-3 bottom-3 z-[70] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:max-w-sm">
      <div className="rounded-2xl border border-line bg-paper p-4 shadow-[0_12px_40px_-12px_rgba(46,42,32,0.35)]">
        <p className="text-sm leading-relaxed text-ink/80">
          Sitenin nasıl kullanıldığını anlamak için, onay verirseniz Google Analytics çerezleri kullanıyoruz. Kişisel bilgi
          toplamıyoruz.{" "}
          <a href="/gizlilik" className="underline underline-offset-2">
            Ayrıntılar
          </a>
        </p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="flex-1 rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-sand"
          >
            Reddet
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="flex-1 rounded-full bg-olive px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-olive-dark"
          >
            Kabul et
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
