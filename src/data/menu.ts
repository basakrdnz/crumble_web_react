// Ürün: [ad, fiyat, açıklama?]
export type MenuItem = [name: string, price: number, description?: string];

export type MenuIcon = "kahve" | "cay" | "kap" | "soguk" | "detox" | "yemek";

export type MenuSection =
  | {
      id: string;
      nav: string;
      icon: MenuIcon;
      title?: string;
      // highlight: renkli zeminli kutu (ör. "Geri gelenler"); id: sayfa içi bağlantı için
      groups: { title?: string; items: MenuItem[]; highlight?: boolean; id?: string }[];
    }
  | {
      id: string;
      nav: string;
      icon: MenuIcon;
      kap: true;
      lede: string;
      tatli: string[];
      tuzlu: string[];
    };

export const MENU: MenuSection[] = [
  { id: "kahve", nav: "Kahve", icon: "kahve", groups: [
    { title: "Espresso bazlı", items: [["Espresso", 150], ["Double Espresso", 220], ["Americano", 245], ["Filtre Kahve", 220],
      ["Cappuccino", 250], ["Cafe Latte", 250], ["Aromalı Latte", 265], ["Flat White", 265],
      ["Macchiato", 235], ["Aromalı Macchiato", 260], ["Mocha", 250]] },
    { title: "Türk kahvesi", items: [["Türk Kahvesi", 160], ["Double Türk Kahvesi", 190]] },
    { title: "Kış içecekleri", items: [
      ["Pumpkin Spice Latte", 265, "Pumpkin spice ve karamelli espresso, üzerinde sweet cream köpüğü. Sıcak ya da buzlu."],
      ["White Chocolate Mocha", 255, "Sıcak ya da buzlu."],
      ["Pumpkin Spice Chai", 255, "Pumpkin spice şuruplu chai tea latte. Sıcak ya da buzlu."],
      ["Chai Tea Latte", 240], ["Sıcak Çikolata", 235], ["Sahlep", 230]] },
  ]},
  { id: "cay", nav: "Çay", icon: "cay", groups: [
    { items: [["Bardak Çay", 65], ["Fincan Çay", 85], ["Bitki Çayı (küçük)", 180, "Adaçayı, elma-tarçın, hibiskus, papatya, anason, yeşil çay, lavanta, zencefil, biberiye ve tane karabiber çeşitleri"], ["Bitki Çayı (büyük)", 320], ["Termos Çay", 650]] },
  ]},
  { id: "varsa-kap", nav: "Varsa Kap!", icon: "kap", kap: true,
    lede: "Her gün aynısı yok. Vitrine bak, gözüne kestirdiğini kap.",
    tatli: ["Elmalı Kurabiye", "Triple Chocolate Cookie", "Mozaik", "Çikolatalı Kek", "Havuçlu Cevizli Kek", "Haşhaşlı Kek", "Crumble Turta", "Çıtır Kurabiye", "Vişneli Parmak Kurabiye", "Oreo Cookie", "Vatruşka", "Waffle Çeşitleri"],
    tuzlu: ["Dereotlu Poğaça", "Peynirli Poğaça", "Patatesli Börek", "Peynirli Börek", "Tavuklu Sebzeli Börek", "Çiçek Böreği", "Tavuklu Kiş", "Pizza Dilimi"] },
  { id: "soguk", nav: "Soğuk", icon: "soguk", title: "Soğuk içecekler", groups: [
    { items: [["Cool Lime", 290], ["Berry Hibiskus", 280]] },
  ]},
  { id: "detox", nav: "Detox & Matcha", icon: "detox", groups: [
    { title: "Meyve detox", items: [["No1", 330, "Elma, limon, zencefil"], ["No2", 330, "Havuç, pancar, portakal"], ["No3", 330, "Salatalık, limon, taze nane"]] },
    { title: "Matcha detox", items: [["No1", 355, "Matcha, salatalık, taze nane, tonik"], ["No2", 355, "Matcha, limon suyu, taze nane, tonik"], ["No3", 355, "Matcha, elma suyu, maden suyu"], ["No4", 355, "Matcha, portakal suyu, maden suyu"]] },
  ]},
  { id: "yemek", nav: "Yemek", icon: "yemek", groups: [
    { title: "Çorba", items: [["Günün Çorbası", 280]] },
    { title: "Makarnalar", items: [
      ["Anne Makarnası", 460, "100 g özel kıyma harcımızla, üzerinde kekikli yoğurtla"],
      ["Chicken Alfredo", 490, "100 g jülyen tavuk ve sarımsaklı krema sos, üzerinde parmesan ve fesleğen"],
      ["Pesto Alfredo", 480, "Taze pesto ile hazırlanan kremalı sos"]] },
    { title: "Ana yemek", items: [
      ["Izgara Tavuk Kase", 470, "180 g ızgara tavuk; yanında basmati pilav, patates salatası ve mevsim salatası"],
      ["Köfte Kase", 480, "160 g el yapımı köfte; yanında basmati pilav, patates salatası ve mevsim salatası"],
      ["Ekmek Arası Köfte", 440, "120 g köfte, domates, marul ve domatesli ezme sosu"]] },
    { title: "Geri gelenler", id: "geri-gelenler", highlight: true, items: [
      ["Marinara Tavuk Kase", 490, "180 g marinara soslu tavuk; yanında basmati pilav, patates salatası ve mevsim salatası"],
      ["Kremalı Tavuk Kase", 490, "180 g krema soslu tavuk; yanında basmati pilav, patates salatası ve mevsim salatası"]] },
    { title: "Kahvaltılık", items: [["Granola Kase", 350, "Chia tohumlu ballı süzme yoğurt üzerine muz, granola, ay çekirdeği, fıstık ezmesi ve kuru üzüm"]] },
    { title: "Tostlar", items: [["Akdeniz Tost", 270, "Ezine peyniri, domates ve kekik; zeytin ve domates ezmesiyle"], ["Karışık Tost", 285], ["Kaşarlı Tost", 265]] },
    { title: "Bagetler", items: [["Hindi Füme Baget", 375], ["Peynir Baget", 385], ["Dana Jambon Baget", 410]] },
  ]},
];
