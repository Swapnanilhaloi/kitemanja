import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/data/experiences'

export function ExperiencesSection() {
  return (
    <section id="experiences" className="py-20 lg:py-28 bg-brand-cream">
      <Container>
        <SectionHeading
          eyebrow="What’s in your plate"
          title="Heritage, villages, food, and the festival."
          subtitle="A blend of cultural heritage, village tours, local cuisines, adventures and festive fervour — as listed on KiteManja."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group overflow-hidden rounded-[24px] bg-white border border-brand-border"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                  {exp.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-brand-primary font-medium">{exp.location}</p>
                <h3 className="mt-1 font-display text-2xl font-bold text-brand-ink">{exp.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{exp.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
