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
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <div
        className={`pointer-events-auto w-full max-w-3xl rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? "bg-white/90 border-crumble-200 shadow-lg backdrop-blur"
            : "bg-white/60 border-white/50 shadow-sm backdrop-blur"
        }`}
      >
        <div className="flex items-center justify-between px-3 sm:px-5 py-1.5">
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
                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-crumble-700 hover:text-crumble-900 px-3 py-1 rounded-full hover:bg-crumble-100/40 transition-colors"
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

        {/* Mobile menu */}
        <div
          className={`md:hidden px-3 pb-3 transition-all duration-300 origin-top overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1.5 pt-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-left text-[11px] font-semibold tracking-[0.2em] uppercase text-crumble-700 hover:text-crumble-900 transition-colors border border-white/40 rounded-full px-4 py-2 hover:bg-white/20"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
