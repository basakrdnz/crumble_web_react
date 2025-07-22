import React from 'react';
import { Star } from 'lucide-react';

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
  className="bg-white rounded-lg shadow-lg overflow-hidden border border-amber-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-amber-50/95"
    >
      <div className="relative">
        {/* <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        /> */}
        {item.popular && (
          <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="h-4 w-4 mr-1 fill-current" />
            Popüler
          </div>
        )}
      </div>
      <div className="p-6 m-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-semibold text-amber-900">{item.name}</h4>
            {/* <span className="text-2xl font-bold text-amber-600">{item.price}</span> */}
        </div>
        <p className="text-amber-700 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
