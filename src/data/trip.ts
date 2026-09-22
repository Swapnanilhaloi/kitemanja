import campTent from '@/assets/site/camp-tent.jpg'
import roomGuesthouse from '@/assets/site/room-guesthouse.jpg'
import roomHotel from '@/assets/site/room-hotel.jpg'
import type { FestivalProfile } from './festivals/types'
import { pricingSections } from './pricing'

// ── Stays ──────────────────────────────────────────────────────────────

export type StayId = 'dome' | 'alpine' | 'guesthouse' | 'hotel'

export interface Stay {
  id: StayId
  name: string
  kind: 'Tent' | 'Room'
  sleeps: string
  summary: (f: FestivalProfile) => string
  facts: string[]
  image: string
  imageAlt: string
  /** Stay-only rate. Only the tents publish one. */
  nightly?: { price: string; note: string }
}

export const stays: Stay[] = [
  {
    id: 'dome',
    name: 'Dome tent',
    kind: 'Tent',
    sleeps: '2 guests',
    summary: () => 'Pitched inside the venue before you arrive. Breakfast and dinner included.',
    facts: ['Sleeping bag, blanket, inflatable pillow', 'Breakfast and dinner', 'Common lobby and charging'],
    image: campTent,
    imageAlt: 'An orange tent and a hammock among trees at the Kite Manja camp',
    nightly: { price: 'Rs. 2,356', note: 'per person per night, breakfast and dinner included' },
  },
  {
    id: 'alpine',
    name: 'Alpine tent',
    kind: 'Tent',
    sleeps: '2 to 3 guests',
    summary: () => 'Roomier than the dome, with extra space for you and your bags. Meals included.',
    facts: ['Spacious interior', 'Sleeping bag, blanket, inflatable pillow', 'Breakfast and dinner'],
    image: campTent,
    imageAlt: 'An orange tent and a hammock among trees at the Kite Manja camp',
    nightly: { price: 'Rs. 5,998', note: 'for 2 people, Rs. 8,996 for 3, meals included' },
  },
  {
    id: 'guesthouse',
    name: 'Family guesthouse',
    kind: 'Room',
    sleeps: 'Various room sizes',
    summary: f => `Stay with a local family close to ${f.region}. Home-cooked meals available.`,
    facts: ['Local family hospitality', 'Home-cooked meals available', 'Close to the festival'],
    image: roomGuesthouse,
    imageAlt: 'A guesthouse room with two beds in black and white woven covers and flowers on a side table',
  },
  {
    id: 'hotel',
    name: 'Hotel',
    kind: 'Room',
    sleeps: 'Various room sizes',
    summary: f => `A private room with modern amenities and transfers to the ${f.name} grounds.`,
    facts: ['Private bathroom', 'Modern amenities', 'Festival transfers included'],
    image: roomHotel,
    imageAlt: 'A hotel room with a double bed, armchairs and a desk',
  },
]

export const stayById = (id: StayId) => stays.find(s => s.id === id)!

// ── Routes ─────────────────────────────────────────────────────────────

export type RouteId = 'stay' | '3n' | '5n'

export interface RouteDay {
  day: number
  title: string
  place: string
  detail: string
}

export interface Route {
  id: RouteId
  name: string
  short: string
  summary: string
  days: RouteDay[]
}

export function routesFor(f: FestivalProfile): Route[] {
  return [
    {
      id: 'stay',
      name: 'Just the stay',
      short: 'Stay only',
      summary: 'The nights you need at the nightly rate. Tell us how you are getting there and we will help.',
      days: [],
    },
    {
      id: '3n',
      name: '3 nights, 4 days',
      short: '3 nights',
      summary: `Arrival and departure transfers, a full day at ${f.name}, and a day in the villages around ${f.region}.`,
      days: [
        { day: 1, title: 'Arrive and check in', place: `Your pickup point to ${f.region}`, detail: 'Private transfer from your agreed pickup point, then settle into your tent or room.' },
        { day: 2, title: 'Festival day', place: f.place, detail: `A full day at ${f.name}. Overnight at the camp or your room.` },
        { day: 3, title: 'Villages', place: `${f.region} and local villages`, detail: 'A day out by vehicle to the villages nearby.' },
        { day: 4, title: 'Head home', place: 'Your departure point', detail: 'Check out and a private transfer to your agreed drop point.' },
      ],
    },
    {
      id: '5n',
      name: '5 nights, 6 days',
      short: '5 nights',
      summary: `Everything in the 3-night trip, then two more days on a regional adventure beyond ${f.region}.`,
      days: [
        { day: 1, title: 'Arrive and check in', place: `Your pickup point to ${f.region}`, detail: `Private transfer to ${f.place}, then check in.` },
        { day: 2, title: 'Festival day', place: f.place, detail: `${f.name} all day, overnight in ${f.region}.` },
        { day: 3, title: 'Villages', place: `${f.region} and local villages`, detail: 'A tour of the villages around the festival.' },
        { day: 4, title: 'Regional adventure', place: `Beyond ${f.region}`, detail: 'A long-distance transfer to your chosen regional experience. Hotel nights on this leg.' },
        { day: 5, title: 'Keep exploring', place: 'Regional adventure', detail: 'A second day on the regional leg.' },
        { day: 6, title: 'Head home', place: 'Your departure point', detail: 'Drop at your agreed departure point, or carry on exploring.' },
      ],
    },
  ]
}

// ── Rates ──────────────────────────────────────────────────────────────

export interface RateRow {
  /** Group size and vehicle. The same group carries over to another table only if it is priced there. */
  key: string
  pax: number
  vehicle: string
  perPerson: number
}

export interface RateTable {
  rows: RateRow[]
  notes: string[]
}

/** Which published table and column prices each route and stay. */
const tableSource: Record<'3n' | '5n', Record<StayId, [sectionId: string, column: 'col1' | 'col2']>> = {
  '3n': {
    dome: ['camping-3n4d', 'col1'],
    alpine: ['camping-3n4d', 'col2'],
    guesthouse: ['guesthouse-hotel-3n4d', 'col1'],
    hotel: ['guesthouse-hotel-3n4d', 'col2'],
  },
  '5n': {
    dome: ['camping-kaziranga-5n', 'col1'],
    alpine: ['camping-kaziranga-5n', 'col2'],
    guesthouse: ['all-5nights', 'col1'],
    hotel: ['all-5nights', 'col2'],
  },
}

const rupees = (s: string) => Number(s.replace(/[^\d]/g, ''))

export function rateTable(route: RouteId, stay: StayId): RateTable | null {
  if (route === 'stay') return null
  const [sectionId, column] = tableSource[route][stay]
  const table = pricingSections.find(s => s.id === sectionId)?.tables[0]
  if (!table) return null
  return {
    rows: table.rows.map(r => ({
      key: `${parseInt(r.pax, 10)}|${r.vehicle}`,
      pax: parseInt(r.pax, 10),
      vehicle: r.vehicle,
      perPerson: rupees(r[column]),
    })),
    notes: (table.notes ?? []).map(n => n.replace(/\s*·\s*/g, ', ').replace(/–/g, ' to ')),
  }
}

export const formatRs = (n: number) => `Rs. ${n.toLocaleString('en-IN')}`
