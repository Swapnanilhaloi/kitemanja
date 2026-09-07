import { motion } from 'framer-motion'
import { Compass } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { ABOUT_IMAGE_URL } from '@/data/site'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export function IntroSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-[28px] aspect-[16/9] sm:aspect-[21/9]"
        >
          <img
            src={ABOUT_IMAGE_URL}
            alt="A quiet mountain trail through green forest"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
            <div className="flex items-center gap-3 rounded-full bg-black/55 px-4 py-2.5 backdrop-blur-md text-white">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  Our coordinates
                </p>
                <p className="mt-0.5 text-sm font-semibold">Assam · Nagaland · Arunachal</p>
              </div>
              <Compass size={18} className="text-brand-accent ml-2" />
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="lg:col-span-7"
          >
            <motion.p variants={fadeUp} className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary">
              The Kitemanja way
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              More time around the fire. Less time in the itinerary.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-brand-muted leading-relaxed">
              We started Kitemanja because the Northeast deserved to be experienced slowly — through its festivals, food, forests, and the people who call these hills home.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-brand-muted leading-relaxed">
              From the first cup of tea at basecamp to the last song by the fire, we make the details feel easy and the moments feel entirely yours. Our Hornbill Festival camp sits inside Kisama Heritage Village — so you arrive a day early for the inaugural ceremony and never miss the story unfolding next door.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="grid grid-cols-3 gap-6 border-t border-brand-border pt-8">
              {[
                { value: '12k+', label: 'happy campers' },
                { value: '25+', label: 'partner villages' },
                { value: '100%', label: 'low-impact stays' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-brand-ink">{stat.value}</p>
                  <p className="mt-1 text-xs text-brand-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm italic text-brand-muted">
              Come as strangers. Leave with a few more people in your phone.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
