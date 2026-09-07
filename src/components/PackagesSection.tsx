import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { packages } from '@/data/itinerary'
import { cn } from '@/lib/utils'

export function PackagesSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="packages" className="py-20 lg:py-28 bg-white">
      <Container>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary mb-3">
          Package tours
        </p>
        <SectionHeading
          title="A route with room for the real moments."
          subtitle="The original Kitemanja packages pair transfers, stays, festival time, village visits, and the long way home."
        />

        <div className="flex gap-2 mt-2 flex-wrap">
          {packages.map((pkg, i) => (
            <button
              key={pkg.id}
              onClick={() => setActiveTab(i)}
              className={cn(
                'rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 border cursor-pointer',
                activeTab === i
                  ? 'bg-brand-primary text-white border-brand-primary'
                  : 'border-brand-border text-brand-muted hover:border-brand-primary hover:text-brand-primary bg-white'
              )}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {packages.map((pkg, i) =>
            activeTab === i ? (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-10 rounded-[24px] border border-brand-border bg-brand-cream p-6 sm:p-8"
              >
                <p className="text-sm text-brand-muted">{pkg.route}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-brand-ink">{pkg.name}</h3>
                <p className="mt-3 text-sm text-brand-muted leading-relaxed max-w-2xl">{pkg.description}</p>

                <ol className="mt-8 space-y-4">
                  {pkg.itinerary.map(item => (
                    <li key={item.day} className="flex gap-4">
                      <span className="font-display text-sm font-bold text-brand-primary w-6 shrink-0">
                        {item.day}.
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-brand-ink">{item.title}</p>
                        <p className="text-xs text-brand-muted mt-0.5">{item.location}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="mt-8 text-xs text-brand-muted">
                  Rates are indicative starting points from the published Kitemanja itinerary. Final cost varies by pax, vehicle, dates, and availability.
                </p>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-primary cursor-pointer"
                >
                  Ask for exact dates
                </button>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
