import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { HOURS, PHONE } from "../data/info";

const faqs = [
  {
    question: "Crumble Kafe nerede bulunuyor?",
    answer:
      "Crumble Kafe Ankara Çankaya'da, İlkbahar Caddesi, Sinpaş Marina Yolu, Güneypark Küme Evleri No:78 adresinde hizmet vermektedir. Lezzetli tatlılar, özel sandviçler ve taze içecekler için bizi ziyaret edebilirsiniz.",
  },
  {
    question: "Crumble Cafe'de hangi lezzetler var?",
    answer:
      "Menümüzde kahveler, çaylar, detox ve matcha içecekleri, makarnalar, kaseler, tostlar ve bagetler bulunuyor. Vitrinimizdeki el yapımı tatlı ve tuzlular ise her gün değişiyor; varsa kapın!",
  },
  {
    question: "Crumble Kafe'nin çalışma saatleri nedir?",
    answer: `Crumble Cafe ${HOURS.map((h) => `${h.days} ${h.time}`).join(", ")} saatleri arasında hizmet vermektedir.`,
  },
  {
    question: "Crumble Cafe'de rezervasyon yapabilir miyim?",
    answer: `Şu an rezervasyon hizmeti bulunmamaktadır. Geniş alanımız olduğu için genellikle bekleme olmadan direkt yer bulabilirsiniz. Daha fazla bilgi için ${PHONE} numaralı telefondan bize ulaşabilirsiniz.`,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">SSS</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold md:text-6xl">Sık sorulan sorular</h2>
          <p className="mt-4 text-lg text-muted">Crumble Cafe ile ilgili merak ettiğiniz her şey</p>
        </div>

        <div className="border-t border-line">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-serif text-2xl font-semibold leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-olive transition-transform ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {open && <p className="pb-6 leading-relaxed text-muted">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
