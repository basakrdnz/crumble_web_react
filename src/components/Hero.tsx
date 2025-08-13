import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Sağlık ve Lezzet Buluşuyor",
      subtitle: "Crumble Cafe",
      description: "Sevgiyle hazırlanmış bowllar, taze makarnalar ve en kaliteli malzemelerle yapılan el yapımı tatlıları deneyimleyin.",
      image: "/images/bg10.jpg"
    },
    {
      title: "Taze ve Organik",
      subtitle: "Crumble Cafe", 
      description: "Günlük taze malzemelerle hazırlanan özel tariflerimizle damaklarınızda unutulmaz tatlar bırakıyoruz.",
      image: "/images/bg2.png"
    },
    {
      title: "Huzurlu Atmosfer",
      subtitle: "Crumble Cafe",
      description: "Sıcak ve samimi ortamımızda sevdiklerinizle birlikte keyifli anlar yaşayın.",
      image: "/images/bg11.JPG"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-amber-100 to-green-50"
    >
      {/* Flowing Water Effect Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-transparent to-green-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-green-300/5 to-transparent transform -skew-y-12 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-green-400/8 to-transparent transform skew-y-12 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main Hero Frame */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="relative bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden border border-green-200/30 shadow-2xl min-h-[80vh]">
          {/* Background Image with Water Effect */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <img
              src={slides[currentSlide].image}
              alt="Hero background"
              className="w-full h-full object-cover transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-8 sm:px-12 lg:px-16 py-20 sm:py-24 lg:py-32 flex items-center justify-center min-h-[80vh]">
            <div className="max-w-5xl mx-auto">
              <p className="text-crumble-600 text-sm sm:text-base font-bold tracking-widest mb-4" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>
                {slides[currentSlide].title}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 font-thin" style={{textShadow: '4px 4px 8px rgba(0,0,0,0.95)'}}>
                <span className="block text-crumble-600 mb-2" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-white text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button
                  onClick={scrollToAbout}
                  className="relative px-12 py-4 bg-crumble-600 text-white font-medium text-lg rounded-lg transition-all duration-300 hover:bg-crumble-700 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 shadow-md"
                >
                  <span className="relative z-10">Hikayemizi Keşfedin</span>
                  <div className="absolute inset-0 bg-crumble-500 rounded-lg transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("menu")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="relative px-12 py-4 bg-white/70 backdrop-blur-sm text-crumble-700 font-medium text-lg rounded-lg border-2 border-crumble-700 transition-all duration-300 hover:bg-crumble-600 hover:text-white hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 shadow-md"
                >
                  Menüyü İnceleyin
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-crumble-600 transition-all duration-300 hover:scale-110 border border-crumble-600 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-crumble-600 transition-all duration-300 hover:scale-110 border border-crumble-600 shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Bottom Thumbnails */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
                currentSlide === index 
                  ? 'border-crumble-600 scale-110 shadow-lg' 
                  : 'border-crumble-600/50 hover:border-crumble-600'
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30">
        <button
          onClick={scrollToAbout}
          className="text-crumble-600 hover:text-crumble-700 transition-colors animate-bounce bg-white/30 backdrop-blur-sm rounded-full p-2 shadow-lg"
          aria-label="Hakkımızda bölümüne git"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
