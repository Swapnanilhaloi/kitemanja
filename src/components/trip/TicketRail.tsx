import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { jumpTo, useActiveChapter } from '@/hooks/useInView'
import { quote } from '@/state/quote'
import { useSlots } from '@/state/useSlots'
import { useTrip } from '@/state/useTrip'
import { TicketCard } from './TicketCard'

type RailState = 'hidden' | 'shown' | 'docked'

/**
 * The ticket is issued once the hero is behind you, rides along the page edge
 * as the navigation, and docks into the enquiry at the end.
 */
function useRailState(): RailState {
  const [state, setState] = useState<RailState>('hidden')
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      const hero = document.getElementById('top')?.getBoundingClientRect()
      const dock = document.getElementById('ticket')?.getBoundingClientRect()
      if (dock && dock.top < vh * 0.6) setState('docked')
      else if (hero && hero.bottom > vh * 0.5) setState('hidden')
      else setState('shown')
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])
  return state
}

const chapterIds = ['festival', 'stay', 'route', 'group']

export function TicketRail() {
  const state = useRailState()
  const active = useActiveChapter(chapterIds)

  return (
    <>
      <aside className="rail" data-state={state} aria-label="Your trip" inert={state !== 'shown'}>
        <TicketCard active={active} />
      </aside>
      <TicketBar state={state} />
    </>
  )
}

/** Below 1280px: the same ticket as a bottom bar that opens into its slots. */
function TicketBar({ state }: { state: RailState }) {
  const trip = useTrip()
  const slots = useSlots()
  const q = quote(trip)
  const [open, setOpen] = useState(false)
  const shown = state === 'shown'
  // Short festival name ("Ziro", "Hornbill") so the stay and route still fit on a phone.
  const summary = slots
    .map(s => (s.id === 'festival' ? trip.festival.name.split(' ')[0] : s.value))
    .filter(Boolean)
    .join(' · ')

  return (
    <div className="railbar" data-state={shown ? 'shown' : 'hidden'} inert={!shown}>
      {open && shown && (
        <ul id="railbar-sheet" className="railbar__sheet list-none p-0">
          {slots.map(s => (
            <li key={s.id}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-2 text-left"
                onClick={() => { setOpen(false); jumpTo(s.id) }}
              >
                <span>
                  <span className="label block" style={{ color: 'var(--soft-on-navy)', fontSize: '0.64rem' }}>{s.label}</span>
                  <span className="ticket__value" data-empty={!s.value}>{s.value ?? s.detail ?? 'Choose'}</span>
                </span>
                <span className="ticket__punch" data-punched={!!s.value} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex min-h-11 min-w-0 flex-1 items-center gap-2 text-left"
          aria-expanded={open}
          aria-controls="railbar-sheet"
          onClick={() => setOpen(o => !o)}
        >
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold">{summary}</span>
            <span className="block truncate text-xs num" style={{ color: q.priced ? 'var(--lime)' : 'var(--soft-on-navy)' }}>
              {q.main}{q.priced && trip.row ? ' per person' : ''}
            </span>
          </span>
          <ChevronUp size={18} aria-hidden="true" style={{ transform: open ? 'none' : 'rotate(180deg)', transition: 'transform 200ms' }} />
          <span className="sr-only">{open ? 'Hide' : 'Show'} your trip</span>
        </button>
        <a
          href="#ticket"
          onClick={e => { e.preventDefault(); setOpen(false); jumpTo('ticket') }}
          className="btn"
          style={{ minHeight: '2.75rem', padding: '0.6rem 1rem', fontSize: '0.88rem' }}
        >
          Check availability
        </a>
      </div>
    </div>
  )
}
