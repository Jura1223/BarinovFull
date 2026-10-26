import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import { site } from "@/content/site";
import { VideoModal } from "@/components/ui/VideoModal";
import { VideoThumb } from "@/components/ui/VideoThumb";
import { useState } from "react";

/** Кейс Павла Бутузова. Порядок чтения: Точка А, Точка Б, Арсен Маркарян, отзыв Павла, примеры Reels. */
export function SecondaryCase() {
  const c = site.secondaryCase;
  const reels = site.reels.slice(0, 4);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <section className="bg-[#0E0E0E] pb-16 md:pb-28">
      <div className="container-rail">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-6%" }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-5 md:p-10 overflow-hidden border border-[var(--brand)]/35"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Кейс №3</div>
          <h3 className="mt-2 font-display text-3xl font-bold md:text-4xl">{c.name}</h3>
          <p className="mt-1 text-sm text-[var(--brand)]">{c.role}</p>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* 1. Точка А, стрелка, Точка Б */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/15 bg-[#0E0E0E] p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 font-display text-lg font-bold">А</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/92">Точка А: что было</span>
                </div>
                <ul className="space-y-2.5">
                  {c.pointA.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[15px] leading-snug text-white/94">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-3 flex justify-center" aria-hidden>
                <ArrowDown className="h-7 w-7 text-[var(--brand)]" />
              </div>

              <div className="rounded-2xl border border-[var(--brand)]/50 bg-[var(--brand)]/[0.06] p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--brand)] bg-[var(--brand)] font-display text-lg font-bold text-black">Б</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Точка Б: что стало</span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[c.headlineLeft, c.headlineMid, c.headlineRight].map((m) => (
                    <div key={m.caption} className="rounded-xl border border-white/[0.12] bg-[#0E0E0E] p-4">
                      <div className="font-display text-3xl font-bold text-[var(--brand)] md:text-4xl">{m.value}</div>
                      <div className={`mt-1 text-white/92 ${m.value ? "text-[13px]" : "text-[15px] font-medium leading-snug"}`}>{m.caption}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Подтверждение: профиль, среди подписчиков Арсен Маркарян */}
            <div className="lg:col-span-5">
              {c.instagramImage && (
                <div className="relative overflow-hidden rounded-2xl border border-white/15">
                  <img src={c.instagramImage} alt="Instagram Павла Бутузова: среди подписчиков Арсен Маркарян" loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute right-2 top-2 rounded-full bg-gradient-to-r from-purple-500/90 to-pink-500/90 px-2 py-1 text-[11px] text-white">Instagram</div>
                </div>
              )}
              <p className="mt-3 text-center text-sm text-white/90">После нашей работы на аккаунт подписался Арсен Маркарян</p>
            </div>

            {/* 3. Отзыв Павла */}
            <div className="lg:col-span-5">
              {c.reviewVideo && (
                <div className="rounded-2xl border border-white/15 bg-[#0E0E0E] p-4">
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Отзыв Павла</div>
                  <VideoThumb
                    image={c.reviewVideo.image}
                    alt={c.reviewVideo.title}
                    onClick={() => setSelectedVideo({ url: c.reviewVideo.vkUrl, title: c.reviewVideo.title })}
                    className="mx-auto aspect-[9/16] w-full max-w-[220px]"
                    playSize="md"
                  />
                  <div className="mt-3 flex animate-hint items-center justify-center gap-2 text-[var(--brand)]" aria-hidden>
                    <ArrowUp className="h-5 w-5" />
                    <span className="text-sm font-medium">Смотреть отзыв</span>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Примеры работ */}
            <div className="lg:col-span-7">
              <div className="h-full rounded-2xl border border-white/15 bg-[#0E0E0E] p-4">
                <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Примеры Reels</div>
                <div className="grid grid-cols-2 gap-3">
                  {c.videos?.map((video, i) => (
                    <VideoThumb
                      key={video.id}
                      image={video.image || reels[i]?.src || reels[0]?.src}
                      alt={video.title}
                      onClick={() => setSelectedVideo({ url: video.vkUrl, title: video.title })}
                      className="aspect-[9/16] w-full"
                      playSize="md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <VideoModal
            isOpen={selectedVideo !== null}
            onClose={() => setSelectedVideo(null)}
            videoUrl={selectedVideo?.url || ""}
            title={selectedVideo?.title}
          />
        </motion.div>
      </div>
    </section>
  );
}
