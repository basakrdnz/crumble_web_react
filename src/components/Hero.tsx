import { ArrowDown } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-green-100 overflow-hidden"
    >


      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-6 lg:space-y-8 text-center pt-16 sm:pt-20 lg:pt-0 order-1 lg:order-1">

              {/* Main Title */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 leading-none">
                  <span className="block text-crumble-600">Crumble</span>
                  <span className="block text-gray-700">Cafe</span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="relative">
                <p className="text-xl sm:text-2xl text-crumble-700 font-medium">
                  Sağlık ve Lezzet Buluşuyor
                </p>
                <div className="w-24 h-1 bg-crumble-500 mt-4 mx-auto rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Crumble Kafe'de sevgiyle hazırlanmış sağlıklı bowllar, taze makarnalar ve en kaliteli malzemelerle yapılan el yapımı tatlıları deneyimleyin. Ankara'nın en iyi Crumble Cafe deneyimi için bizi ziyaret edin.
              </p>



              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 lg:pt-8 justify-center">
                <button
                  onClick={scrollToAbout}
                  className="group px-6 py-3 bg-crumble-600 text-white font-semibold text-base rounded-lg transition-all duration-300 hover:bg-crumble-700 hover:shadow-lg shadow-md"
                >
                  <span className="flex items-center justify-center">
                    Hikayemizi Keşfedin
                    <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </button>
                
                <button
                  onClick={() =>
                    document
                      .getElementById("menu")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-6 py-3 bg-white text-crumble-700 font-semibold text-base rounded-lg border-2 border-crumble-600 transition-all duration-300 hover:bg-crumble-50 hover:shadow-lg shadow-md"
                >
                  <span className="flex items-center justify-center">
                    Menüyü İnceleyin
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Compact Image Grid */}
            <div className="relative pt-8 lg:pt-0 order-2 lg:order-2">
              <div className="grid grid-cols-2 gap-3">
                {/* Image 1 */}
                <div className="group col-span-1 relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-48 sm:h-56 lg:h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                  <OptimizedImage
                    src="/images/C0837T01.JPG"
                    alt="Crumble Cafe İç Mekan"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholder="Cafe yükleniyor..."
                    loading="eager"
                    fetchpriority="high"
                    width={400}
                    height={300}
                    isHero={true}
                  />
                </div>

                {/* Image 2 */}
                <div className="group col-span-1 relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-48 sm:h-56 lg:h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                  <OptimizedImage
                    src="/images/DSC00211.JPG"
                    alt="Lezzetli Yemekler"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholder="Yemekler yükleniyor..."
                  />
                </div>

                {/* Image 3 */}
                <div className="group col-span-1 relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-48 sm:h-56 lg:h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                  <OptimizedImage
                    src="/images/DSC00263.JPG"
                    alt="Sıcak Atmosfer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholder="Atmosfer yükleniyor..."
                  />
                </div>

                {/* Image 4 */}
                <div className="group col-span-1 relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-48 sm:h-56 lg:h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                  <OptimizedImage
                    src="/images/Tezza-2322.jpg"
                    alt="Taze Kahve"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    placeholder="Kahve yükleniyor..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
