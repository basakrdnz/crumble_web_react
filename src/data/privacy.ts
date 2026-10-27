// Gizlilik politikası (Crumble uygulaması ve bu web sitesi). Uygulamadaki KVKK
// aydınlatma metniyle (crumble deposu: app/assets/yasal/kvkk_tr.txt) aynı
// içerik; biri değişince diğeri de güncellenir.

import { ADDRESS_LINES, EMAIL } from "./info";

export type Lang = "tr" | "en";

export interface PrivacySection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface PrivacyText {
  title: string;
  updated: string;
  intro: string;
  sections: PrivacySection[];
}

export const PRIVACY_UPDATED = "2026-10-27";

const COMPANY = "Crumble Cafe Gıda Pazarlama Ticaret Limited Şirketi";
const MERSIS = "0215062003000001";
const ADDRESS = ADDRESS_LINES.join(", ");

export const PRIVACY: Record<Lang, PrivacyText> = {
  tr: {
    title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
    updated: "Son güncelleme: 27 Ekim 2026",
    intro:
      "Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun (\"KVKK\") 10. maddesi uyarınca, Crumble iPhone uygulaması üzerinden verdiğin siparişler ve crumbleofficial.com web sitesini ziyaretin sırasında kişisel verilerinin nasıl işlendiğini anlatır.",
    sections: [
      {
        title: "Veri sorumlusu",
        paragraphs: [`${COMPANY}, ${ADDRESS} ("Crumble Kafe"). MERSİS: ${MERSIS}. E-posta: ${EMAIL}`],
      },
      {
        title: "Uygulamada hangi verileri işliyoruz?",
        items: [
          "Cep telefonu numaran: siparişe giriş ve SMS ile doğrulama için.",
          "Sipariş bilgilerin: sipariş içeriği, tutar, tarih ve saat, sipariş durumu, teslim kodu, siparişi onayladığın sözleşme metinlerinin sürümü.",
          "Cihaz bildirim anahtarı: siparişin onaylandığında ve hazır olduğunda telefonuna bildirim gönderebilmek için.",
          "Kullanım ve hata kayıtları: hangi ekranların açıldığı, sepete ekleme ve sipariş gibi olaylar, uygulama çökerse cihaz modeli ve hata ayrıntısı. Bu kayıtlar telefon numaranla eşleştirilmez.",
          "Güvenlik kayıtları: uygulamanın ve SMS doğrulamanın kötüye kullanılmasını önlemek için teknik kayıtlar.",
        ],
        paragraphs: [
          "Uygulamada ödeme alınmaz; ödemeni siparişini teslim alırken kafenin kasasında yaparsın. Kart bilgilerin uygulamaya girilmez. Adını, e-posta adresini ya da konumunu istemiyoruz. Dil ve görünüm tercihlerin yalnızca telefonunda tutulur.",
        ],
      },
      {
        title: "Web sitesinde",
        paragraphs: [
          "crumbleofficial.com'da form ya da üyelik yoktur. Ziyaret istatistikleri için Google Analytics kullanılır (sayfa görüntüleme, yaklaşık konum, cihaz ve tarayıcı bilgisi; çerezlerle). Konum bölümündeki harita Google Haritalar'dan yüklenir. Bu hizmetlerin verileri Google'ın gizlilik politikasına tabidir.",
        ],
      },
      {
        title: "Hangi amaçlarla ve hangi hukuki sebeplerle?",
        items: [
          "Siparişini almak, hazırlamak ve teslim etmek, gerekirse iptal etmek; siparişinin durumunu bildirmek. Hukuki sebep: bir sözleşmenin kurulması veya ifası için gerekli olması (KVKK m. 5/2-c).",
          "Mesafeli satış kayıtlarını, muhasebe ve vergi kayıtlarını tutmak. Hukuki sebep: kanuni yükümlülüğün yerine getirilmesi (KVKK m. 5/2-ç).",
          "Uygulamanın ve SMS doğrulamanın güvenliğini sağlamak; hataları bulup düzeltmek; uygulamanın ve web sitesinin nasıl kullanıldığını genel olarak ölçmek. Hukuki sebep: temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatimiz (KVKK m. 5/2-f).",
        ],
      },
      {
        title: "Kimlere aktarıyoruz?",
        items: [
          "Google (Firebase, Google Analytics): uygulamanın altyapı hizmeti (giriş ve SMS doğrulama, sipariş veritabanı, bildirimler, kullanım istatistikleri ve çökme raporları) ve web sitesi istatistikleri. Sipariş verilerin Google'ın Almanya'daki (Frankfurt) sunucularında barındırılır; bazı hizmetler gereği veriler Google'ın başka ülkelerdeki sunucularında da işlenebilir.",
          "Apple: siparişinle ilgili bildirimlerin telefonuna iletilmesi için (yalnızca cihaz bildirim anahtarı ve bildirim metni).",
          "Talep hâlinde yetkili kamu kurum ve kuruluşları: kanuni yükümlülükler için.",
        ],
        paragraphs: ["Verilerini satmıyor, reklam amacıyla kullanmıyor ve üçüncü kişilerle paylaşmıyoruz."],
      },
      {
        title: "Yurt dışına aktarım",
        paragraphs: [
          "Google sunucularına aktarım KVKK m. 9 kapsamında yurt dışına aktarımdır. Uygulamada bu aktarıma, telefon numaranı doğrularken ayrı bir onay kutusuyla açık rıza verirsin. Uygulama Google altyapısı olmadan çalışamadığı için sipariş verebilmen bu rızaya bağlıdır. Rızanı dilediğin zaman uygulamada Ayarlar → \"Hesabımı ve verilerimi sil\" ile ya da aşağıdaki başvuru yollarıyla geri alabilirsin; geri alma, o tarihe kadar yapılan aktarımları etkilemez.",
        ],
      },
      {
        title: "Ne kadar süre saklıyoruz?",
        items: [
          "Telefon numaran ve bildirim anahtarın: hesabını silene kadar.",
          "Mesafeli satış onay kayıtları: siparişten itibaren 3 yıl.",
          "Sipariş kayıtları (içerik, tutar, tarih): Türk Ticaret Kanunu ve Vergi Usul Kanunu gereği 10 yıl. Hesabını sildiğinde bu kayıtlar telefon numaranla bağı kesilerek isimsiz olarak saklanır.",
          "Kullanım ve çökme kayıtları, web sitesi istatistikleri: en fazla 14 ay.",
        ],
        paragraphs: ["Süre dolduğunda verilerin silinir, yok edilir ya da anonim hâle getirilir."],
      },
      {
        title: "Hesabını ve verilerini silmek",
        paragraphs: [
          "Uygulamada Ayarlar → \"Hesabımı ve verilerimi sil\" ile telefon numaran, bildirim anahtarların ve KVKK onay kaydın hemen silinir; geçmiş siparişlerin isimsiz kalır. Süren bir siparişin varsa silme, sipariş bittikten sonra yapılabilir. Uygulamaya erişemiyorsan " +
            EMAIL +
            " adresine kayıtlı telefon numaranla yazabilirsin.",
        ],
      },
      {
        title: "Hakların",
        paragraphs: [
          "KVKK'nın 11. maddesi uyarınca; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini, KVKK'daki şartlar çerçevesinde silinmesini veya yok edilmesini ve bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhine bir sonucun ortaya çıkmasına itiraz etme ve kanuna aykırı işleme nedeniyle zarara uğraman hâlinde zararın giderilmesini talep etme haklarına sahipsin.",
        ],
      },
      {
        title: "Başvuru ve iletişim",
        paragraphs: [
          `Başvurunu ${EMAIL} adresine e-postayla ya da ${ADDRESS} adresine yazılı olarak iletebilirsin. Başvurun en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.`,
          "Bu politikayı değiştirirsek güncel hâlini bu sayfada yayınlar, önemli değişikliklerde uygulamada yeniden onayını isteriz.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: 27 October 2026",
    intro:
      "This policy explains how your personal data is processed when you order through the Crumble iPhone app and visit crumbleofficial.com, in line with Turkey's Personal Data Protection Law No. 6698 (\"KVKK\"). The Turkish version prevails.",
    sections: [
      {
        title: "Data controller",
        paragraphs: [`${COMPANY}, ${ADDRESS}, Turkey ("Crumble Kafe"). MERSIS: ${MERSIS}. Email: ${EMAIL}`],
      },
      {
        title: "What we process in the app",
        items: [
          "Your mobile number: to sign in for ordering and verify it by SMS.",
          "Your orders: items, amount, date and time, status, pickup code, and the version of the sales terms you accepted.",
          "Device notification token: to notify you when your order is accepted and ready.",
          "Usage and crash data: screens opened, events such as adding to cart and ordering, and device model and error details if the app crashes. This is not linked to your phone number.",
          "Security records: technical logs to prevent abuse of the app and SMS verification.",
        ],
        paragraphs: [
          "No payment is taken in the app; you pay at the café counter when you pick up your order. Card details are never entered in the app. We don't ask for your name, email address or location. Language and appearance settings stay on your phone.",
        ],
      },
      {
        title: "On the website",
        paragraphs: [
          "crumbleofficial.com has no forms or accounts. Google Analytics is used for visit statistics (page views, approximate location, device and browser, using cookies). The map in the location section is loaded from Google Maps. Data collected by these services is subject to Google's privacy policy.",
        ],
      },
      {
        title: "Why, and on what legal basis",
        items: [
          "To take, prepare, hand over and, if needed, cancel your order, and to tell you its status. Basis: performance of a contract (KVKK art. 5/2-c).",
          "To keep distance-sales, accounting and tax records. Basis: legal obligation (KVKK art. 5/2-ç).",
          "To keep the app and SMS verification secure, find and fix errors, and measure in general how the app and website are used. Basis: our legitimate interest, provided your fundamental rights are not harmed (KVKK art. 5/2-f).",
        ],
      },
      {
        title: "Who we share it with",
        items: [
          "Google (Firebase, Google Analytics): the app's infrastructure (sign-in and SMS verification, order database, notifications, usage statistics and crash reports) and website statistics. Order data is hosted on Google's servers in Germany (Frankfurt); some services may also process data on Google servers in other countries.",
          "Apple: to deliver order notifications to your phone (device notification token and notification text only).",
          "Public authorities, when legally required.",
        ],
        paragraphs: ["We don't sell your data, use it for advertising or share it with other third parties."],
      },
      {
        title: "Transfer abroad",
        paragraphs: [
          "Transfer to Google's servers is a transfer abroad under KVKK art. 9. In the app you give explicit consent to it with a separate checkbox when verifying your number. Because the app cannot work without Google's infrastructure, ordering depends on this consent. You can withdraw it at any time with Settings → \"Delete my account and data\" or through the contact details below; withdrawal does not affect transfers made before it.",
        ],
      },
      {
        title: "How long we keep it",
        items: [
          "Phone number and notification token: until you delete your account.",
          "Distance-sales consent records: 3 years from the order.",
          "Order records (items, amount, date): 10 years, as required by the Turkish Commercial Code and Tax Procedure Law. When you delete your account they are kept anonymously, unlinked from your phone number.",
          "Usage and crash data, website statistics: up to 14 months.",
        ],
        paragraphs: ["After that, data is deleted, destroyed or anonymised."],
      },
      {
        title: "Deleting your account and data",
        paragraphs: [
          "In the app, Settings → \"Delete my account and data\" immediately deletes your phone number, notification tokens and privacy consent record; past orders stay anonymous. If an order is in progress, you can delete once it is finished. If you can't access the app, email " +
            EMAIL +
            " from or mentioning your registered phone number.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Under KVKK art. 11 you can ask whether your data is processed and request information about it; learn the purpose and whether it is used accordingly; know the third parties it is transferred to in Turkey or abroad; ask for correction, deletion or destruction and for those to be notified to recipients; object to a result against you arising solely from automated analysis; and claim compensation for damage caused by unlawful processing.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          `Send requests to ${EMAIL} or in writing to ${ADDRESS}, Turkey. We answer free of charge within 30 days.`,
          "If we change this policy, we publish the current version on this page and ask for your consent again in the app for significant changes.",
        ],
      },
    ],
  },
};
