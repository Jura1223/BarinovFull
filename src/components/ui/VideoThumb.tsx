import { PlayButton } from "@/components/ui/PlayButton";

type VideoThumbProps = {
  image: string;
  alt: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  playSize?: "sm" | "md" | "lg";
  /** Подпись в левом нижнем углу (например «Выпуск 1»). Счётчики просмотров рисуются на самих скриншотах. */
  caption?: string;
};

/**
 * Превью видео: картинка + кнопка Play. Затемнения почти нет, чтобы были видны
 * счётчики просмотров на самих скриншотах. Если передан href, это ссылка в новой вкладке,
 * иначе кнопка (открывает видео в окне на сайте).
 */
export function VideoThumb({ image, alt, onClick, href, className = "", playSize = "md", caption }: VideoThumbProps) {
  const base = `group relative block overflow-hidden rounded-xl border border-white/20 bg-[#141414] transition-all duration-300 hover:border-[var(--brand)]/80 hover:shadow-[var(--shadow-glow-sm)] ${className}`;
  const inner = (
    <>
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {/* лёгкая подсветка сверху; низ не затемняем, там стоят счётчики */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/25 to-transparent" aria-hidden />
      <span className="absolute inset-0 flex items-center justify-center">
        <PlayButton size={playSize} />
      </span>
      {caption && (
        <span className="absolute bottom-2 left-2 rounded-md bg-black/65 px-2 py-0.5 text-[11px] font-medium text-white">{caption}</span>
      )}
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Смотреть: ${alt}`} className={base}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} aria-label={`Смотреть: ${alt}`} className={base}>
      {inner}
    </button>
  );
}
