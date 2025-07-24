import React from 'react';
import { Clock, Users, Coffee } from 'lucide-react';

const Story = () => {
  const milestones = [
    {
      year: "2022",
      title: "Başlangıç",
      description: "Topluluğumuza sağlıklı, lezzetli yemek getirme hayaliyle küçük bir aile rüyası olarak başladı"
    },
    {
      year: "2023",
      title: "Köklerin Büyümesi",
      description: "Menümüzü genişlettik ve özel el yapımı tatlı tariflerimizi geliştirdik"
    },
    {
      year: "2024",
      title: "Mahalle Favorisi",
      description: "Taze, sağlıklı rahatlık yemekleri için mahallenin vazgeçilmez mekanı olduk"
    },
    {
      year: "2025",
      title: "Bugün",
      description: "Topluluğumuza tutku, kalite ve sevgiyle hizmet vermeye devam ediyoruz"
    }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-b from-crumble-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-crumble-900 mb-6">
            Hikayemiz
          </h2>
          <p className="text-xl text-crumble-700 max-w-3xl mx-auto leading-relaxed">
            Harika yemek ve topluluk tutkusundan doğan Crumble, ilk günden beri 
            sağlıklı, el yapımı yemekler sunuyor.
          </p>
        </div>

        <div className="grid gap-12 items-center mb-16">
          {/* <div>            ***  grid-cols-1 lg:grid-cols-2 ***
            <img
              src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Kafe mutfağında yemek yapan şefler"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div> */}
          <div>
            <h3 className="text-3xl font-bold text-crumble-900 mb-6">
              Her Şeyin Başladığı Yer
            </h3>
            <p className="text-crumble-700 mb-4 leading-relaxed">
              Crumble 2022'de basit bir vizyonla başladı: sağlıklı beslenmenin inanılmaz lezzetle buluştuğu 
              bir yer yaratmak. Hem mutfak sanatları hem de beslenme konusunda tutkulu kurucularımız, 
              sağlık için lezzetten ödün vermek zorunda olmadığınızı kanıtlamak istiyordu.
            </p>
            <p className="text-crumble-700 mb-6 leading-relaxed">
              Küçük bir kafe olarak başlayan yolculuğumuz, taze, yerel kaynaklı malzemelere olan 
              bağlılığımız ve kaliteden asla taviz vermeme sözümüzle bilinen sevilen bir topluluk 
              buluşma noktasına dönüştü.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Clock className="h-8 w-8 text-crumble-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-crumble-900">3+</div>
                <div className="text-crumble-700 text-sm">Yıl Hizmet</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-crumble-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-crumble-900">1K+</div>
                <div className="text-crumble-700 text-sm">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <Coffee className="h-8 w-8 text-crumble-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-crumble-900">%100</div>
                <div className="text-crumble-700 text-sm">El Yapımı</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-3xl font-bold text-crumble-900 mb-8 text-center">Yolculuğumuz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-crumble-100 rounded-full mb-4">
                  <span className="text-2xl font-bold text-crumble-800">{milestone.year}</span>
                </div>
                <h4 className="text-xl font-semibold text-crumble-900 mb-2">{milestone.title}</h4>
                <p className="text-crumble-700 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;