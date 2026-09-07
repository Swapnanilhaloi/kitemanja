import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { accommodations } from '@/data/accommodations'

export function AccommodationSection() {
  const goContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="stay" className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Stay a little longer"
          title="Choose your tent. Follow the trail."
          subtitle="Website package rates shown as a starting point. Tell us your group size and we’ll shape the right route."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accommodations.map((acc, i) => (
            <motion.article
              key={acc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="overflow-hidden rounded-[24px] border border-brand-border bg-brand-cream"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={acc.image}
                  alt={acc.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {acc.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-brand-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    {acc.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-brand-ink">{acc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{acc.description}</p>
                {acc.price && (
                  <p className="mt-4 font-display text-xl font-bold text-brand-primary">{acc.price}</p>
                )}
                {acc.priceNote && (
                  <p className="mt-1 text-xs text-brand-muted">{acc.priceNote}</p>
                )}
                {acc.availability && (
                  <p className="mt-3 flex items-center gap-2 text-xs text-brand-muted">
                    <Calendar size={13} className="text-brand-primary" />
                    {acc.availability}
                  </p>
                )}
                <button
                  onClick={goContact}
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#0b67a8] cursor-pointer"
                >
                  Ask about this trip
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
