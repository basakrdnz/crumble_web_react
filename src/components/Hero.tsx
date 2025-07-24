import { ArrowDown } from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/crumble_bg.jpg"
          alt="Hero bg"
          loading="lazy"
          className="md:w-full h-[100vh] md:h-full object-cover object-center"
          style={{}}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 md:max-w-4xl max-w-xl mx-auto
        before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-black/50 before:blur-2xl before:-z-10 before:w-full before:h-full"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight font-[300] !important">
          <span className="block text-crumble-200 mt-2">Crumble'a</span>
          Hoş Geldiniz
        </h1>
        <p className="text-md sm:text-xl text-crumble-100 mb-16 mx-auto leading-relaxed font-normal">
          Sağlık ve lezzet buluşuyor. Sevgiyle hazırlanmış bowllar, taze
          makarnalar ve en kaliteli malzemelerle yapılan el yapımı tatlıları
          deneyimleyin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
        onClick={scrollToAbout}
        className="bg-crumble-600 hover:bg-crumble-700 text-white md:px-8 md:py-4 p-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
        Hikayemizi Keşfedin
          </button>
          <button
        onClick={() =>
          document
            .getElementById("menu")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="border-2 border-white text-white hover:bg-white hover:text-crumble-800 md:px-8 md:py-4 p-3 px-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
        Menüyü İnceleyin
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToAbout}
          className="text-white hover:text-crumble-200 transition-colors animate-bounce"
          aria-label="Hakkımızda bölümüne git"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
