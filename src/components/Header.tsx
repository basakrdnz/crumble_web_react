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
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Hero üzerindeyken açık renk, kaydırınca kağıt beyazı zemin
  const solid = isScrolled || isMenuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300 ${
          solid ? "border-b border-line bg-paper/95 backdrop-blur" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 lg:px-10">
          <button
            onClick={() => scrollToSection("home")}
            className={`font-serif text-[28px] font-medium leading-none tracking-[0.09em] transition-colors ${
              solid ? "text-olive" : "text-white"
            }`}
            aria-label="Crumble ana sayfa"
          >
            CRUMBLE
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className={`rounded-full px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  solid ? "text-muted hover:text-olive" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`md:hidden transition-colors ${solid ? "text-ink" : "text-white"}`}
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobil açılır menü */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ink/40 md:hidden" onClick={() => setIsMenuOpen(false)} />
      )}
      <div
        className={`fixed inset-x-0 top-16 z-40 border-b border-line bg-paper shadow-lg transition-all duration-300 md:hidden ${
          isMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-3">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="border-b border-line py-3.5 text-left font-serif text-2xl font-semibold text-ink last:border-0 hover:text-olive"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
