import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Anasayfa", target: "home" },
  { label: "Hakkımızda", target: "about" },
  { label: "Hikaye", target: "story" },
  { label: "Konum", target: "location" },
  { label: "SSS", target: "faq" },
];

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
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4  ">
        <div
          className={`pointer-events-auto max-w-4xl w-full rounded-2xl transition-all duration-300 border px-2 ${
            isScrolled
              ? "bg-white/60 border-white/20 shadow-lg backdrop-blur-lg"
              : "bg-black/20 border-white/10 shadow-sm backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center justify-between px-5 sm:px-7 py-1.5 md:py-2.5">
            {/* Logo only */}
            <button
              onClick={() => scrollToSection("home")}
              className="p-0 hover:opacity-80 transition-opacity"
              aria-label="Crumble ana sayfa"
            >
              <img
                src="/images/crumble_logo_green.png"
                alt="Crumble Logo"
                className="h-4 w-auto"
                loading="eager"
              />
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase text-crumble-600 hover:text-crumble-950 px-3 py-1 rounded-full transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden text-crumble-700 hover:text-crumble-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile side drawer overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile side drawer menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-lg shadow-2xl z-50 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/20">
            <h2 className="text-lg font-semibold text-crumble-900">Menü</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-crumble-700 hover:text-crumble-900 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation items */}
          <nav className="flex flex-col flex-1 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-left text-[11px] font-semibold tracking-[0.2em] uppercase text-crumble-700 hover:text-crumble-950 transition-colors px-4 py-3 hover:bg-crumble-50 rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
