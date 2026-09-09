import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import {
  ABOUT_IMAGE_URL,
  CAMP_OPENS,
  FESTIVAL_DATES,
  FESTIVAL_HIGHLIGHTS,
  FESTIVAL_INTRO,
  FESTIVAL_NAME,
  FESTIVAL_PLACE,
  FESTIVAL_REGION,
  FESTIVAL_STAY_COPY,
  FESTIVAL_TAGLINE,
} from '@/data/site'

const facts = [
  { value: 'Camp', label: `Kite Manja at ${FESTIVAL_REGION}` },
  { value: FESTIVAL_DATES, label: `${FESTIVAL_NAME}, ${FESTIVAL_PLACE}` },
  { value: CAMP_OPENS, label: 'camp opens for the inaugural' },
]

export function IntroSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-6 relative overflow-hidden rounded-[28px] aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]"
          >
            <img
              src={ABOUT_IMAGE_URL}
              alt={`Hills around ${FESTIVAL_PLACE}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-white font-display text-xl font-bold">
              {FESTIVAL_NAME}
            </p>
          </motion.div>

          <div className="lg:col-span-6">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary">
              {FESTIVAL_NAME}
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              {FESTIVAL_TAGLINE}
            </h2>
            <p className="mt-6 text-brand-muted leading-relaxed">
              {FESTIVAL_INTRO}
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              {FESTIVAL_STAY_COPY}
            </p>
            <p className="mt-4 font-semibold text-brand-muted leading-relaxed">
              {FESTIVAL_HIGHLIGHTS}
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-brand-border pt-8">
              {facts.map(stat => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-brand-ink">{stat.value}</p>
                  <p className="mt-1 text-xs text-brand-muted leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
