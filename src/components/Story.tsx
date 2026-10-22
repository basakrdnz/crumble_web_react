import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const Story = () => {
  const stats = [
    { value: "3+", label: "Yıl Hizmet" },
    { value: "1K+", label: "Mutlu Müşteri" },
    { value: "%100", label: "El Yapımı" },
  ];

  return (
    <section id="story" className="bg-sand py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeader eyebrow="Hikayemiz" title={<>2022'den <span className="italic text-olive">beri</span> buradayız.</>}>
          Tutkuyla başladık. El yapımı tatlılar, özel sandviçler ve taze içeceklerle Güneypark'ın sevilen buluşma
          noktası olduk.
        </SectionHeader>

        <Reveal className="mb-16">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-5">
            <img
              src="/media/kase.jpg"
              alt="Güneşli bir köşede, ahşap masada kase"
              className="h-[360px] w-full rounded-3xl object-cover object-[center_78%] md:col-span-3 md:h-[560px]"
              loading="lazy"
              decoding="async"
            />
            <img
              src="/media/kahve-fincan.jpg"
              alt="Mavi fincanda köpüklü kahve"
              className="h-[300px] w-full rounded-3xl object-cover md:col-span-2 md:h-[560px]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <dl className="grid grid-cols-3 divide-x divide-line border-y border-line text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse py-8 lg:py-12">
              <dt className="mt-1 text-sm text-muted sm:text-base">{s.label}</dt>
              <dd className="font-serif text-5xl font-semibold text-olive lg:text-7xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Story;
