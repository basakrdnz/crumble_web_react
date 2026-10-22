// Ürün: [ad, fiyat, açıklama?]
export type MenuItem = [name: string, price: number, description?: string];

export type MenuIcon = "kahve" | "cay" | "kap" | "soguk" | "detox" | "yemek";

export type MenuSection =
  | {
      id: string;
      nav: string;
      icon: MenuIcon;
      title?: string;
      groups: { title?: string; items: MenuItem[] }[];
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
    { title: "Espresso bazlı", items: [["Espresso", 110], ["Double Espresso", 215], ["Americano", 215], ["Filtre Kahve", 185],
      ["Cappuccino", 215], ["Cafe Latte", 215], ["Aromalı Latte", 220], ["Flat White", 220],
      ["Macchiato", 215], ["Aromalı Macchiato", 220], ["Mocha", 210]] },
    { title: "Türk kahvesi", items: [["Türk Kahvesi", 150], ["Double Türk Kahvesi", 190]] },
  ]},
  { id: "cay", nav: "Çay & Sıcaklar", icon: "cay", groups: [
    { title: "Çay", items: [["Bardak Çay", 65], ["Fincan Çay", 85], ["Bitki Çayı (küçük)", 160], ["Bitki Çayı (büyük)", 250], ["Termos Çay", 550]] },
    { title: "Diğer sıcaklar", items: [["Chai Tea Latte", 190], ["Sıcak Çikolata", 220], ["Sahlep", 220]] },
  ]},
  { id: "varsa-kap", nav: "Varsa Kap!", icon: "kap", kap: true,
    lede: "Her gün aynısı yok. Vitrine bak, gözüne kestirdiğini kap.",
    tatli: ["Elmalı Kurabiye", "Triple Chocolate Cookie", "Mozaik", "Çikolatalı Kek", "Havuçlu Cevizli Kek", "Haşhaşlı Kek", "Crumble Turta", "Çıtır Kurabiye", "Vişneli Parmak Kurabiye"],
    tuzlu: ["Dereotlu Poğaça", "Patatesli Börek", "Peynirli Börek", "Tavuklu Sebzeli Börek", "Pizza Dilimi"] },
  { id: "soguk", nav: "Soğuk", icon: "soguk", title: "Soğuk içecekler", groups: [
    { items: [["Cool Lime", 290], ["Berry Hibiskus", 280]] },
  ]},
  { id: "detox", nav: "Detox & Matcha", icon: "detox", groups: [
    { title: "Meyve detox", items: [["No1", 290, "Elma, limon, zencefil"], ["No2", 290, "Havuç, pancar, portakal"], ["No3", 290, "Salatalık, limon, taze nane"]] },
    { title: "Matcha detox", items: [["No1", 330, "Matcha, salatalık, taze nane, tonik"], ["No2", 330, "Matcha, limon suyu, taze nane, tonik"], ["No3", 330, "Matcha, elma suyu, maden suyu"], ["No4", 330, "Matcha, portakal suyu, maden suyu"]] },
  ]},
  { id: "yemek", nav: "Yemek", icon: "yemek", groups: [
    { title: "Çorba", items: [["Günün Çorbası", 240]] },
    { title: "Makarnalar", items: [
      ["Anne Makarnası", 450, "Özel kıyma harcımız ve kekikli yoğurt"],
      ["Chicken Alfredo", 480, "Jülyen tavuk, krema, sarımsak, yeşil biber; üzeri parmesan ve fesleğen"],
      ["Pesto Alfredo", 460, "Krema ve taze pesto sos"]] },
    { title: "Ana yemek", items: [["Izgara Tavuk Kase", 460, "Izgara tavuk, basmati pirinç pilavı ve salata"], ["Köfte Kase", 480, "El yapımı köfte, basmati pirinç pilavı ve salata"], ["Ekmek Arası Köfte", 430]] },
    { title: "Tostlar", items: [["Akdeniz Tost", 255], ["Karışık Tost", 285], ["Kaşarlı Tost", 250]] },
    { title: "Bagetler", items: [["Hindi Füme Baget", 360], ["Peynir Baget", 370], ["Jambon Baget", 390]] },
  ]},
];
