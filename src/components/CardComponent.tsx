import React from 'react';
import { Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
}

interface CardProps {
  item: MenuItem;
}

const CardComponent: React.FC<CardProps> = ({ item }) => {
  return (
    <div 
  className="bg-white rounded-lg shadow-lg overflow-hidden border border-crumble-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-crumble-100/30"
    >
      <div className="relative">
        <OptimizedImage
          src={item.image}
          alt={item.name}
          className="w-full h-32 md:h-48"
          placeholder={`${item.name} yükleniyor...`}
        />
        {item.popular && (
          <div className="absolute top-4 left-4 bg-crumble-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="h-4 w-4 mr-1 fill-current" />
            Popüler
          </div>
        )}
      </div>
      <div className="p-3 md:p-6 m-3 md:m-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-sm md:text-xl font-semibold text-crumble-900">{item.name}</h4>
            {/* <span className="text-2xl font-bold text-crumble-600">{item.price}</span> */}
        </div>
        <p className="text-xs md:text-base text-crumble-700 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
