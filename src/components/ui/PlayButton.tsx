import { Play } from "lucide-react";

type PlayButtonProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11 md:h-12 md:w-12",
  lg: "h-14 w-14 md:h-16 md:w-16",
};

/**
 * Единая кнопка Play для всех видео на сайте: стеклянный кружок с тонким оранжевым кольцом и мягким свечением.
 * Размещать внутри блока с классом `group`: при наведении кнопка заполняется оранжевым.
 */
export function PlayButton({ size = "md", className = "" }: PlayButtonProps) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none grid place-items-center rounded-full border border-[var(--brand)]/80 bg-black/40 text-[var(--brand)] shadow-[0_0_28px_-4px_oklch(0.72_0.19_47/0.65)] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--brand)] group-hover:text-black ${sizes[size]} ${className}`}
    >
      <Play className="h-[44%] w-[44%] translate-x-[7%] fill-current" strokeWidth={0} />
    </span>
  );
}
