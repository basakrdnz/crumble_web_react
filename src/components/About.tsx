import { Heart, Leaf, ChefHat, Award } from "lucide-react";

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
    <section id="about" className="bg-sand pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">Hakkımızda</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold md:text-6xl">Crumble'a hoş geldiniz</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Crumble'da harika lezzetlerin harika malzemelerle başladığına inanıyoruz. Misyonumuz, kapımızdan geçen her
            misafire rahatlık ve neşe getiren lezzetli tatlılar, özel sandviçler ve taze içecekler sunmaktır.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-20 sm:grid-cols-2 lg:grid-cols-4 md:pb-28">
          {features.map((feature) => (
            <div key={feature.title} className="border-t border-line pt-6">
              <feature.icon className="h-8 w-8 text-olive" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-4 font-serif text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <img
        src="/images/DSC00263.JPG"
        alt="Crumble Cafe"
        className="h-[360px] w-full object-cover md:h-[520px]"
        style={{ objectPosition: "center bottom" }}
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};

export default About;
