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
        <SectionHeading
          eyebrow="Package tours"
          title="Skeleton itineraries"
          subtitle="Two routes from the KiteManja site: 3 nights / 4 days in Nagaland, or 5 nights / 6 days continuing to Kaziranga and Guwahati. Contact us for more details."
        />

        <div className="flex gap-2 mt-2 flex-wrap">
          {packages.map((pkg, i) => (
            <button
              key={pkg.id}
              onClick={() => setActiveTab(i)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 border cursor-pointer',
                activeTab === i
                  ? 'bg-brand-secondary text-white border-brand-secondary'
                  : 'border-brand-border text-brand-muted hover:border-brand-secondary hover:text-brand-ink bg-white'
              )}
            >
              {pkg.duration} · {pkg.name.replace(' Tour', '')}
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
                <p className="text-sm text-brand-primary font-medium">{pkg.route}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-brand-ink">{pkg.name}</h3>
                <p className="mt-3 text-sm text-brand-muted leading-relaxed max-w-2xl">{pkg.description}</p>

                <ol className="mt-8 space-y-5">
                  {pkg.itinerary.map(item => (
                    <li key={item.day} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-sm font-bold text-white">
                        {item.day}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-brand-ink">{item.title}</p>
                        <p className="text-xs text-brand-muted mt-0.5">{item.location}</p>
                        <ul className="mt-2 space-y-1">
                          {item.activities.map(act => (
                            <li key={act} className="text-sm text-brand-muted">{act}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="mt-8 text-xs text-brand-muted">
                  Package rates vary by group size, vehicle, and stay type. See the skeleton itinerary tables below.
                </p>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-4 rounded-full bg-brand-secondary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#7ab536] cursor-pointer"
                >
                  View skeleton itinerary rates
                </button>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
