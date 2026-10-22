import { MapPin, Phone, Mail, Car, Bus, Clock } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { ADDRESS_LINES, EMAIL, HOURS, MAPS_URL, PHONE, PHONE_HREF } from "../data/info";

const Location = () => {
  return (
    <section id="location" className="bg-paper py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader eyebrow="Konum" title={<>Bizi <span className="italic text-olive">ziyaret</span> edin.</>}>
          Güneypark'taki kafemizde, şömine başında ya da pencere kenarında; harika lezzetler ve samimi hizmetle sizi
          bekliyoruz.
        </SectionHeader>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-6">
            <div className="rounded-3xl border border-line p-7 md:p-8">
              <h3 className="font-serif text-3xl font-semibold">İletişim</h3>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-olive" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Adres</p>
                    <p className="text-muted">
                      {ADDRESS_LINES.map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block rounded-full bg-olive px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-olive-dark"
                    >
                      Yol tarifi al
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-olive" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <a href={PHONE_HREF} className="text-muted hover:text-olive">{PHONE}</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-olive" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">E-posta</p>
                    <a href={`mailto:${EMAIL}`} className="text-muted hover:text-olive">{EMAIL}</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-line p-7 md:p-8">
              <h3 className="flex items-center gap-3 font-serif text-3xl font-semibold">
                <Clock className="h-6 w-6 text-olive" aria-hidden="true" />
                Çalışma saatleri
              </h3>
              <dl className="mt-5">
                {HOURS.map((h) => (
                  <div key={h.days} className="flex items-baseline gap-2.5 py-2">
                    <dt className="font-medium">{h.days}</dt>
                    <span aria-hidden="true" className="flex-1 min-w-3 -translate-y-1 border-b-[1.5px] border-dotted border-line" />
                    <dd className="font-semibold tabular-nums whitespace-nowrap">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-line p-7 md:p-8">
              <h3 className="font-serif text-3xl font-semibold">Nasıl gelinir?</h3>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-3">
                  <Car className="mt-0.5 h-5 w-5 flex-shrink-0 text-olive" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Arabayla</p>
                    <p className="text-muted">Kafemizin yer aldığı tesiste misafirlerimiz için otopark imkânı bulunmaktadır.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Bus className="mt-0.5 h-5 w-5 flex-shrink-0 text-olive" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Toplu taşıma</p>
                    <p className="text-muted">
                      Çevredeki otobüs durakları ve minibüslerle kolay ulaşım sağlanabilir. Güneypark ve Çankaya merkez
                      hattına yakın konumumuzla toplu taşıma ile rahatlıkla ulaşabilirsiniz.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src="/media/mekan.jpg"
              alt="Crumble kafe dış görünüm"
              className="h-72 w-full rounded-3xl object-cover lg:h-auto lg:flex-1"
              loading="lazy"
              decoding="async"
            />

            <div className="rounded-3xl bg-brick p-8 text-on-brick md:p-10">
              <h3 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">Ziyarete hazır mısınız?</h3>
              <p className="mt-3 max-w-[40ch] text-on-brick-muted">
                Kahveniz, kruvasanınız ve vitrinde sizi bekleyen günün lezzetleri hazır. Sorularınız için bize her zaman
                ulaşabilirsiniz.
              </p>
              <a
                href={PHONE_HREF}
                className="mt-6 inline-block rounded-full bg-on-brick px-6 py-3 font-semibold text-brick transition-colors hover:bg-white"
              >
                Bizi arayın
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
