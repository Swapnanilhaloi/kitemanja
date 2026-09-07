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
          eyebrow="Our tents & rooms"
          title="Choose your own tent"
          subtitle="Pre-pitched Dome and Alpine tents with breakfast and dinner, plus family-run guesthouses and hotels for selected dates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accommodations.map((acc, i) => (
            <motion.article
              key={acc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="overflow-hidden rounded-[24px] border border-brand-border bg-brand-cream flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={acc.image}
                  alt={acc.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {acc.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-brand-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    {acc.badge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">{acc.subtitle}</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-brand-ink">{acc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{acc.description}</p>
                {acc.price && (
                  <p className="mt-4 font-display text-xl font-bold text-brand-ink">{acc.price}</p>
                )}
                {acc.priceNote && (
                  <p className="mt-1 text-xs text-brand-muted">{acc.priceNote}</p>
                )}
                {acc.availability && (
                  <p className="mt-3 flex items-center gap-2 text-xs text-brand-muted">
                    <Calendar size={13} className="text-brand-secondary" />
                    {acc.availability}
                  </p>
                )}
                <button
                  onClick={goContact}
                  className="mt-auto pt-5 inline-flex items-center justify-center rounded-full bg-brand-secondary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#7ab536] cursor-pointer self-start"
                >
                  {acc.cta}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
