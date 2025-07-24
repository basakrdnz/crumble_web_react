import React, { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-crumble-200/20 backdrop-blur-sm"
          : "bg-crumble-100/70 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-crumble-800" />
            <img
              src="/images/crumble_logo.png"
              alt="Crumble Logo"
              className="w-28 h-auto md:w-32 lg:w-36 mt-1"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              className="nav-link"
              onClick={() => scrollToSection("home")}
            >
              Ana Sayfa
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection("about")}
            >
              Hakkımızda
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection("menu")}
            >
              Menü
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection("campaigns")}
            >
              Kampanyalar
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection("story")}
            >
              Hikaye
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection("location")}
            >
              Konum
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-crumble-600 hover:text-crumble-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-crumble-200 pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-crumble-800 hover:text-crumble-600 transition-colors font-medium text-left"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-crumble-800 hover:text-crumble-600 transition-colors font-medium text-left"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-crumble-800 hover:text-crumble-600 transition-colors font-medium text-left"
              >
                Menü
              </button>
              <button
                onClick={() => scrollToSection("campaigns")}
                className="text-crumble-800 hover:text-crumble-600 transition-colors font-medium text-left"
              >
                Kampanyalar
              </button>
              <button
                onClick={() => scrollToSection("story")}
                className="text-crumble-800 hover:text-crumble-600 transition-colors font-medium text-left"
              >
                Hikayemiz
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-crumble-800 hover:text-crumble-600 transition-colors font-medium text-left"
              >
                Konum
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
