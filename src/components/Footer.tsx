import { Coffee, Facebook, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-crumble-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-crumble-600" />
              <img
                src="/images/crumble_logo_green.png"
                alt="Crumble Logo"
                className="w-28 h-auto md:w-32 lg:w-36 mt-1"
                loading="eager"
                decoding="async"
              />
            </div>
            <p className="text-crumble-100 mb-4 leading-relaxed">
              Sağlıklı ile lezzetli buluşuyor. Vücudunuzu besleyen ve damak
              tadınızı memnun eden taze, el yapımı yemekler sunmaya kararlıyız.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/crumble.official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crumble-200 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/crumble.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crumble-200 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              {/* <a href="#" className="text-crumble-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-crumble-700 mb-4 ">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-crumble-100 hover:text-white transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-crumble-100 hover:text-white transition-colors"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("story")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-crumble-100 hover:text-white transition-colors"
                >
                  Hikayemiz
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("location")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-crumble-100 hover:text-white transition-colors"
                >
                  Konum
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-crumble-700 mb-4">İletişim</h3>
            <div className="space-y-2 text-crumble-100">
              <p>İlkbahar Caddesi, Sinpaş Marina Yolu</p>
              <p>Güneypark Küme Evleri, No:78</p>
              <p>Çankaya / Ankara</p>
              <p className="mt-3">0533 326 66 19</p>
              <p>info@crumbleofficial.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-crumble-800 mt-8 pt-8 text-center">
          <p className="text-crumble-100 flex items-center justify-center">
            <Heart className="h-4 w-4 mx-2 text-crumble-300 fill-current" /> ile
            Crumble Ekibi tarafından yapıldı
          </p>
          <p className="text-crumble-200 text-sm mt-2">
            © 2024 Crumble Kafe. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
