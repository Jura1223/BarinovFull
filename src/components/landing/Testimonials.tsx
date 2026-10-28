import { Quote, Star } from "lucide-react";
import { site } from "@/content/site";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

// Скриншоты отзывов
const reviewScreenshots = [
  "/images/reviews/review1.webp",
  "/images/reviews/review2.webp",
  "/images/reviews/review3.webp",
  "/images/reviews/review5.webp",
  "/images/reviews/review6.webp",
  "/images/reviews/review7.webp",
  "/images/cases/review-extra-1.webp",
  "/images/cases/review-extra-2.webp"
];

// Подписи к отзывам
const reviewLabels = [
  "Отзыв от Дениса Дегтерева (учитель английского)",
  "Отзыв от Дарьи Плужниковой (бодибилдер)",
  "Отзыв от Кеши (фитнес)",
  "Отзыв от Карины (маникюр)",
  "Отзыв от Макса (психология)",
  "Отзыв от Василия (философия, религия)",
  "Записываем с кайфом рилсы",
  "Совместные созвоны"
];

export function Testimonials() {
  return (
    <section id="reviews" className="bg-[#0E0E0E] py-20 md:py-28">
      <div className="container-rail">
        <div className="text-center mb-14">
          <h2 className="h1">Что говорят обо мне</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {site.testimonials.map((t, i) => (
            <figure key={i} className="glass rounded-3xl p-6 relative overflow-hidden bg-[#1a1a1a] border border-white/[0.08]">
              {t.isScreenshot ? (
                // Скриншот отзыва
                <div className="h-full w-full flex flex-col">
                  <div className="flex-1 rounded-xl border border-white/10 overflow-hidden min-h-0">
                    <img 
                      src={t.img} 
                      alt={t.name} 
                      loading="lazy" decoding="async"
                      className="h-full w-full object-contain bg-[#0E0E0E]"
                    />
                  </div>
                </div>
              ) : (
                // Текстовый отзыв
                <>
                  {t.quote && (
                    <>
                      <Quote className="absolute top-6 right-6 h-6 w-6 text-[var(--brand)]/40" />
                      <div className="flex items-center gap-1 mb-5">
                        {Array.from({ length: 5 }).map((_, k) => (
                          <Star key={k} className="h-3.5 w-3.5 fill-[var(--brand)] text-[var(--brand)]" />
                        ))}
                      </div>
                      <blockquote className="text-[15px] leading-relaxed text-white/92">«{t.quote}»</blockquote>
                    </>
                  )}
                  {t.audioFile && (
                    <AudioPlayer
                      audioSrc={t.audioFile}
                      label={t.audioLabel}
                      className="mt-5 w-full"
                    />
                  )}
                  <figcaption className="mt-6 flex items-center gap-3">
                    {t.img && (
                      <img src={t.img} alt={t.name} loading="lazy" decoding="async"
                           className="h-10 w-10 rounded-full object-cover border border-white/10" />
                    )}
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-white/72">{t.role}</div>
                    </div>
                  </figcaption>
                </>
              )}
            </figure>
          ))}
          
          {/* Старые скриншоты отзывов */}
          {reviewScreenshots.map((screenshot, i) => (
            <figure key={`screenshot-${i}`} className="glass rounded-3xl p-4 relative bg-[#1a1a1a] border border-white/[0.08]">
              <div className="aspect-[4/5] rounded-lg border border-white/10 overflow-hidden">
                <img 
                  src={screenshot} 
                  alt={reviewLabels[i] ?? `Отзыв ${i + 1}`} 
                  loading="lazy" decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-center">
                <div className="text-xs text-[var(--brand)] font-medium">
                  {reviewLabels[i]}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
