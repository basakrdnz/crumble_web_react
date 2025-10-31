import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Crumble Kafe nerede bulunuyor?",
      answer: "Crumble Kafe Ankara Çankaya'da, İlkbahar Caddesi, Sinpaş Marina Yolu, Güneypark Küme Evleri No:78 adresinde hizmet vermektedir. Sağlıklı yemekler ve lezzetli tatlılar için bizi ziyaret edebilirsiniz."
    },
    {
      question: "Crumble Cafe'de hangi yemekler var?",
      answer: "Menümüzde sağlıklı bowllar (ızgara tavuk, köfte, barbekü tavuk vb.), taze makarnalar (Fettuccine Alfredo, Arabbiata, Pesto) ve el yapımı tatlılar bulunmaktadır. Her damak zevkine uygun seçenekler mevcuttur."
    },
    {
      question: "Crumble Kafe'nin çalışma saatleri nedir?",
      answer: "Crumble Cafe Pazartesi-Cuma 09:00-23:00, Cumartesi-Pazar 10:00-23:00 saatleri arasında hizmet vermektedir. Kahvaltıdan akşam yemeğine kadar lezzetli seçenekler bulabilirsiniz."
    },
    {
      question: "Crumble Cafe'de rezervasyon yapabilir miyim?",
      answer: "Şu an rezervasyon hizmeti bulunmamaktadır. Geniş alanımız olduğu için genellikle bekleme olmadan direkt yer bulabilirsiniz. Daha fazla bilgi için 0533 326 66 19 numaralı telefondan bize ulaşabilirsiniz."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-crumble-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-crumble-900 mb-4">
            Crumble Kafe Hakkında Sık Sorulan Sorular
          </h2>
          <p className="text-lg text-crumble-700">
            Crumble Cafe ile ilgili merak ettiğiniz her şey
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-crumble-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-crumble-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-crumble-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-crumble-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-crumble-100 pt-4">
                  <p className="text-crumble-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
