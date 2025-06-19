export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
}

export interface MenuCategory {
  title: string;
  description: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    title: "Ekmek Araları",
    description: "Taze ekmekle hazırlanan doyurucu ve lezzetli sandviçler",
    items: [
      {
        name: "Füme Hindi Sandviç",
        description: "Taze ciabatta ekmeği içinde füme hindi, cheddar peyniri, roka ve hardal sos",
        price: "₺75",
        image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        popular: true
      },
      {
        name: "Izgara Sebzeli Panini",
        description: "Közlenmiş patlıcan, kabak, keçi peyniri ve pesto ile sıcak panini",
        price: "₺69",
        image: "https://images.pexels.com/photos/4109118/pexels-photo-4109118.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      },
    {
        name: "Tavuklu Baget",
        description: "Fransız baget içinde ızgara tavuk, göbek marul, domates ve ranch sos",
        price: "₺72",
        image: "https://images.pexels.com/photos/1600713/pexels-photo-1600713.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      },
      {
        name: "Mozzarella & Domates Bruschetta",
        description: "Tost ekmeğinde mozzarella, cherry domates, fesleğen ve zeytinyağı",
        price: "₺62",
        image: "https://images.pexels.com/photos/3679152/pexels-photo-3679152.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      }
    ]
  },
  {
    title: "Bowllar",
    description: "Renkli ve besleyici bowl seçeneklerimizle hafif ama doyurucu lezzetler",
    items: [
      {
        name: "Somon Bowl",
        description: "Izgara somon, avokado, pirinç, edamame ve teriyaki sos",
        price: "₺120",
        image: "https://images.pexels.com/photos/6546023/pexels-photo-6546023.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        popular: true
      },
      {
        name: "Vegan Bowl",
        description: "Kinoa, nohut, pancar, havuç, yeşillikler ve limonlu tahin sos",
        price: "₺89",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      },
            {
        name: "Tavuklu Baget",
        description: "Fransız baget içinde ızgara tavuk, göbek marul, domates ve ranch sos",
        price: "₺72",
        image: "https://images.pexels.com/photos/1600713/pexels-photo-1600713.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      },
      {
        name: "Mozzarella & Domates Bruschetta",
        description: "Tost ekmeğinde mozzarella, cherry domates, fesleğen ve zeytinyağı",
        price: "₺62",
        image: "https://images.pexels.com/photos/3679152/pexels-photo-3679152.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      }
    ]
  },
  {
    title: "Makarnalar",
    description: "Ev yapımı makarnalarla İtalyan mutfağının sıcaklığını hissedin",
    items: [
      {
        name: "Kremalı Mantarlı Tagliatelle",
        description: "Taze tagliatelle, kremalı mantar sos ve parmesan peyniri",
        price: "₺105",
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      },
      {
        name: "Pesto Penne",
        description: "Ev yapımı fesleğenli pesto, çam fıstığı ve cherry domates",
        price: "₺95",
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      },
            {
        name: "Tavuklu Baget",
        description: "Fransız baget içinde ızgara tavuk, göbek marul, domates ve ranch sos",
        price: "₺72",
        image: "https://images.pexels.com/photos/1600713/pexels-photo-1600713.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      },
      {
        name: "Mozzarella & Domates Bruschetta",
        description: "Tost ekmeğinde mozzarella, cherry domates, fesleğen ve zeytinyağı",
        price: "₺62",
        image: "https://images.pexels.com/photos/3679152/pexels-photo-3679152.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      }
    ]
  },
  {
    title: "Tatlılar",
    description: "Her lokmada mutluluk veren el yapımı tatlılarımızı deneyin",
    items: [
      {
        name: "Çilekli Cheesecake",
        description: "Kıtır taban üzerinde çilekli sos ve krem peynir dolgulu cheesecake",
        price: "₺58",
        image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        popular: true
      },
      {
        name: "Fıstıklı Brownie",
        description: "Çıtır kenarlı, yumuşak dokulu bitter çikolatalı brownie, Antep fıstığı ile",
        price: "₺52",
        image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      },
            {
        name: "Tavuklu Baget",
        description: "Fransız baget içinde ızgara tavuk, göbek marul, domates ve ranch sos",
        price: "₺72",
        image: "https://images.pexels.com/photos/1600713/pexels-photo-1600713.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      },
      {
        name: "Mozzarella & Domates Bruschetta",
        description: "Tost ekmeğinde mozzarella, cherry domates, fesleğen ve zeytinyağı",
        price: "₺62",
        image: "https://images.pexels.com/photos/3679152/pexels-photo-3679152.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      }
    ]
  }
];
