import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };


  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-crumble-600"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/images/crumble_logo_green.png" 
                  alt="Crumble Logo" 
                  className="h-auto w-24"
                  loading="eager"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                className="text-crumble-600 hover:text-crumble-700 transition-colors duration-300 font-medium tracking-wide border-b-2 border-transparent hover:border-crumble-600 pb-1 text-sm"
                onClick={() => scrollToSection("home")}
              >
                ANA SAYFA
              </button>
              <button
                className="text-crumble-600 hover:text-crumble-700 transition-colors duration-300 font-medium tracking-wide border-b-2 border-transparent hover:border-crumble-600 pb-1 text-sm"
                onClick={() => scrollToSection("about")}
              >
                HAKKIMIZDA
              </button>
              <button
                className="text-crumble-600 hover:text-crumble-700 transition-colors duration-300 font-medium tracking-wide border-b-2 border-transparent hover:border-crumble-600 pb-1 text-sm"
                onClick={() => scrollToSection("menu")}
              >
                MENÜ
              </button>
              <button
                className="text-crumble-600 hover:text-crumble-700 transition-colors duration-300 font-medium tracking-wide border-b-2 border-transparent hover:border-crumble-600 pb-1 text-sm"
                onClick={() => scrollToSection("campaigns")}
              >
                KAMPANYALAR
              </button>
              <button
                className="text-crumble-600 hover:text-crumble-700 transition-colors duration-300 font-medium tracking-wide border-b-2 border-transparent hover:border-crumble-600 pb-1 text-sm"
                onClick={() => scrollToSection("story")}
              >
                HİKAYE
              </button>
              <button
                className="text-crumble-600 hover:text-crumble-700 transition-colors duration-300 font-medium tracking-wide border-b-2 border-transparent hover:border-crumble-600 pb-1 text-sm"
                onClick={() => scrollToSection("location")}
              >
                KONUM
              </button>
              <button
                className="text-crumble-600 hover:text-crumble-700 transition-colors duration-300 font-medium tracking-wide border-b-2 border-transparent hover:border-crumble-600 pb-1 text-sm"
                onClick={() => scrollToSection("faq")}
              >
                SSS
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-crumble-600 hover:text-crumble-700 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className={`md:hidden -mb-2 border-t border-crumble-600 pt-3 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className={`flex flex-col mb-4 space-y-1 transition-all duration-300 ease-in-out transform ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-crumble-600 hover:text-crumble-700 transition-colors font-medium text-left py-0.5 text-[10px]"
                >
                  ANA SAYFA
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-crumble-600 hover:text-crumble-700 transition-colors font-medium text-left py-0.5 text-[10px]"
                >
                  HAKKIMIZDA
                </button>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-crumble-600 hover:text-crumble-700 transition-colors font-medium text-left py-0.5 text-[10px]"
                >
                  MENÜ
                </button>
                <button
                  onClick={() => scrollToSection("campaigns")}
                  className="text-crumble-600 hover:text-crumble-700 transition-colors font-medium text-left py-0.5 text-[10px]"
                >
                  KAMPANYALAR
                </button>
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-crumble-600 hover:text-crumble-700 transition-colors font-medium text-left py-0.5 text-[10px]"
                >
                  HİKAYEMİZ
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-crumble-600 hover:text-crumble-700 transition-colors font-medium text-left py-0.5 text-[10px]"
                >
                  KONUM
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-crumble-600 hover:text-crumble-700 transition-colors font-medium text-left py-0.5 text-[10px]"
                >
                  SSS
                </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
