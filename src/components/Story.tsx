const Story = () => {
  const stats = [
    { value: "3+", label: "Yıl Hizmet" },
    { value: "1K+", label: "Mutlu Müşteri" },
    { value: "%100", label: "El Yapımı" },
  ];

  return (
    <section id="story" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-olive">Hikayemiz</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold md:text-6xl">2022'den beri</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            2022'de tutkuyla başladık. El yapımı tatlılar, özel sandviçler ve taze içeceklerle sevilen bir buluşma noktası
            olduk.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          <div className="md:col-span-2 md:row-span-2">
            <img
              src="/images/kruvasan.jpeg"
              alt="Crumble Kruvasan"
              className="h-full min-h-[360px] w-full rounded-2xl object-cover md:min-h-[500px]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <img
            src="/images/C0837T01.JPG"
            alt="Crumble Cafe"
            className="h-full min-h-[240px] w-full rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/DSC00211.JPG"
            alt="Crumble Cafe"
            className="h-full min-h-[240px] w-full rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <dl className="grid grid-cols-3 divide-x divide-line border-y border-line text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse py-6">
              <dt className="mt-1 text-sm text-muted sm:text-base">{s.label}</dt>
              <dd className="font-serif text-4xl font-semibold text-olive md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Story;
