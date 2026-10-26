import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { site } from "@/content/site";
import { VideoModal } from "@/components/ui/VideoModal";
import { useState } from "react";

export function VideoExamples() {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <section className="bg-[#0E0E0E] py-20 md:py-28">
      <div className="container-rail">
        <div className="text-center mb-12">
          <div className="eyebrow mb-4">Видео-примеры</div>
          <h2 className="h1">Наши лучшие работы</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-5 md:p-8 overflow-hidden border border-[var(--brand)]/35"
        >
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
               style={{ background: "var(--gradient-radial-glow)" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 relative">
            {site.videoExamples?.slice(0, 10).map((video, i) => (
              <motion.button
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setSelectedVideo({ url: video.vkUrl, title: video.title })}
                className="relative aspect-[9/16] overflow-hidden rounded-xl border border-white/10 hover:border-[var(--brand)]/40 transition-all group"
              >
                <img
                  src={video.image}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl pointer-events-none" />

                <div className="absolute bottom-2 left-2 right-2 flex items-end justify-end">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--brand)] text-black opacity-0 group-hover:opacity-100 transition-all">
                    <Play className="h-4 w-4 fill-current ml-0.5" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <VideoModal
          isOpen={selectedVideo !== null}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo?.url || ""}
          title={selectedVideo?.title}
        />
      </div>
    </section>
  );
}
