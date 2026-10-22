import { Plus } from "lucide-react";
import { useState } from "react";
import { HOURS, PHONE } from "../data/info";
import Reveal from "./ui/Reveal";

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sand py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-olive">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              SSS
            </p>
            <h2 className="mt-5 font-serif text-[clamp(44px,11vw,64px)] font-semibold leading-[0.95] lg:text-[clamp(64px,6vw,88px)]">
              Merak <span className="italic text-olive">edilenler.</span>
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">Crumble Cafe ile ilgili sık sorulan sorular.</p>
          </div>
        </Reveal>

        <Reveal className="border-t border-ink/15 lg:col-span-7" delay={100}>
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-ink/15">
                <button
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left lg:py-8"
                >
                  <span className="font-serif text-2xl font-semibold leading-snug lg:text-3xl">{faq.question}</span>
                  <Plus
                    className={`h-6 w-6 flex-shrink-0 text-olive transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden text-lg leading-relaxed text-muted">
                    <span className="block max-w-2xl pb-7">{faq.answer}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
