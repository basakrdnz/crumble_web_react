import { useEffect, useRef } from "react";

type Props = {
  src: string; // uzantısız yol: .webm ve .mp4 dosyaları birlikte beklenir
  poster: string;
  className?: string;
  eager?: boolean;
  label: string;
};

// Sessiz, döngüde oynayan video; ekrandan çıkınca durur, hareket azaltma tercihinde hiç oynamaz
const AutoVideo = ({ src, poster, className = "", eager = false, label }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      aria-label={label}
    >
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
    </video>
  );
};

export default AutoVideo;
