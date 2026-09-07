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
    route: 'Dimapur → Kohima → Khonoma → Dimapur',
    description:
      'The Hornbill weekend as published on KiteManja: transfers from Dimapur, festival time in Kohima, Kohima city and Khonoma village, then drop at Dimapur Railway Station or Airport.',
    highlights: [
      'Hornbill Festival at Kisama',
      'Arrive a day early for the inaugural',
      'Kohima city & Khonoma village',
      'Camp, guesthouse or hotel',
      'Transfers included in package rates',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dimapur to Kohima',
        location: 'Dimapur · Kohima',
        activities: [
          'Arrive at Dimapur Railway Station or Airport',
          'Transfer to Kohima / Kisama Heritage Village',
          'Check in to tent, guesthouse or hotel',
        ],
        transport: 'Private vehicle (Dimapur → Kohima)',
      },
      {
        day: 2,
        title: 'Overnight at Kohima',
        location: 'Kohima · Kisama Heritage Village',
        activities: [
          'Full day at the Hornbill Festival',
          'Overnight at Kohima / campsite',
        ],
      },
      {
        day: 3,
        title: 'Kohima City and Khonoma village',
        location: 'Kohima · Khonoma',
        activities: [
          'Kohima city visit',
          'Khonoma village tour',
        ],
        transport: 'Day excursion by vehicle',
      },
      {
        day: 4,
        title: 'Drop at Dimapur',
        location: 'Kohima · Dimapur',
        activities: [
          'Check out',
          'Drop at Dimapur Railway Station or Airport',
        ],
        transport: 'Private vehicle (Kohima → Dimapur)',
      },
    ],
  },
  {
    id: '5n6d',
    name: '5 Nights / 6 Days Tour',
    duration: '5N/6D',
    nights: 5,
    days: 6,
    route: 'Dimapur → Kohima → Kaziranga → Guwahati',
    description:
      'Hornbill in Kohima, then Kaziranga and Guwahati — as listed on KiteManja. Day 6 drop at Guwahati, or options available for further exploration.',
    highlights: [
      'Hornbill Festival & Khonoma',
      'Kohima to Kaziranga',
      'Kaziranga to Guwahati',
      'Hotel nights on the Assam leg',
      'All listed transfers',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dimapur to Kohima',
        location: 'Dimapur · Kohima',
        activities: ['Transfer from Dimapur to Kohima / Kisama and check in'],
        transport: 'Private vehicle (Dimapur → Kohima)',
      },
      {
        day: 2,
        title: 'Overnight at Kohima',
        location: 'Kohima · Kisama',
        activities: ['Hornbill Festival day and overnight in Kohima'],
      },
      {
        day: 3,
        title: 'Kohima City and Khonoma village',
        location: 'Kohima · Khonoma',
        activities: ['Kohima city and Khonoma village tour'],
      },
      {
        day: 4,
        title: 'Kohima to Kaziranga',
        location: 'Kohima · Kaziranga',
        activities: ['Drive from Kohima to Kaziranga'],
        transport: 'Long-distance transfer',
      },
      {
        day: 5,
        title: 'Kaziranga to Guwahati',
        location: 'Kaziranga · Guwahati',
        activities: ['Continue from Kaziranga to Guwahati'],
        transport: 'Transfer Kaziranga → Guwahati',
      },
      {
        day: 6,
        title: 'Drop at Guwahati',
        location: 'Guwahati',
        activities: [
          'Drop at Guwahati, or options available for exploration',
        ],
      },
    ],
  },
]
