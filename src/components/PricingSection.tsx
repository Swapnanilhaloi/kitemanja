import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Info } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { pricingSections } from '@/data/pricing'
import { cn } from '@/lib/utils'

function PricingTable({ table }: { table: (typeof pricingSections)[number]['tables'][number] }) {
  return (
    <div className="mt-4">
      <div className="hidden sm:block overflow-x-auto rounded-2xl border border-brand-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-ink text-white">
              <th className="text-left px-5 py-3 font-semibold text-[11px] uppercase tracking-wider">Guests</th>
              <th className="text-left px-5 py-3 font-semibold text-[11px] uppercase tracking-wider">Vehicle</th>
              <th className="text-right px-5 py-3 font-semibold text-[11px] uppercase tracking-wider">{table.col1Header}</th>
              <th className="text-right px-5 py-3 font-semibold text-[11px] uppercase tracking-wider">{table.col2Header}</th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  'border-t border-brand-border',
                  i % 2 === 0 ? 'bg-white' : 'bg-brand-cream/70'
                )}
              >
                <td className="px-5 py-3.5 font-semibold text-brand-ink whitespace-nowrap">{row.pax}</td>
                <td className="px-5 py-3.5 text-brand-muted whitespace-nowrap">{row.vehicle}</td>
                <td className="px-5 py-3.5 text-right font-semibold text-brand-ink whitespace-nowrap">{row.col1}</td>
                <td className="px-5 py-3.5 text-right font-semibold text-brand-primary whitespace-nowrap">{row.col2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sm:hidden space-y-3">
        {table.rows.map((row, i) => (
          <div key={i} className="rounded-2xl border border-brand-border bg-white p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-brand-ink text-sm">{row.pax}</span>
              <span className="text-xs text-brand-muted bg-brand-cream rounded-full px-3 py-1">{row.vehicle}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-brand-cream p-3">
                <p className="text-xs text-brand-muted mb-1">{table.col1Header}</p>
                <p className="font-bold text-brand-ink text-sm">{row.col1}</p>
              </div>
              <div className="rounded-xl bg-brand-primary/10 p-3">
                <p className="text-xs text-brand-muted mb-1">{table.col2Header}</p>
                <p className="font-bold text-brand-primary text-sm">{row.col2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {table.notes && table.notes.length > 0 && (
        <div className="mt-4 rounded-2xl border border-brand-border bg-white p-4 space-y-1.5">
          {table.notes.map(note => (
            <div key={note} className="flex items-start gap-2 text-xs text-brand-muted">
              <Info size={12} className="text-brand-primary flex-shrink-0 mt-0.5" />
              <span>{note}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function PricingSectionAccordion({
  section,
  defaultOpen = false,
}: {
  section: (typeof pricingSections)[number]
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-brand-border rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-brand-cream/60"
      >
        <div>
          <p className="font-display font-bold text-lg text-brand-ink">{section.packageName}</p>
          <p className="text-xs mt-0.5 text-brand-muted">{section.packageDuration}</p>
        </div>
        <ChevronDown
          size={18}
          className={cn('flex-shrink-0 text-brand-muted transition-transform duration-300', open && 'rotate-180')}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-2 border-t border-brand-border space-y-8">
              {section.tables.map(table => (
                <div key={table.id}>
                  <p className="font-semibold text-sm text-brand-ink mb-0.5">{table.title}</p>
                  <p className="text-xs text-brand-muted mb-3">{table.subtitle} — per person</p>
                  <PricingTable table={table} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-brand-cream">
      <Container>
        <SectionHeading
          eyebrow="Skeleton itinerary"
          title="Package rates"
          subtitle="Per-person prices from KiteManja, including transfers. Confirm current-season availability before you travel. Contact us to book."
        />

        <div className="mt-2 space-y-3">
          {pricingSections.map((section, i) => (
            <PricingSectionAccordion key={section.id} section={section} defaultOpen={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  )
}
