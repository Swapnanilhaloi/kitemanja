import { formatRs } from '@/data/trip'
import type { Trip } from './tripContext'

export interface Quote {
  /** The price line, or a prompt when there is not enough to price yet. */
  main: string
  sub: string
  /** True when `main` is a real published figure. */
  priced: boolean
}

export function quote(trip: Trip): Quote {
  const { stay, route, table, row } = trip

  if (route?.id === 'stay' && stay) {
    return stay.nightly
      ? { main: stay.nightly.price, sub: stay.nightly.note, priced: true }
      : { main: 'Price on request', sub: `${stay.name} rates are quoted per stay`, priced: false }
  }
  if (table && row) {
    return {
      main: formatRs(row.perPerson),
      sub: `per person, ${formatRs(row.perPerson * row.pax)} for ${row.pax} with ${row.vehicle}`,
      priced: true,
    }
  }
  if (table) {
    const lowest = Math.min(...table.rows.map(r => r.perPerson))
    return { main: `From ${formatRs(lowest)}`, sub: 'per person, depends on group size', priced: true }
  }
  if (!stay && !route) return { main: 'Choose a stay', sub: 'and a route to see your price', priced: false }
  if (!stay) return { main: 'Choose a stay', sub: 'to see your price', priced: false }
  return { main: 'Choose a route', sub: 'to see your price', priced: false }
}

export function groupLabel(trip: Trip) {
  if (trip.row) return `${trip.row.pax} people, ${trip.row.vehicle}`
  return null
}

/** The trip as plain lines, for the enquiry email and WhatsApp message. */
export function tripLines(trip: Trip) {
  const q = quote(trip)
  return [
    `Festival: ${trip.festival.name} (${trip.festival.dates}), ${trip.festival.place}`,
    `Stay: ${trip.stay?.name ?? 'Not chosen yet'}`,
    `Route: ${trip.route?.name ?? 'Not chosen yet'}`,
    `Group: ${groupLabel(trip) ?? 'Not chosen yet'}`,
    `Price shown: ${q.priced ? `${q.main} ${q.sub}` : 'Not priced yet'}`,
  ]
}
