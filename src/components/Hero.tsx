import { useEffect, useState } from "react";
import OptimizedImage from "./OptimizedImage";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-between">
        {/* Top Left Text */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
          } self-center md:self-start text-center md:text-left max-w-xl`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#f7f1e3] leading-tight mt-8">
            Kahve ve kruvasanın buluşma noktası
          </h1>
        </div>

        {/* Bottom Right Text */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          } self-center md:self-end text-center md:text-right max-w-lg`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="text-base sm:text-lg md:text-xl text-[#c7a879] leading-relaxed">
            Günlük pişen kruvasanlar, taze kavrulmuş kahveler ve sakin bir atmosfer.
            Crumble'da kısa bir mola verin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
