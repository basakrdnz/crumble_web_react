import { Heart, Leaf, ChefHat, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Sevgiyle Yapılmış",
      description: "Her yemek tutkuyla ve özenle hazırlanır, her lokmada mükemmel lezzet garantisi verilir."
    },
    {
      icon: Leaf,
      title: "Taze ve Sağlıklı",
      description: "Vücudunuzu ve ruhunuzu besleyen besleyici yemekler yaratmak için en kaliteli yerel malzemeleri kullanıyoruz."
    },
    {
      icon: ChefHat,
      title: "Her Gün El Yapımı",
      description: "Tatlılarımız ve soslarımız her gün taze olarak kendi mutfağımızda yapılır. Kalite ve özgünlükten asla taviz vermeyiz."
    },
    {
      icon: Award,
      title: "Premium Kalite",
      description: "Çiftlikten sofraya, malzeme seçimi ve hazırlığında en yüksek standartları koruyoruz."
    }
  ];

  return (
    <section id="about" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-crumble-900 mb-6">
            Crumble Hakkında
          </h2>
          <p className="text-xl text-crumble-700 max-w-3xl mx-auto leading-relaxed">
            Crumble'da harika yemeğin harika malzemelerle başladığına inanıyoruz. Misyonumuz, kapımızdan geçen her misafire 
            rahatlık ve neşe getiren sağlıklı, lezzetli yemekler sunmaktır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-crumble-900 mb-6">
              Sağlığa Olan Bağlılığımız
            </h3>
            <p className="text-crumble-700 mb-4 leading-relaxed">
              Sadece inanılmaz lezzetli değil, aynı zamanda vücudunuzu besleyen yemekler yaratma konusunda tutkuluyuz. 
              Menümüzde protein açısından zengin bowllar, taze makarna yemekleri ve sağlıklı beslenmenin lezzetten 
              ödün vermek anlamına gelmediğini kanıtlayan suçluluk hissi yaratmayan tatlılar bulunuyor.
            </p>
            <p className="text-crumble-700 mb-6 leading-relaxed">
              Her sos, her tatlı, her bileşen mutfağımızda sıfırdan yapılır. Yemeğinizin içine tam olarak neyin 
              girdiğini bilmekten gurur duyuyoruz, sadece yapay koruyucular veya kısayollar olmadan doğal malzemeler kullanıyoruz.
            </p>
            <div className="bg-crumble-100 p-6 rounded-lg">
              <p className="text-crumble-800 font-medium italic">
                "Sadece yemek servis etmiyoruz; aileleri ve arkadaşları sağlıklı, lezzetli yemekler etrafında 
                bir araya getiren deneyimler yaratıyoruz."
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="/images/Tezza-2322.JPG"
              alt="Taze malzemeler ve yemek pişirme"
              className="w-full h-96 overflow-hidden object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;