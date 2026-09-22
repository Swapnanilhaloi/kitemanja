import { MapPin } from 'lucide-react'
import { useEffect, useRef, useState, type RefObject } from 'react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useTrip } from '@/state/useTrip'

export function Route() {
  const ref = useRef<HTMLElement>(null)
  useScrollProgress(ref, 'through')
  const trip = useTrip()
  // Preview the 3-night route until the visitor picks one.
  const shown = trip.route ?? trip.routes[1]
  const reached = useReachedStops(ref, shown.days.length)

  return (
    <section id="route" ref={ref} className="ground-navy grain chapter" data-sc-act="draw" aria-labelledby="route-title">
      <div className="wrap relative z-[8]">
        <h2 id="route-title" className="title">How long you are staying</h2>

        <div role="radiogroup" aria-labelledby="route-title" className="mt-8 flex flex-wrap gap-2">
          {trip.routes.map(r => (
            <label
              key={r.id}
              className="choice chip"
              style={trip.route?.id === r.id
                ? { background: 'var(--sky-light)', color: 'var(--navy)', boxShadow: 'none' }
                : { background: 'transparent', color: 'var(--cream)', boxShadow: 'inset 0 0 0 1px var(--line-on-navy)' }}
            >
              <input type="radio" name="route" value={r.id} checked={trip.route?.id === r.id} onChange={() => trip.setRoute(r.id)} />
              {r.name}
            </label>
          ))}
        </div>

        <p className="lede soft mt-6">
          {!trip.route && <span className="accent font-semibold">Showing the 3-night trip. </span>}
          {shown.summary}
        </p>

        {shown.days.length > 0 && (
          <div className="route__days">
            <span className="route__track" aria-hidden="true" />
            <span className="route__line" aria-hidden="true" />
            <ol className="m-0 list-none p-0" aria-label={`${shown.name}, day by day`}>
            {shown.days.map((d, i) => (
              <li key={d.day} className="route__day" data-reached={i < reached}>
                <span className="route__stop num" aria-hidden="true">{d.day}</span>
                <p className="display text-[1.35rem]" style={{ lineHeight: 1.2 }}>
                  <span className="sr-only">Day {d.day}: </span>{d.title}
                </p>
                <p className="label accent mt-1.5">{d.place}</p>
                <p className="soft mt-2 max-w-[52ch]">{d.detail}</p>
              </li>
            ))}
            </ol>
          </div>
        )}

        <a
          href={trip.festival.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 font-semibold underline"
          style={{ color: 'var(--sky-light)' }}
        >
          <MapPin size={16} aria-hidden="true" /> {trip.festival.region} on Google Maps
        </a>
      </div>
    </section>
  )
}

/**
 * How many stops the drawn line has passed. Mirrors the CSS `--draw` curve
 * on .route__line so a stop lights exactly when the line reaches it.
 */
function useReachedStops(ref: RefObject<HTMLElement | null>, count: number) {
  const [reached, setReached] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const tick = () => {
      frame = 0
      const p = parseFloat(el.style.getPropertyValue('--p') || '0')
      const draw = Math.min(1, Math.max(0, (p - 0.18) * 2.1))
      const n = count <= 1 ? count : Math.floor(draw * (count - 1) + 0.001) + 1
      setReached(draw <= 0 ? 0 : Math.min(count, n))
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(tick) }
    tick()
    window.addEventListener('scroll', schedule, { passive: true })
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule) }
  }, [ref, count])
  return reached
}
