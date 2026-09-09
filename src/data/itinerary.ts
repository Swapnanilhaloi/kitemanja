import { FESTIVAL_NAME, FESTIVAL_PLACE, FESTIVAL_REGION } from './site'

export interface ItineraryDay {
  day: number
  title: string
  location: string
  activities: string[]
  transport?: string
}

export interface PackageItinerary {
  id: string
  name: string
  duration: string
  nights: number
  days: number
  route: string
  description: string
  highlights: string[]
  itinerary: ItineraryDay[]
}

export const packages: PackageItinerary[] = [
  {
    id: '3n4d',
    name: '3 Nights / 4 Days Tour',
    duration: '3N/4D',
    nights: 3,
    days: 4,
    route: `Arrival → ${FESTIVAL_REGION} → local villages → Departure`,
    description:
      `${FESTIVAL_NAME} weekend with arrival transfers, festival time in ${FESTIVAL_PLACE}, local village exploration, then departure transfer.`,
    highlights: [
      `${FESTIVAL_NAME} in ${FESTIVAL_REGION}`,
      'Arrive a day early for the inaugural',
      `${FESTIVAL_REGION} and local villages`,
      'Camp, guesthouse or hotel',
      'Transfers included in package rates',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and check-in',
        location: `Arrival point · ${FESTIVAL_REGION}`,
        activities: [
          'Arrive at your agreed pickup point',
          `Transfer to ${FESTIVAL_PLACE}`,
          'Check in to tent, guesthouse or hotel',
        ],
        transport: 'Private arrival transfer',
      },
      {
        day: 2,
        title: `Festival day in ${FESTIVAL_REGION}`,
        location: FESTIVAL_PLACE,
        activities: [
          `Full day at ${FESTIVAL_NAME}`,
          `Overnight at ${FESTIVAL_REGION} / campsite`,
        ],
      },
      {
        day: 3,
        title: `${FESTIVAL_REGION} and local villages`,
        location: `${FESTIVAL_REGION} · local villages`,
        activities: [
          `${FESTIVAL_REGION} exploration`,
          'Local village tour',
        ],
        transport: 'Day excursion by vehicle',
      },
      {
        day: 4,
        title: 'Departure transfer',
        location: `${FESTIVAL_REGION} · departure point`,
        activities: [
          'Check out',
          'Drop at the agreed departure point',
        ],
        transport: 'Private departure transfer',
      },
    ],
  },
  {
    id: '5n6d',
    name: '5 Nights / 6 Days Tour',
    duration: '5N/6D',
    nights: 5,
    days: 6,
    route: `Arrival → ${FESTIVAL_REGION} → regional adventure → Departure`,
    description:
      `Extended ${FESTIVAL_NAME} stay in ${FESTIVAL_REGION}, followed by regional adventures and a final departure transfer.`,
    highlights: [
      `${FESTIVAL_NAME} & local villages`,
      `${FESTIVAL_REGION} regional adventures`,
      'Extended valley exploration',
      'Hotel nights on the regional leg',
      'All listed transfers',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival and check-in',
        location: `Arrival point · ${FESTIVAL_REGION}`,
        activities: [`Transfer to ${FESTIVAL_PLACE} and check in`],
        transport: 'Private arrival transfer',
      },
      {
        day: 2,
        title: `Festival day in ${FESTIVAL_REGION}`,
        location: FESTIVAL_PLACE,
        activities: [`${FESTIVAL_NAME} day and overnight in ${FESTIVAL_REGION}`],
      },
      {
        day: 3,
        title: `${FESTIVAL_REGION} and local villages`,
        location: `${FESTIVAL_REGION} · local villages`,
        activities: [`${FESTIVAL_REGION} and local village tour`],
      },
      {
        day: 4,
        title: 'Regional adventure',
        location: `${FESTIVAL_REGION} · beyond`,
        activities: ['Continue to your chosen regional experience'],
        transport: 'Long-distance transfer',
      },
      {
        day: 5,
        title: 'Continue exploring',
        location: 'Regional adventure',
        activities: ['Continue your regional exploration'],
        transport: 'Regional transfer',
      },
      {
        day: 6,
        title: 'Departure transfer',
        location: 'Departure point',
        activities: [
          'Drop at the agreed departure point, or continue exploring',
        ],
      },
    ],
  },
]
