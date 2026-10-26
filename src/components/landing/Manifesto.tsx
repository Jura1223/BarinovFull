import { motion } from "framer-motion";
import { site } from "@/content/site";

export function Manifesto() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-rail max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow mb-5">Манифест</div>
          <h2 className="h1">{site.manifesto.title}</h2>
          <p className="mt-8 text-lg md:text-xl text-white/83 leading-relaxed">{site.manifesto.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
