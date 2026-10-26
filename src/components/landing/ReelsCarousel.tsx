import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/content/site";
import { VideoModal } from "@/components/ui/VideoModal";
import { PlayButton } from "@/components/ui/PlayButton";

/**
 * «Пример работ»: центральный ролик крупнее, с оранжевой обводкой; соседние меньше и темнее.
 * Свайп и стрелки листают. Нажатие на соседний ролик выводит его в центр, на центральный открывает видео.
 */
export function ReelsCarousel() {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActive(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-[#0E0E0E] py-16 md:py-24">
      <div className="container-rail">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="h1">Пример работ</h2>
        </div>
      </div>

      <div className="overflow-hidden py-8 md:py-10" ref={emblaRef}>
        <div className="flex touch-pan-y items-center">
          {site.reels.map((r, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                className={`shrink-0 grow-0 pl-3 md:pl-5 ${
                  r.isHorizontal ? "basis-[280px] md:basis-[400px]" : "basis-[160px] md:basis-[200px]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (isActive) setSelectedVideo({ url: r.vkUrl || "", title: r.label || "Пример работы" });
                    else emblaApi?.scrollTo(i);
                  }}
                  aria-label={isActive ? `Смотреть пример работы ${i + 1}` : `Показать пример работы ${i + 1}`}
                  className={`group relative block w-full overflow-hidden rounded-2xl border-2 bg-[#141414] transition-all duration-500 ${
                    r.isHorizontal ? "aspect-video" : "aspect-[9/16]"
                  } ${
                    isActive
                      ? "scale-110 border-[var(--brand)] shadow-[0_0_40px_-6px_oklch(0.72_0.19_47/0.7)]"
                      : "scale-90 border-white/20 brightness-[0.6] hover:brightness-90"
                  }`}
                >
                  <img
                    src={r.src}
                    alt={r.label || `Пример Reels ${i + 1}: монтаж Юрия Баринова`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {isActive && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <PlayButton size="md" />
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-colors hover:border-[var(--brand)] hover:bg-[var(--brand)]/15"
          aria-label="Листать влево"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <button
          type="button"
          onClick={next}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-colors hover:border-[var(--brand)] hover:bg-[var(--brand)]/15"
          aria-label="Листать вправо"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>

      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title}
      />
    </section>
  );
}
