import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import OptimizedImage from "./OptimizedImage";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Küçük bir gecikme ile animasyonu tetikle
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className={`absolute inset-0 transition-transform duration-1000 ease-out ${
          isLoaded ? 'scale-100' : 'scale-150'
        }`}
      >
        <OptimizedImage
          src="/images/herobgcrumble.jpg"
          alt="Crumble Cafe"
          className="w-full h-full object-cover"
          placeholder="Cafe yükleniyor..."
          loading="eager"
          fetchpriority="high"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Main Title - Animasyonlu */}
            <div 
              className={`transition-all duration-1000 ease-out ${
                isLoaded 
                  ? 'scale-100 opacity-100' 
                  : 'scale-150 opacity-0'
              }`}
              style={{
                transitionDelay: isLoaded ? '300ms' : '0ms'
              }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-4">
                <span className="block">Crumble</span>
              </h1>
            </div>

            {/* Subtitle - Animasyonlu */}
            <div 
              className={`transition-all duration-1000 ease-out ${
                isLoaded 
                  ? 'scale-100 opacity-100' 
                  : 'scale-150 opacity-0'
              }`}
              style={{
                transitionDelay: isLoaded ? '500ms' : '0ms'
              }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto">
                Lezzetli tatlılar, özel sandviçler ve taze içeceklerle keyifli bir deneyim
              </p>
            </div>

            {/* Button - Animasyonlu */}
            <div 
              className={`transition-all duration-1000 ease-out ${
                isLoaded 
                  ? 'scale-100 opacity-100' 
                  : 'scale-150 opacity-0'
              }`}
              style={{
                transitionDelay: isLoaded ? '700ms' : '0ms'
              }}
            >
              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-crumble-600 font-semibold text-lg rounded-full transition-all duration-300 hover:bg-crumble-50 hover:shadow-xl shadow-lg"
              >
                <span>Menüyü İncele</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
