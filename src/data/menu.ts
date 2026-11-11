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
    { title: "Espresso bazlı", items: [["Espresso", 130], ["Double Espresso", 215], ["Americano", 225], ["Filtre Kahve", 190],
      ["Cappuccino", 225], ["Cafe Latte", 230], ["Aromalı Latte", 245], ["Flat White", 240],
      ["Macchiato", 215], ["Aromalı Macchiato", 245], ["Mocha", 240]] },
    { title: "Türk kahvesi", items: [["Türk Kahvesi", 160], ["Double Türk Kahvesi", 190]] },
    { title: "Kış içecekleri", items: [
      ["Pumpkin Spice Latte", 255, "Pumpkin spice ve karamel ile espresso; üzeri sweet cream köpük"],
      ["White Chocolate Mocha", 245, "Beyaz çikolata sosu, espresso ve süt; sweet cream köpük ve beyaz çikolata rendesi ile"],
      ["Pumpkin Spice Chai", 240, "Pumpkin spice şurubu ile chai tea latte"]] },
  ]},
  { id: "cay", nav: "Çay & Sıcaklar", icon: "cay", groups: [
    { title: "Çay", items: [["Bardak Çay", 65], ["Fincan Çay", 85], ["Bitki Çayı (küçük)", 180, "Adaçayı, elma-tarçın, hibiskus, papatya, anason, yeşil çay, lavanta, zencefil, biberiye, tane karabiber"], ["Bitki Çayı (büyük)", 320], ["Termos Çay", 650]] },
    { title: "Diğer sıcaklar", items: [["Chai Tea Latte", 210], ["Sıcak Çikolata", 235], ["Sahlep", 230]] },
  ]},
  { id: "varsa-kap", nav: "Varsa Kap!", icon: "kap", kap: true,
    lede: "Her gün aynısı yok. Vitrine bak, gözüne kestirdiğini kap.",
    tatli: ["Elmalı Kurabiye", "Triple Chocolate Cookie", "Mozaik", "Çikolatalı Kek", "Havuçlu Cevizli Kek", "Haşhaşlı Kek", "Crumble Turta", "Çıtır Kurabiye", "Vişneli Parmak Kurabiye", "Oreo Cookie", "Vatruşka", "Waffle Çeşitleri"],
    tuzlu: ["Dereotlu Poğaça", "Peynirli Poğaça", "Patatesli Börek", "Peynirli Börek", "Tavuklu Sebzeli Börek", "Çiçek Böreği", "Tavuklu Kiş", "Pizza Dilimi"] },
  { id: "soguk", nav: "Soğuk", icon: "soguk", title: "Soğuk içecekler", groups: [
    { items: [["Cool Lime", 290], ["Berry Hibiskus", 280],
      ["Iced Pumpkin Spice Latte", 260, "Pumpkin spice ve karamel ile espresso; üzeri sweet cream köpük"],
      ["Iced White Chocolate Mocha", 255, "Beyaz çikolata sosu, espresso ve süt; sweet cream köpük ve beyaz çikolata rendesi ile"],
      ["Iced Pumpkin Spice Chai", 250, "Pumpkin spice şurubu ile chai tea latte"]] },
  ]},
  { id: "detox", nav: "Detox & Matcha", icon: "detox", groups: [
    { title: "Meyve detox", items: [["No1", 290, "Elma, limon, zencefil"], ["No2", 290, "Havuç, pancar, portakal"], ["No3", 290, "Salatalık, limon, taze nane"]] },
    { title: "Matcha detox", items: [["No1", 330, "Matcha, salatalık, taze nane, tonik"], ["No2", 330, "Matcha, limon suyu, taze nane, tonik"], ["No3", 330, "Matcha, elma suyu, maden suyu"], ["No4", 330, "Matcha, portakal suyu, maden suyu"]] },
  ]},
  { id: "yemek", nav: "Yemek", icon: "yemek", groups: [
    { title: "Çorba", items: [["Günün Çorbası", 280]] },
    { title: "Makarnalar", items: [
      ["Anne Makarnası", 460, "100 g özel kıyma harcımız ve kekikli yoğurt ile"],
      ["Chicken Alfredo", 490, "100 g jülyen tavuk, krema ve sarımsak; parmesan ve fesleğen ile"],
      ["Pesto Alfredo", 480, "Krema ve taze pesto sos ile"]] },
    { title: "Ana yemek", items: [["Izgara Tavuk Kase", 470, "180 g ızgara tavuk; basmati pirinç pilavı ve mevsim salatası ile"], ["Köfte Kase", 480, "160 g el yapımı köfte; basmati pirinç pilavı ve mevsim salatası ile"], ["Marinara Tavuk Kase", 490], ["Ekmek Arası Köfte", 440, "120 g köfte; domates, marul ve domatesli ezme sosu ile"]] },
    { title: "Kahvaltılık", items: [["Granola Kase", 350, "Chia tohumlu ballı süzme yoğurt; muz, granola, ay çekirdeği, parçalı fıstık ezmesi ve kuru üzüm ile"]] },
    { title: "Tostlar", items: [["Akdeniz Tost", 270, "Ezine peyniri, domates ve kekik; zeytin ezmesi ve domates ezmesi ile"], ["Karışık Tost", 285], ["Kaşarlı Tost", 265]] },
    { title: "Bagetler", items: [["Hindi Füme Baget", 375], ["Peynir Baget", 385], ["Dana Jambon Baget", 410]] },
  ]},
];
