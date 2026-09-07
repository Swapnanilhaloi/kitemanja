import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/data/experiences'

export function ExperiencesSection() {
  const goContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="experiences" className="py-20 lg:py-28 bg-brand-cream">
      <Container>
        <SectionHeading
          eyebrow="Ways to wander"
          title="Pick a place. We’ll help you find the feeling."
          subtitle="Small groups, local hosts, and room in the day for the unexpected."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group overflow-hidden rounded-[24px] bg-brand-paper border border-brand-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-ink">
                  {exp.location}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-brand-ink">{exp.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{exp.description}</p>
                <button
                  onClick={goContact}
                  className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-primary hover:text-[#0b67a8] cursor-pointer"
                >
                  Ask about this trip <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
