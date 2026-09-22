import { stays, type StayId } from '@/data/trip'
import { useTrip } from '@/state/useTrip'
import { useState } from 'react'

export function Stays() {
  const trip = useTrip()
  // The preview follows the pointer or focus before a choice, then the choice.
  const [looking, setLooking] = useState<StayId | null>(null)
  const shown = stays.find(s => s.id === (looking ?? trip.stay?.id)) ?? stays[0]

  return (
    <section id="stay" className="ground-white chapter" data-sc-act="catalog" aria-labelledby="stay-title">
      <div className="wrap">
        <h2 id="stay-title" className="title">Where you sleep</h2>
        <p className="lede soft mt-4">
          Two tents inside the venue, or a room nearby. Tent prices are per night; rooms are priced with a trip.
        </p>

        <div className="stays mt-10">
          <div role="radiogroup" aria-labelledby="stay-title" onMouseLeave={() => setLooking(null)}>
            {stays.map(s => (
              <label
                key={s.id}
                className="choice stay"
                onMouseEnter={() => setLooking(s.id)}
              >
                <input
                  type="radio"
                  name="stay"
                  value={s.id}
                  checked={trip.stay?.id === s.id}
                  onChange={() => trip.setStay(s.id)}
                  onFocus={() => setLooking(s.id)}
                  onBlur={() => setLooking(null)}
                />
                <span className="stay__dot" aria-hidden="true" />
                <span>
                  <span className="display block text-[1.5rem]" style={{ lineHeight: 1.15 }}>{s.name}</span>
                  <span className="label soft mt-1 block">{s.kind} · {s.sleeps}</span>
                </span>
                <span className="num text-right">
                  {s.nightly
                    ? <><span className="block font-bold">{s.nightly.price}</span><span className="soft block text-xs">a night</span></>
                    : <span className="soft block text-sm">With a trip</span>}
                </span>
                <span className="soft col-start-2 col-end-4 mt-1 text-[0.95rem]">{s.summary(trip.festival)}</span>
                {trip.stay?.id === s.id && (
                  <span className="stay__inline" aria-hidden="true">
                    <img src={s.image} alt="" loading="lazy" />
                  </span>
                )}
              </label>
            ))}
          </div>

          <aside className="stays__preview" aria-live="polite">
            <figure>
              <img key={shown.image} data-swap src={shown.image} alt={shown.imageAlt} loading="lazy" />
            </figure>
            <p className="display mt-5 text-2xl">{shown.name}</p>
            <ul className="mt-3 space-y-1.5">
              {shown.facts.map(f => <li key={f} className="soft">{f}</li>)}
            </ul>
            {shown.nightly && (
              <p className="mt-4 num"><strong>{shown.nightly.price}</strong> <span className="soft">{shown.nightly.note}</span></p>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
