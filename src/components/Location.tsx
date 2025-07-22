import React from "react";
import { MapPin, Clock, Phone, Mail, Car, Bus } from "lucide-react";

const Location = () => {
  const hours = [
    { day: "Pazartesi - Cuma", time: "09:00 - 23:00" },
    { day: "Cumartesi - Pazar", time: "10:00 - 23:00" },
    // { day: 'Pazar', time: '08:00 - 20:00' }
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-6">
            Bizi Ziyaret Edin
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Crumble'ın sıcaklığını deneyimleyin. Şehrin kalbinde uygun
            konumumuzda, harika yemekler ve samimi hizmetle sizi karşılamaya
            hazırız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-amber-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                İletişim Bilgileri
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Adres</h4>
                    <p className="text-amber-700">
                      İlkbahar Caddesi, Sinpaş Marina Yolu,
                      <br />
                      Güneypark Küme Evleri, No:78
                      <br />
                      Çankaya / Ankara
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Telefon</h4>
                    <p className="text-amber-700">0533 326 66 19</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">E-posta</h4>
                    <p className="text-amber-700">info@crumbleofficial.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                Çalışma Saatleri
              </h3>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-amber-900 font-medium">
                      {schedule.day}
                    </span>
                    <span className="text-amber-700">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                Nasıl Gelir
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Car className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Arabayla</h4>
                    <p className="text-amber-700">
                      Kafemizin yer aldığı tesiste misafirlerimiz için otopark
                      imkânı bulunmaktadır.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bus className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">
                      Toplu Taşıma
                    </h4>
                    <p className="text-amber-700">
                      Çevredeki otobüs durakları ve minibüslerle kolay ulaşım.
                    </p>
                    {/* BURAYA OTOBÜS NUMARASI GİRMEK LAZIM */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Image */}
          <div className="space-y-6">
            <div className="bg-amber-100 rounded-lg p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-amber-900 mb-2">
                  İnteraktif Harita
                </h4>
                <p className="text-amber-700">
                  İlkbahar Caddesi, Sinpaş Marina Yolu, Güneypark Küme Evleri,
                  No:78, Çankaya / Ankara
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=İlkbahar+Caddesi+Sinpaş+Marina+Yolu+Güneypark+Küme+Evleri+No:78+Çankaya+Ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
                >
                  Yol Tarifi Al
                </a>
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
              alt="Crumble kafe dış görünüm"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ziyaret Etmeye Hazır mısınız?
              </h3>
              <p className="mb-6">
                Lezzetli, sağlıklı yemeklerimizi size sunmak için
                sabırsızlanıyoruz. Unutulmaz bir yemek deneyimi için bize
                katılın!
              </p>
              <button className="bg-white text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-full font-semibold transition-colors">
                Bize Ulaşın
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
