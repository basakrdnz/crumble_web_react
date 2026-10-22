// Kafe bilgileri: saat, adres ve iletişim tek yerden yönetilir.

export const HOURS = [
  { days: "Pazartesi – Perşembe", time: "12:00 – 22:00" },
  { days: "Cuma", time: "12:00 – 00:00" },
  { days: "Cumartesi – Pazar", time: "09:00 – 00:00" },
];

// Date.getDay() (0 = Pazar) -> HOURS indeksi
const DAY_TO_HOURS = [2, 0, 0, 0, 0, 1, 2];

export const todaysHours = (date = new Date()) => HOURS[DAY_TO_HOURS[date.getDay()]].time;

export const ADDRESS_LINES = [
  "İlkbahar Caddesi, Sinpaş Marina Yolu",
  "Güneypark Küme Evleri, No:78",
  "Çankaya / Ankara",
];

export const PHONE = "0541 460 90 20";
export const PHONE_HREF = "tel:+905414609020";
export const EMAIL = "info@crumbleofficial.com";
export const INSTAGRAM = "https://www.instagram.com/crumble.official/";
export const FACEBOOK = "https://www.facebook.com/crumble.official";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=İlkbahar+Caddesi+Sinpaş+Marina+Yolu+Güneypark+Küme+Evleri+No:78+Çankaya+Ankara";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=İlkbahar+Caddesi+Sinpaş+Marina+Yolu+Güneypark+Küme+Evleri+No:78+Çankaya+Ankara&output=embed";
