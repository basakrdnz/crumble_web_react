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
    </section>
  );
};

export default About;
