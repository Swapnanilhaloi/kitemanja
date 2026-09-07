import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ABOUT_IMAGE_URL, CAMP_OPENS, FESTIVAL_DATES } from '@/data/site'

const facts = [
  { value: '10th', label: 'edition of our Kisama camp' },
  { value: FESTIVAL_DATES, label: 'Hornbill Festival, Kohima' },
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
              alt="Hills around Kisama Heritage Village, Kohima"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-white font-display text-xl font-bold">
              Camp inside the Hornbill Festival
            </p>
          </motion.div>

          <div className="lg:col-span-6">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary">
              What’s on your plate
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              The biggest festival of the Northeast — from inside the venue.
            </h2>
            <p className="mt-6 text-brand-muted leading-relaxed">
              If Hornbill is on your list — or you have been here before — join Camp Kite Manja at Kisama Heritage Village. We make sure you arrive a day early to attend the inaugural ceremony.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Cultural heritage, village tours, local cuisines, adventures and festive fervour. Stay in pre-pitched tents on site, or in family-run guesthouses and boutique hotels.
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
