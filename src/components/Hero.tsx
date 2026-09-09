import { motion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'
import { HERO_URL, FESTIVAL_DATES, FESTIVAL_NAME, FESTIVAL_PLACE } from '@/data/site'

export function Hero() {
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-dvh overflow-hidden" aria-label="Hero">
      <motion.img
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        src={HERO_URL}
        alt={`Camp Kite Manja at ${FESTIVAL_NAME} in ${FESTIVAL_PLACE}`}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[#0a1628]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/45 via-[#0a1628]/40 to-[#0a1628]/75" />

      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-5 pt-24 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7ec8ef] sm:text-xs"
        >
          {FESTIVAL_PLACE}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-sm text-white/85 sm:text-lg"
        >
          Join the grand celebration of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 font-serif text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {FESTIVAL_NAME}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-4 font-serif text-3xl font-bold sm:text-5xl"
        >
          <span className="text-[#6bb8e8]">Kite</span>
          <span className="text-brand-secondary">Manja</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-5 max-w-xl text-sm text-white/90 sm:text-lg"
        >
          Camp inside the venue. Live the culture. {FESTIVAL_DATES} in {FESTIVAL_PLACE}.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-5 flex items-center gap-2 text-sm text-white/90"
        >
          <MapPin size={16} className="text-[#6bb8e8]" />
          Exclusive campsite in {FESTIVAL_PLACE}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <button
            onClick={() => go('festival')}
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-brand-accent cursor-pointer"
          >
            Let’s Explore
          </button>
          <button
            onClick={() => go('stay')}
            className="inline-flex items-center justify-center rounded-full border border-white/80 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer"
          >
            Book Your Stay
          </button>
        </motion.div>
      </div>

      <button
        onClick={() => go('about')}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80 hover:text-white cursor-pointer"
        aria-label="Scroll to next section"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex"
        >
          <ChevronDown size={28} strokeWidth={1.75} />
        </motion.span>
      </button>
    </section>
  )
}
