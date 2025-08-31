import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Crumble Kafe nerede bulunuyor?",
      answer: "Crumble Kafe Ankara'da hizmet vermektedir. Sağlıklı yemekler ve lezzetli tatlılar için Crumble Cafe'yi ziyaret edebilirsiniz."
    },
    {
      question: "Crumble Cafe'de hangi yemekler var?",
      answer: "Crumble Kafe'de sağlıklı bowllar, taze makarnalar ve el yapımı tatlılar bulunmaktadır. Crumble Cafe'nin özel menüsünde her damak zevkine uygun seçenekler mevcuttur."
    },
    {
      question: "Crumble Kafe'nin çalışma saatleri nedir?",
      answer: "Crumble Cafe haftanın her günü 08:00-22:00 saatleri arasında hizmet vermektedir. Crumble Kafe'de kahvaltıdan akşam yemeğine kadar lezzetli seçenekler bulabilirsiniz."
    },
    {
      question: "Crumble Cafe'de rezervasyon yapabilir miyim?",
      answer: "Crumble Kafe'de şu an rezervasyon hizmeti bulunmamaktadır. Crumble Cafe'de geniş alanımız olduğu için bekleme olmadan direkt yer bulabilirsiniz."
    },
    {
      question: "Crumble Kafe'nin özel yemekleri nelerdir?",
      answer: "Crumble Cafe'nin özel yemekleri arasında sağlıklı bowl çeşitleri, taze makarnalar ve el yapımı tatlılar bulunmaktadır. Crumble Kafe'nin her yemeği özenle hazırlanmaktadır."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Crumble Kafe Hakkında Sık Sorulan Sorular
          </h2>
          <p className="text-lg text-gray-600">
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
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-crumble-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-crumble-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Crumble Kafe'de daha fazla bilgi için bizi arayabilir veya ziyaret edebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <a
               href="tel:+905333266619"
               className="inline-flex items-center px-6 py-3 bg-crumble-600 text-white font-semibold rounded-lg hover:bg-crumble-700 transition-colors duration-200"
             >
               Crumble Cafe'yi Ara
             </a>
            <a
              href="#location"
              className="inline-flex items-center px-6 py-3 border-2 border-crumble-600 text-crumble-600 font-semibold rounded-lg hover:bg-crumble-50 transition-colors duration-200"
            >
              Crumble Kafe Konumu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
