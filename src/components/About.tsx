import { Heart, Leaf, ChefHat, Award } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Sevgiyle Yapılmış",
      description: "Her tatlı, her sandviç tutkuyla ve özenle hazırlanır, her lokmada mükemmel lezzet garantisi verilir.",
    },
    {
      icon: Leaf,
      title: "Taze ve Özel",
      description: "En kaliteli yerel malzemeleri kullanarak, tatlılarımızdan sandviçlerimize kadar her şeyi özenle hazırlıyoruz.",
    },
    {
      icon: ChefHat,
      title: "Her Gün El Yapımı",
      description: "Tatlılarımız ve soslarımız her gün taze olarak kendi mutfağımızda yapılır. Kalite ve özgünlükten asla taviz vermeyiz.",
    },
    {
      icon: Award,
      title: "Kaliteli Malzemeler",
      description: "Malzeme seçimi ve hazırlığında en yüksek standartları koruyoruz.",
    },
  ];

  return (
    <section id="about" className="bg-sand">
      <div className="mx-auto max-w-7xl px-5 pt-20 lg:px-10 lg:pt-32">
        <SectionHeader eyebrow="Hakkımızda" title={<>Crumble'a <span className="italic text-olive">hoş geldiniz.</span></>}>
          Harika lezzetlerin harika malzemelerle başladığına inanıyoruz. Kapımızdan geçen her misafire rahatlık ve neşe
          getiren tatlılar, sandviçler ve taze içecekler sunuyoruz.
        </SectionHeader>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 pb-20 sm:grid-cols-2 lg:grid-cols-4 lg:pb-32">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 90} className="border-t border-ink/15 pt-6">
              <div className="flex items-center justify-between">
                <feature.icon className="h-7 w-7 text-olive" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-xs tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 font-serif text-[28px] font-semibold leading-tight">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Şömine başı: tam genişlik atmosfer */}
      <div className="relative h-[115vw] max-h-[920px] min-h-[480px] overflow-hidden lg:h-[92vh]">
        <img
          src="/media/atmosfer-somine.jpg"
          alt="Crumble'ın şömineli iç mekânında kahve içen misafirler"
          className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent lg:bg-gradient-to-b lg:from-black/75 lg:via-black/10" />
        <Reveal className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-12 lg:bottom-auto lg:top-0 lg:px-10 lg:pb-0 lg:pt-24">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cream/80">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            Mekân
          </p>
          <p className="mt-5 max-w-3xl font-serif text-[clamp(40px,10vw,56px)] font-semibold leading-[0.95] text-white lg:text-[clamp(64px,6.4vw,96px)]">
            Şömine yanıyor, kahven hazır. <span className="italic text-cream">Acelesi yok.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
