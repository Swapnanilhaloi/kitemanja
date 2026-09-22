import type { ReactNode } from 'react'
import { festivalOrder, festivals } from '@/data/festivals'
import type { FestivalId } from '@/data/festivals/types'
import { stays, type RouteId, type StayId } from '@/data/trip'
import { jumpTo } from '@/hooks/useInView'
import { quote } from '@/state/quote'
import { useSlots, type Slot } from '@/state/useSlots'
import { useTrip } from '@/state/useTrip'

/** The rail version: each slot is a jump to its chapter. */
export function TicketCard({ active }: { active: string | null }) {
  const trip = useTrip()
  const slots = useSlots()
  const q = quote(trip)

  return (
    <div className="ticket">
      <div className="ticket__head">
        <p className="label" style={{ color: 'var(--sky-light)' }}>Your trip</p>
      </div>
      <ul className="ticket__slots">
        {slots.map(s => (
          <li key={s.id}>
            <button
              type="button"
              className="ticket__slot"
              aria-current={active === s.id ? 'true' : undefined}
              onClick={() => jumpTo(s.id)}
            >
              <span>
                <span className="label block" style={{ color: 'var(--soft-on-navy)', fontSize: '0.64rem' }}>{s.label}</span>
                <span className="ticket__value" data-empty={!s.value}>{s.value ?? (s.detail ?? 'Choose')}</span>
                {s.value && s.detail && <span className="block text-xs" style={{ color: 'var(--soft-on-navy)' }}>{s.detail}</span>}
              </span>
              <span className="ticket__punch" data-punched={!!s.value} aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
      <div className="ticket__tear" aria-hidden="true" />
      <div className="ticket__price" aria-live="polite">
        <p className="ticket__amount num" data-priced={q.priced}>{q.main}</p>
        <p className="mt-0.5 text-xs leading-snug" style={{ color: 'var(--soft-on-navy)' }}>{q.sub}</p>
        <a
          href="#ticket"
          onClick={e => { e.preventDefault(); jumpTo('ticket') }}
          className="btn mt-4 w-full"
        >
          Check availability
        </a>
      </div>
    </div>
  )
}

/** The docked version: the same ticket, every slot editable in place. */
export function TicketEditor() {
  const trip = useTrip()
  const q = quote(trip)
  const slots = useSlots()
  const filled = (id: Slot['id']) => !!slots.find(s => s.id === id)?.value

  return (
    <div className="ticket" style={{ ['--notch-bg' as string]: 'var(--cream)' }}>
      <div className="ticket__head flex items-center justify-between gap-3">
        <p className="label" style={{ color: 'var(--sky-light)' }}>Your trip</p>
        <img src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
      </div>
      <div className="space-y-4 px-[1.1rem] py-4">
        <SlotField id="t-festival" label="Festival" punched={filled('festival')}>
          <select id="t-festival" value={trip.festivalId} onChange={e => trip.setFestival(e.target.value as FestivalId)}>
            {festivalOrder.map(id => <option key={id} value={id}>{festivals[id].name}, {festivals[id].dates}</option>)}
          </select>
        </SlotField>
        <SlotField id="t-stay" label="Stay" punched={filled('stay')}>
          <select id="t-stay" value={trip.stay?.id ?? ''} onChange={e => trip.setStay(e.target.value as StayId)}>
            {!trip.stay && <option value="" disabled>Choose a stay</option>}
            {stays.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </SlotField>
        <SlotField id="t-route" label="Route" punched={filled('route')}>
          <select id="t-route" value={trip.route?.id ?? ''} onChange={e => trip.setRoute(e.target.value as RouteId)}>
            {!trip.route && <option value="" disabled>Choose a route</option>}
            {trip.routes.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
          </select>
        </SlotField>
        <SlotField id="t-group" label="Group" punched={filled('group')}>
          {trip.table ? (
            <select id="t-group" value={trip.row?.key ?? ''} onChange={e => trip.setRow(e.target.value)}>
              {!trip.row && <option value="" disabled>Choose group size</option>}
              {trip.table.rows.map(r => <option key={r.key} value={r.key}>{r.pax} people, {r.vehicle}</option>)}
            </select>
          ) : (
            <p id="t-group" className="text-sm" style={{ color: 'var(--soft-on-navy)' }}>
              {trip.route?.id === 'stay' ? 'Tell us how many in the note' : 'Choose a stay and route first'}
            </p>
          )}
        </SlotField>
      </div>
      <div className="ticket__tear" aria-hidden="true" />
      <div className="ticket__price" aria-live="polite">
        <p className="ticket__amount num" data-priced={q.priced}>{q.main}</p>
        <p className="mt-0.5 text-sm" style={{ color: 'var(--soft-on-navy)' }}>{q.sub}</p>
      </div>
    </div>
  )
}

function SlotField({ id, label, punched, children }: { id: string; label: string; punched: boolean; children: ReactNode }) {
  return (
    <div className="field">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="label" style={{ color: 'var(--soft-on-navy)', fontSize: '0.64rem' }}>{label}</label>
        <span className="ticket__punch" data-punched={punched} aria-hidden="true" />
      </div>
      {children}
    </div>
  )
}
