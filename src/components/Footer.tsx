import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-300" />
              <span className="text-2xl font-bold">Crumble</span>
            </div>
            <p className="text-amber-100 mb-4 leading-relaxed">
              Sağlıklı ile lezzetli buluşuyor. Vücudunuzu besleyen ve damak tadınızı 
              memnun eden taze, el yapımı yemekler sunmaya kararlıyız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/crumblecafe" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Menü
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('campaigns')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Kampanyalar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Hikayemiz
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-100 hover:text-white transition-colors"
                >
                  Konum
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-2 text-amber-100">
              <p>Bağdat Caddesi No: 123</p>
              <p>Kadıköy/İstanbul</p>
              <p>34710</p>
              <p className="mt-3">(0216) 123-4567</p>
              <p>merhaba@crumblecafe.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-100 flex items-center justify-center">
            <Heart className="h-4 w-4 mx-2 text-amber-300 fill-current" /> ile Crumble Ekibi tarafından yapıldı
          </p>
          <p className="text-amber-200 text-sm mt-2">
            © 2024 Crumble Kafe. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;