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
    title: "Kaselerimiz",
    description:
      "Renkli ve besleyici bowl seçeneklerimizle hafif ama doyurucu lezzetler",
    items: [
      {
        name: "Izgara Tavuk Kase",
        description:
          "180 gram ızgara tavuk ile hazırlanan doyurucu ve sağlıklı bir seçenek.",
        price: "₺120",
        image:
          "https://images.pexels.com/photos/6546023/pexels-photo-6546023.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        popular: true,
      },
      {
        name: "Izgara Köfte Kase",
        description:
          "Izgara köfte, taze sebzeler, pilav ve patates salatası ile hazırlanan doyurucu bir kase.",
        price: "₺62",
        image:
          "https://images.pexels.com/photos/3679152/pexels-photo-3679152.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        popular: true,
      },
      {
        name: "Tavuk Şnitzel Kase",
        description:
          "180 gram çıtır tavuk şnitzel, taze taze salata, pilav ve patates salatası ile.",
        price: "₺89",
        image:
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "Barbekü Tavuk Kase",
        description:
          "180g barbekü soslu tavuk ile hazırlanır. Hafif isli aromasıyla yoğun tat arayanlara uygundur.",
        price: "₺72",
        image:
          "https://images.pexels.com/photos/1600713/pexels-photo-1600713.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "Köri Tavuk Kase",
        description:
          "180g köri soslu tavuk ile hazırlanır. Baharatlı ve aromatik bir lezzet sunar.",
        price: "₺62",
        image:
          "https://images.pexels.com/photos/3679152/pexels-photo-3679152.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "Marinara Tavuk Kase",
        description:
          "180g marinara soslu tavuk ile hazırlanır. Domates bazlı sos ile zenginleştirilmiş bir seçenek.",
        price: "₺72",
        image:
          "https://images.pexels.com/photos/1600713/pexels-photo-1600713.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "Kremalı Tavuk Kase",
        description:
          "Kremalı sos ile hazırlanan 180g tavuk, taze sebzeler, patates salatası ve pirinç pilavı ile servis edilir.",
        price: "₺62",
        image:
          "https://images.pexels.com/photos/3679152/pexels-photo-3679152.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "Pesto Tavuk Kase",
        description:
          "180g pesto soslu tavuk ile hazırlanır. Doyurucu bir seçenek olup, taze fesleğen aroması sunar.",
        price: "₺72",
        image:
          "https://images.pexels.com/photos/3679152/pexels-photo-3679152.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "4 Peynirli Tavuk Kase",
        description:
          "180g tavuk, cheddar, parmesan, ezine peyniri ve beyaz peynir ile hazırlanır. Zengin peynir aroması sunar.",
        price: "₺62",
        image:
          "https://images.pexels.com/photos/3679152/pexels-photo-3679152.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "Demi Glace Antrikot",
        description:
          "150 gr dana antrikot dilimleri, demi glace sos, pirinç pilavı, karışık ızgara sebze, hardal soslu patates, mevsim salatası",
        price: "₺98",
        image:
          "https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "Café de Paris Antrikot",
        description:
          "150 gr dana antrikot dilimleri, Café de Paris sos, pirinç pilavı, karışık ızgara sebze, hardal soslu patates, mevsim salatası",
        price: "₺102",
        image:
          "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "Demi Glace Şnitzel",
        description:
          "Panko ile panelenmiş 180 gr tavuk dilimleri, demi glace sos, pirinç pilavı, karışık ızgara sebze, hardal soslu patates, mevsim salatası",
        price: "₺89",
        image:
          "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "Café de Paris Şnitzel",
        description:
          "Panko ile panelenmiş 180 gr tavuk dilimleri, Café de Paris sos, pilav, karışık ızgara sebze, hardal soslu patates, mevsim salatası",
        price: "₺92",
        image:
          "https://images.pexels.com/photos/4109118/pexels-photo-4109118.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "Mac & N Schnitzel",
        description:
          "Panko ile panelenmiş 150 gr tavuk dilimleri, mac & cheese soslu bukle makarna, kajun baharatı, çıtır soğan, jalapeno turşusu, rendelenmiş beyaz & kırmızı lahana, crumble sos",
        price: "₺88",
        image:
          "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
      {
        name: "Mac & N Sausage",
        description:
          "Tütsülenmiş piliç sosis dilimleri, mac & cheese soslu bukle makarna, kajun baharatı, çıtır soğan, jalapeno turşusu, rendelenmiş beyaz & kırmızı lahana, crumble sos",
        price: "₺86",
        image:
          "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
    ],
  },
{
  "title": "Tostlar ve Sandviçler",
  "description": "Klasiklerin lezzetini biraz ruh katıp, seni sıcacık anılara götüren tost ve sandviçler",
  "items": [
    {
      "name": "Kaşarlı Tost",
      "description": "3 dilim eriyen kaşar peynirinin labneyle buluştuğu, biber salçası ve taze domates-salatalık dilimleriyle sabah kahvaltılarının vazgeçilmezi.",
      "price": "₺45",
      "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      "popular": true
    },
    {
      "name": "Akdeniz Tost",
      "description": "Ezine peynirinin zeytin ezmesi ve labneyle dans ettiği, domates ve salatalık dilimlerinin serinliğiyle yaz akşamlarını hatırlatan hafif bir lezzet.",
      "price": "₺50",
      "image": "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      "name": "Karışık Tost",
      "description": "Dana sucuğun baharatlı dokunuşu, kaşarın eriyişiyle birleşip biber salçası, domates ve salatalıkla karnını şenlendiren klasik bir efsane.",
      "price": "₺55",
      "image": "https://images.pexels.com/photos/1251171/pexels-photo-1251171.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      "name": "Ton Balıklı Sandviç",
      "description": "75 gram taze ton balığının mayonez ve kornişon turşusuyla birleşip yeşilliklerle taptaze bir lezzet yolculuğu.",
      "price": "₺60",
      "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      "name": "Hot Dog",
      "description": "Tütsülenmiş piliç sosisin kahvaltılık sos ve kornişon turşusuyla buluştuğu, hızlı ve doyurucu sokak lezzeti.",
      "price": "₺40",
      "image": "https://images.pexels.com/photos/1639569/pexels-photo-1639569.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ]
},
  {
  "title": "Makarnalar",
  "description": "İtalyan mutfağının en özel dokunuşlarıyla hazırlanan, her lokmada mutluluğu garantileyen makarna seçenekleri",
  "items": [
    {
      "name": "Fettuccine Alfredo",
      "description": "Taze fetuccine makarnasının kremayla sarıldığı, tavuk ve mantarın sarımsakla dans ettiği, parmesanla taçlandırılmış klasik ve vazgeçilmez bir lezzet.",
      "price": "₺85",
      "image": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      "popular": true
    },
    {
      "name": "Spaghetti Bolognese",
      "description": "Klasik spaghetti makarnasının, kıyma, sarımsak, soğan ve domatesin buluştuğu, salçanın kattığı derinlikle zenginleşen, her tabakta ev sıcaklığı hissi veren İtalyan klasiği.",
      "price": "₺80",
      "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      "name": "Penne Pesto",
      "description": "Penne makarnanın kremayla buluştuğu, pesto sosun taptaze fesleğen aromasıyla birleşip hafif ve zengin bir lezzet yolculuğu sunduğu yemek.",
      "price": "₺78",
      "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ]
}
];
