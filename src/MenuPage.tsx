import { Clock } from "lucide-react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { todaysHours } from "./data/info";

// Yalnızca kafedeki QR kodla açılan menü sayfası (ana siteden bağlantı verilmez)
const MenuPage = () => (
  <div className="min-h-screen">
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="/" className="font-serif text-[28px] font-medium leading-none tracking-[0.09em] text-olive">
          CRUMBLE
        </a>
        <span className="flex items-center gap-2 text-sm text-muted">
          <Clock className="h-4 w-4" aria-hidden="true" />
          Bugün {todaysHours()}
        </span>
      </div>
    </header>
    <Menu />
    <Footer />
  </div>
);

export default MenuPage;
