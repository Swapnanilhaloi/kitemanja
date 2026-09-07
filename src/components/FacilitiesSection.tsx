import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  Tent, Bed, Droplets, Sofa, Zap, UtensilsCrossed, Bath, Flame,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { facilities } from '@/data/facilities'

const iconMap: Record<string, ReactNode> = {
  tent:     <Tent size={22} />,
  pillow:   <Bed size={22} />,
  droplets: <Droplets size={22} />,
  sofa:     <Sofa size={22} />,
  zap:      <Zap size={22} />,
  utensils: <UtensilsCrossed size={22} />,
  bath:     <Bath size={22} />,
  flame:    <Flame size={22} />,
}

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-brand-cream">
      <Container>
        <SectionHeading
          eyebrow="Our facilities"
          title="Why choose us"
          subtitle="Comfort in the middle of the festival — without making camp feel like a hotel."
          align="center"
        />

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((fac, i) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl bg-white border border-brand-border p-6"
            >
              <div className="text-brand-primary mb-4">
                {iconMap[fac.icon] ?? <Tent size={22} />}
              </div>
              <h3 className="text-sm font-semibold text-brand-ink mb-1.5">{fac.title}</h3>
              <p className="text-xs text-brand-muted leading-relaxed">{fac.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
