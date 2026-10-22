const WORDS = ["Taze kahve", "Kruvasan", "Varsa Kap!", "Matcha", "Ev yapımı makarna", "Kurabiye", "Şömine başı"];

const Marquee = () => {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {WORDS.map((w) => (
        <span key={w} className="flex items-center">
          <span className="px-6 font-serif text-3xl font-medium italic md:text-4xl">{w}</span>
          <span className="text-on-brick-muted">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-brick py-4 text-on-brick">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
};

export default Marquee;
