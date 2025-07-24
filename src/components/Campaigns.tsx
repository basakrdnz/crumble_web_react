import { Gift, Clock, Users, Instagram, Heart, Star } from 'lucide-react';

const Campaigns = () => {
  const campaigns = [
    {
      title: "Hafta Sonu Özel",
      description: "Cumartesi ve Pazar günleri tüm bowllarda %15 indirim!",
      discount: "%15",
      validUntil: "31 Aralık 2024",
      icon: Gift,
      color: "bg-gradient-to-r from-crumble-500 to-crumble-600"
    },
    {
      title: "Öğrenci İndirimi",
      description: "Öğrenci kartınızı gösterin, tüm menüden %10 indirim kazanın!",
      discount: "%10",
      validUntil: "Sürekli",
      icon: Star,
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      title: "Grup Menüsü",
      description: "4 kişilik grup menüsünde özel fiyat! Bowllar + tatlılar dahil.",
      discount: "₺299",
      originalPrice: "₺360",
      validUntil: "15 Ocak 2025",
      icon: Users,
      color: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      title: "Mutlu Saatler",
      description: "14:00-17:00 arası tüm tatlılarda %20 indirim!",
      discount: "%20",
      validUntil: "Her gün",
      icon: Clock,
      color: "bg-gradient-to-r from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="campaigns" className="py-20 bg-gradient-to-b from-white to-crumble-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-crumble-900 mb-6">
            Güncel Kampanyalar
          </h2>
          <p className="text-xl text-crumble-700 max-w-3xl mx-auto leading-relaxed">
            Crumble'da her zaman size özel fırsatlar var! Güncel kampanyalarımızı kaçırmayın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {campaigns.map((campaign, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`${campaign.color} p-6 text-white text-center`}>
                <campaign.icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{campaign.discount}</div>
                {campaign.originalPrice && (
                  <div className="text-sm opacity-80 line-through">{campaign.originalPrice}</div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-crumble-900 mb-3">{campaign.title}</h3>
                <p className="text-crumble-700 mb-4 leading-relaxed">{campaign.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-crumble-600 font-medium">
                    Geçerlilik: {campaign.validUntil}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Instagram className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Bizi Instagram'da Takip Edin!
            </h3>
            <p className="text-xl mb-6 opacity-90">
              En yeni kampanyalarımız, özel menülerimiz ve lezzetli anlarımız için Instagram hesabımızı takip etmeyi unutmayın!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://instagram.com/crumblecafe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
              >
                <Instagram className="h-6 w-6 mr-2" />
                @crumblecafe
              </a>
              <div className="flex items-center space-x-2 text-white/80">
                <Heart className="h-5 w-5 fill-current" />
                <span>5.2K takipçi</span>
              </div>
            </div>
            <div className="mt-6 text-sm opacity-75">
              #CrumbleCafe #SağlıklıLezzetler #ElYapımıTatlılar #İstanbulKafe
            </div>
          </div>
        </div>

        {/* Special Announcement */}
        <div className="mt-12 bg-crumble-100 border-l-4 border-crumble-500 p-6 rounded-lg">
          <div className="flex items-start">
            <Gift className="h-6 w-6 text-crumble-600 mt-1 mr-3" />
            <div>
              <h4 className="text-lg font-semibold text-crumble-900 mb-2">
                Özel Duyuru!
              </h4>
              <p className="text-crumble-800">
                Yeni yıl özel menümüz yakında! Instagram'dan duyurularımızı takip edin ve 
                ilk deneyenler arasında olun. Özel açılış indirimi için bizi takipte kalın! 🎉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;