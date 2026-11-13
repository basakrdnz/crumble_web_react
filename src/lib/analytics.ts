// Google Analytics olayları. Kişiyi tanımlayan hiçbir bilgi gönderilmez; sadece neye tıklandığı.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const track = (event: string, label?: string) => window.gtag?.("event", event, label ? { label } : {});

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
