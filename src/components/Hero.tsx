import { motion } from 'framer-motion'
import { ArrowRight, ArrowDownRight } from 'lucide-react'
import { BANNER_URL } from '@/data/site'

export function Hero() {
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen pt-[76px] pb-6 px-4 sm:px-6 lg:px-8" aria-label="Hero">
      <div className="relative mx-auto h-[calc(100vh-100px)] min-h-[560px] max-w-[1400px] overflow-hidden rounded-[28px] sm:rounded-[36px]">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
          src={BANNER_URL}
          alt="Friends gathered at a mountain campsite beneath a soft evening sky"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 sm:px-10 lg:px-16 lg:pb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
            >
              <span className="h-px w-8 bg-brand-gold" />
              Northeast India · Since 2013
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Go where the
              <br />
              <span className="text-brand-accent">good stories live.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg"
            >
              Festival camps, village trails, and the kind of stays that turn a trip into a shared memory. Come a little closer to Northeast India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <button
                onClick={() => go('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#0b67a8] transition-colors cursor-pointer"
              >
                Plan your escape <ArrowRight size={15} />
              </button>
              <button
                onClick={() => go('experiences')}
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white hover:text-white/80 transition-colors cursor-pointer"
              >
                See the trails <ArrowDownRight size={15} />
              </button>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 max-w-xs self-end text-right text-sm text-white/80"
          >
            <span className="font-semibold text-white">Not just a campsite</span>
            <br />
            A softer way to see a wild, generous corner of India.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
