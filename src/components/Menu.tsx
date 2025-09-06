import React, { useState } from "react";
import { Star, X } from "lucide-react";
import CardComponent from "./CardComponent";
import { menuCategories } from "../data/menuData";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const openModal = (index: number) => setActiveCategory(index);
  const closeModal = () => setActiveCategory(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-crumble-900 mb-6">
            Menümüz
          </h2>
          <p className="text-xl text-crumble-700 max-w-3xl mx-auto leading-relaxed">
            Kategorilerimize göz atın ve en sevdiğiniz lezzetleri keşfedin!
          </p>
        </div>

        {menuCategories.map((category, index) => (
          <div key={index} className="mb-16">
            {/* 🧡 Kategori başlığı */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-crumble-900 mb-2">
                {category.title}
              </h3>
              <p className="text-crumble-700 text-lg">{category.description}</p>
            </div>

            {/* 🧁 Mobilde 2, büyük ekranlarda 3 ürün göster */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {category.items.slice(0, 2).map((item, i) => (
                <CardComponent item={item} key={i} />
              ))}
            </div>

            {/* 🍰 Daha Fazla Göster butonu */}
            {category.items.length > 2 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => openModal(index)}
                  className="bg-crumble-600 text-white px-4 py-2 rounded-full hover:bg-crumble-700 transition"
                >
                  Daha Fazla Göster
                </button>
              </div>
            )}

            {/* ✨ Modal */}
            {activeCategory === index && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
                onClick={handleBackdropClick}
              >
                <div className="bg-white rounded-lg p-6 max-w-5xl w-full relative max-h-[90vh] overflow-y-auto shadow-lg">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-crumble-700 hover:text-crumble-900 transition"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <h3 className="text-2xl font-bold mb-4 text-crumble-900 text-center">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, i) => (
                      <CardComponent item={item} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
