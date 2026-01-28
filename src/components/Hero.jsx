import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="hero" style={{ position: 'relative' }}>
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="hero-content"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 20px rgba(219, 39, 119, 0.5))" }}
          >
            <Heart size={80} className="text-accent" fill="var(--color-accent)" strokeWidth={0} />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Amore Mio
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Scusami...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          So che è stato un momento difficile, ma il mio amore per te supera ogni cosa.
          Voglio vederti sorridere di nuovo, perché il tuo sorriso è la mia luce.
        </motion.p>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        style={{ opacity: opacityText }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>Scorri per una sorpresa</span>
        <Heart size={20} fill="currentColor" />
      </motion.div>
    </section>
  );
}
