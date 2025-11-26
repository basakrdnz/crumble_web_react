import OptimizedImage from './OptimizedImage';

const Story = () => {
  return (
    <section id="story" className="pt-20 pb-20 bg-gradient-to-b from-crumble-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-crumble-900 mb-4">
            Hikayemiz
          </h2>
          <p className="text-xl text-crumble-700 max-w-2xl mx-auto">
            2022'de tutkuyla başladık. El yapımı tatlılar, özel sandviçler ve taze içeceklerle sevilen bir buluşma noktası olduk.
          </p>
        </div>

        {/* Görsel Galeri - Dengeli Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {/* Büyük görsel - sol üst */}
          <div className="md:col-span-2 md:row-span-2">
            <OptimizedImage
              src="/images/kruvasan.jpeg"
              alt="Crumble Kruvasan"
              className="w-full h-full min-h-[400px] md:min-h-[500px] object-cover rounded-xl shadow-lg"
              placeholder="Kruvasan yükleniyor..."
            />
          </div>
          {/* Küçük görsel 1 - sağ üst */}
          <div className="md:col-span-1">
            <OptimizedImage
              src="/images/C0837T01.JPG"
              alt="Crumble Cafe"
              className="w-full h-full min-h-[240px] md:min-h-[240px] object-cover rounded-xl shadow-lg"
              placeholder="Cafe yükleniyor..."
            />
          </div>
          {/* Küçük görsel 2 - sağ alt */}
          <div className="md:col-span-1">
            <OptimizedImage
              src="/images/DSC00211.JPG"
              alt="Crumble Cafe"
              className="w-full h-full min-h-[240px] md:min-h-[240px] object-cover rounded-xl shadow-lg"
              placeholder="Cafe yükleniyor..."
            />
          </div>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-crumble-600 mb-2">3+</div>
            <div className="text-crumble-700">Yıl Hizmet</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-crumble-600 mb-2">1K+</div>
            <div className="text-crumble-700">Mutlu Müşteri</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-crumble-600 mb-2">%100</div>
            <div className="text-crumble-700">El Yapımı</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;