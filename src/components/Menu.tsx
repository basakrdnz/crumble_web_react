import React from 'react';
import { Star } from 'lucide-react';

const Menu = () => {
  const menuCategories = [
    {
      title: "Özel Bowllar",
      description: "Taze malzemelerle dolu besleyici ve doyurucu bowllar",
      items: [
        {
          name: "Izgara Tavuk Power Bowl",
          description: "Kinoa, kavrulmuş sebzeler ve özel tahin sosumuzla yumuşak ızgara tavuk",
          price: "₺89",
          image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          popular: true
        },
        {
          name: "Akdeniz Tavuk Bowl",
          description: "Otlu marine tavuk, taze yeşillikler, beyaz peynir, zeytin ve limon otlu vinaigrette",
          price: "₺95",
          image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
          name: "Baharatlı Tavuk Bowl",
          description: "Cajun baharatlı tavuk, esmer pirinç, siyah fasulye, mısır ve avokado lime sosu",
          price: "₺89",
          image: "https://images.pexels.com/photos/1504/pexels-photo-1504.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "Doyurucu Köfte Bowlları",
      description: "El yapımı köftelerimizle yeniden yorumlanan rahatlık yemekleri",
      items: [
        {
          name: "Klasik İtalyan Köfte Bowl",
          description: "Ev yapımı dana köftesi, marinara sos, taze fesleğen ve parmesan ile makarna üzerinde",
          price: "₺99",
          image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          popular: true
        },
        {
          name: "İsveç Köfte Bowl",
          description: "Geleneksel İsveç köftesi, kremalı sos, lingonberry ve yumurta eriştesi",
          price: "₺95",
          image: "https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
          name: "Türk Köfte Bowl",
          description: "Baharatlı kuzu ve dana köftesi, pilav, yoğurt sosu ve taze otlar",
          price: "₺105",
          image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "Taze Makarnalar",
      description: "Sevgi ve premium malzemelerle yapılan geleneksel makarna yemekleri",
      items: [
        {
          name: "Trüf Mantarlı Linguine",
          description: "Taze linguine, yabani mantarlar, trüf yağı, parmesan ve taze otlar",
          price: "₺115",
          image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
          name: "Pesto Tavuklu Penne",
          description: "Ev yapımı fesleğen pesto, ızgara tavuk, güneşte kurutulmuş domates ve çam fıstığı",
          price: "₺99",
          image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          popular: true
        },
        {
          name: "Deniz Ürünlü Linguine",
          description: "Taze linguine, karışık deniz ürünleri, beyaz şarap sosu ve taze maydanoz",
          price: "₺125",
          image: "https://images.pexels.com/photos/8753999/pexels-photo-8753999.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "El Yapımı Tatlılar",
      description: "Mutfağımızda her gün taze olarak hazırlanan sanatsal tatlılar",
      items: [
        {
          name: "Çikolata Lav Kek",
          description: "Sıcak çikolata kek, eriyen merkez, vanilyalı dondurma ve berry komposto",
          price: "₺55",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
          popular: true
        },
        {
          name: "Tiramisu",
          description: "Klasik İtalyan tatlısı, mascarpone, kahve emdirilmiş kedi dili ve kakao",
          price: "₺49",
          image: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
          name: "Mevsim Meyve Tart",
          description: "Tereyağlı hamur, vanilyalı krema ve taze mevsim meyveleri",
          price: "₺45",
          image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
            Menümüz
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            En kaliteli malzemelerden yapılan sağlıklı, lezzetli yemeklerimizin özenle seçilmiş koleksiyonunu keşfedin
          </p>
        </div>

        {menuCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-amber-900 mb-2">{category.title}</h3>
              <p className="text-amber-700 text-lg">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-amber-100">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    {item.popular && (
                      <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        Popüler
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-amber-900">{item.name}</h4>
                      <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                    </div>
                    <p className="text-amber-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;