// Google Analytics olayları. Kişiyi tanımlayan hiçbir bilgi gönderilmez; sadece neye tıklandığı.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    loadGA?: () => void;
    __gaLoaded?: boolean;
  }
}

// Çerez onayı: "granted" | "denied" | yok (henüz sorulmadı)
const KEY = "crumble-consent";
export type Consent = "granted" | "denied";
export const getConsent = (): Consent | null => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
};
export const setConsent = (c: Consent) => {
  try {
    localStorage.setItem(KEY, c);
  } catch {
    /* gizli sekme vb.: tercih bu oturumla sınırlı kalır */
  }
  if (c === "granted") window.loadGA?.();
  else if (window.__gaLoaded) location.reload(); // yüklenmiş GA'yı durdurmanın en temiz yolu
};
export const OPEN_CONSENT_EVENT = "crumble:open-consent";

// Onay yoksa hiçbir olay gönderilmez
export const track = (event: string, label?: string) => {
  if (window.__gaLoaded) window.gtag?.("event", event, label ? { label } : {});
};

// Tüm sayfada tek dinleyici: data-track işaretli öğeler ve telefon / yol tarifi / sosyal medya bağlantıları
export const startClickTracking = () => {
  document.addEventListener("click", (e) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track], a[href]");
    if (!el) return;
    if (el.dataset.track) return track(el.dataset.track, el.dataset.trackLabel);
    const href = el.getAttribute("href") ?? "";
    if (href.startsWith("tel:")) track("telefon_tikla");
    else if (href.includes("google.com/maps")) track("yol_tarifi_tikla");
    else if (href.includes("instagram.com")) track("instagram_tikla");
    else if (href.includes("facebook.com")) track("facebook_tikla");
    else if (href.startsWith("mailto:")) track("eposta_tikla");
  });
};
