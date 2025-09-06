import { Gift, Instagram, Heart, Star, ArrowRight, Calendar, Tag } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const Campaigns = () => {
  const campaigns = [
    {
      title: "Hafta Sonu Özel",
      description: "Cumartesi ve Pazar günleri tüm bowllarda %15 indirim! Taze malzemelerle hazırlanan özel tariflerimizi kaçırmayın.",
      discount: "%15",
      validUntil: "31 Aralık 2024",
      icon: Gift,
      badge: "YENİ",
      color: "from-crumble-500 to-crumble-600",
      image: "/images/menu/karışık_tost.png"
    },
    {
      title: "Öğrenci İndirimi",
      description: "Öğrenci kartınızı gösterin, tüm menüden %10 indirim kazanın! Arkadaşlarınızla birlikte gelin, keyifli anlar yaşayın.",
      discount: "%10",
      validUntil: "Sürekli",
      icon: Star,
      badge: "POPÜLER",
      color: "from-amber-500 to-orange-500",
      image: "/images/menu/arabiat_makarna.png"
    }
  ];

  return (
    <section id="campaigns" className="py-24 bg-gradient-to-br from-amber-50 via-white to-crumble-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-crumble-100 text-crumble-700 rounded-full text-sm font-medium mb-6">
            <Tag className="h-4 w-4 mr-2" />
            Özel Fırsatlar
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-crumble-900 mb-6">
            Güncel Kampanyalar
          </h2>
          <p className="text-xl text-crumble-700 max-w-3xl mx-auto leading-relaxed">
            Crumble'da her zaman size özel fırsatlar var! Güncel kampanyalarımızı kaçırmayın.
          </p>
        </div>

        {/* Campaign Cards - 2 Wide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {campaigns.map((campaign, index) => (
            <div key={index} className="group relative">
              {/* Badge */}
              <div className="absolute -top-3 -right-3 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 shadow-lg">
                  {campaign.badge}
                </span>
              </div>
              
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
                {/* Image and Header */}
                <div className="relative">
                  <OptimizedImage 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-48"
                    placeholder={`${campaign.title} yükleniyor...`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${campaign.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <campaign.icon className="h-16 w-16 mx-auto mb-4 opacity-90" />
                      <div className="text-6xl font-bold mb-2">{campaign.discount}</div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-crumble-900 mb-4 group-hover:text-crumble-600 transition-colors">
                    {campaign.title}
                  </h3>
                  <p className="text-crumble-700 mb-6 leading-relaxed text-lg">
                    {campaign.description}
                  </p>
                  
                  {/* Validity */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center text-sm text-crumble-600">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="font-medium text-base">Geçerlilik: {campaign.validUntil}</span>
                    </div>
                    <button className="text-crumble-600 hover:text-crumble-700 transition-colors bg-crumble-100 hover:bg-crumble-200 p-3 rounded-full">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Banner - Thick and Full Width with Animated Circles */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-8 text-white text-center relative overflow-hidden mb-16 w-full">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-pulse" style={{animationDelay: '0s'}}></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-white/8 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mr-6">
                <Instagram className="h-8 w-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">
                  Bizi Instagram'da Takip Edin!
                </h3>
                <p className="text-base opacity-90">
                  En yeni kampanyalarımız ve özel menülerimiz
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-white/80">
                <Heart className="h-5 w-5 fill-current" />
                <span className="text-base font-medium">5.2K takipçi</span>
              </div>
              <a
                href="https://instagram.com/crumblecafe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
              >
                <Instagram className="h-5 w-5 mr-3" />
                @crumblecafe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;