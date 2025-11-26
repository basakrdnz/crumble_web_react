import { Heart, Leaf, ChefHat, Award } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Sevgiyle Yapılmış",
      description: "Her tatlı, her sandviç tutkuyla ve özenle hazırlanır, her lokmada mükemmel lezzet garantisi verilir."
    },
    {
      icon: Leaf,
      title: "Taze ve Özel",
      description: "En kaliteli yerel malzemeleri kullanarak, tatlılarımızdan sandviçlerimize kadar her şeyi özenle hazırlıyoruz."
    },
    {
      icon: ChefHat,
      title: "Her Gün El Yapımı",
      description: "Tatlılarımız ve soslarımız her gün taze olarak kendi mutfağımızda yapılır. Kalite ve özgünlükten asla taviz vermeyiz."
    },
    {
      icon: Award,
      title: "Kaliteli Malzemeler",
      description: "Malzeme seçimi ve hazırlığında en yüksek standartları koruyoruz."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-crumble-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-crumble-900 mb-6">
            Crumble Hakkında
          </h2>
          <p className="text-xl text-crumble-700 max-w-3xl mx-auto leading-relaxed">
            Crumble'da harika lezzetlerin harika malzemelerle başladığına inanıyoruz. Misyonumuz, kapımızdan geçen her misafire 
            rahatlık ve neşe getiren lezzetli tatlılar, özel sandviçler ve taze içecekler sunmaktır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crumble-100 rounded-full mb-4 group-hover:bg-crumble-200 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-crumble-800" />
              </div>
              <h3 className="text-xl font-semibold text-crumble-900 mb-2">{feature.title}</h3>
              <p className="text-crumble-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <OptimizedImage
            src="/images/DSC00263.JPG"
            alt="Crumble Cafe"
            className="w-full h-[400px] md:h-[500px] object-cover"
            style={{ objectPosition: 'center bottom' }}
            placeholder="Crumble Cafe yükleniyor..."
          />
        </div>
      </div>
    </section>
  );
};

export default About;