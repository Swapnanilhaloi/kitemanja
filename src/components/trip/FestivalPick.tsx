import { Check } from 'lucide-react'
import { useRef } from 'react'
import { festivalOrder, festivals } from '@/data/festivals'
import { useInView } from '@/hooks/useInView'
import { useTrip } from '@/state/useTrip'

export function FestivalPick() {
  const ref = useRef<HTMLDivElement>(null)
  const seen = useInView(ref, 0)
  const { festivalId, setFestival } = useTrip()

  return (
    <section id="festival" className="ground-navy grain chapter" data-sc-act="reveal" aria-labelledby="festival-title">
      <div className="wrap relative z-[8]">
        <h2 id="festival-title" className="title max-w-[16ch]">Which festival are you going to?</h2>
        <p className="lede soft mt-4">Pick one. Dates, places and your ticket follow your choice.</p>

        <div ref={ref} data-seen={seen} role="radiogroup" aria-labelledby="festival-title" className="pick mt-10">
          {festivalOrder.map(id => {
            const f = festivals[id]
            return (
              <label key={id} className="choice pick__option">
                <input
                  type="radio"
                  name="festival"
                  value={id}
                  checked={festivalId === id}
                  onChange={() => setFestival(id)}
                />
                <div className="pick__media">
                  <img src={f.card.src} alt={f.card.alt} style={{ objectPosition: f.card.position }} loading="lazy" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <p className="display text-[clamp(1.6rem,2.6vw,2.2rem)]">{f.name}</p>
                    <span className="pick__mark label accent mt-2 shrink-0">
                      <Check size={14} strokeWidth={3} aria-hidden="true" /> Selected
                    </span>
                  </div>
                  <p className="mt-2 num text-lg font-semibold accent">{f.dates}</p>
                  <p className="soft mt-1">{f.place}</p>
                  <p className="soft mt-3 text-sm">Camp opens {f.campOpens}.</p>
                </div>
              </label>
            )
          })}
        </div>
      </div>
    </section>
  )
}
