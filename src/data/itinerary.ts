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
    name: 'The Hornbill Weekend',
    duration: '3N/4D',
    nights: 3,
    days: 4,
    route: 'Dimapur → Kohima → Khonoma → Dimapur',
    description:
      'The ideal introduction to Nagaland and the Hornbill Festival. Transfers from Dimapur, festival days in Kohima, a village tour, and a comfortable return journey.',
    highlights: [
      'Hornbill Festival experience',
      'Kisama Heritage Village',
      'Khonoma Village tour',
      'Kohima city exploration',
      'All transfers included',
      'Accommodation & meals',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dimapur → Kohima',
        location: 'Dimapur · Kohima',
        activities: [
          'Arrive at Dimapur Railway Station or Airport',
          'Transfer to Kohima / Kisama Heritage Village',
          'Check in to your Kite Manja accommodation',
          'Welcome dinner at the Angami Naga kitchen',
          'Evening at the Hornbill Festival night bazaar',
        ],
        transport: 'Private vehicle transfer (Dimapur → Kohima)',
      },
      {
        day: 2,
        title: 'Overnight at Kohima',
        location: 'Kohima · Kisama Heritage Village',
        activities: [
          'Full day at the Hornbill Festival',
          'Explore tribal morungs (community halls)',
          'Watch traditional dance and cultural performances',
          'Sample food from all 17 Naga tribes at the food court',
          'Browse indigenous crafts and handloom stalls',
          'Overnight at Kohima / campsite',
        ],
      },
      {
        day: 3,
        title: 'Kohima City & Khonoma Village',
        location: 'Kohima · Khonoma Village',
        activities: [
          "Visit Kohima's local market and town area",
          'Drive to Khonoma Village — India\'s first green village',
          'Walk the traditional Naga village trails',
          'Learn about Angami Naga history and conservation',
          'Return to campsite for the final festival evening',
        ],
        transport: 'Day excursion by vehicle',
      },
      {
        day: 4,
        title: 'Kohima → Dimapur',
        location: 'Kohima · Dimapur',
        activities: [
          'Morning at leisure / final festival visit',
          'Check out from accommodation',
          'Transfer to Dimapur Railway Station or Airport',
          'Departure',
        ],
        transport: 'Private vehicle transfer (Kohima → Dimapur)',
      },
    ],
  },
  {
    id: '5n6d',
    name: 'The Northeast Trail',
    duration: '5N/6D',
    nights: 5,
    days: 6,
    route: 'Dimapur → Kohima → Kaziranga → Guwahati',
    description:
      'The complete Northeast India experience. Three nights at the Hornbill Festival in Kohima, followed by the wildlife wonder of Kaziranga and a final stop in the gateway city of Guwahati.',
    highlights: [
      'Hornbill Festival experience',
      'Kisama Heritage Village',
      'Khonoma Village tour',
      'Kaziranga National Park',
      'Guwahati exploration',
      'All transfers included',
      'Accommodation throughout',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dimapur → Kohima',
        location: 'Dimapur · Kohima',
        activities: [
          'Arrive at Dimapur Railway Station or Airport',
          'Transfer to Kohima / Kisama Heritage Village',
          'Check in to your Kite Manja accommodation',
          'Welcome dinner at the Angami Naga kitchen',
          'Evening at the Hornbill Festival night bazaar',
        ],
        transport: 'Private vehicle transfer (Dimapur → Kohima)',
      },
      {
        day: 2,
        title: 'Overnight at Kohima',
        location: 'Kohima · Kisama Heritage Village',
        activities: [
          'Full day at the Hornbill Festival',
          'Explore tribal morungs',
          'Traditional dance and cultural performances',
          'Sample food from across Nagaland\'s tribes',
          'Browse indigenous crafts and handloom stalls',
        ],
      },
      {
        day: 3,
        title: 'Kohima City & Khonoma Village',
        location: 'Kohima · Khonoma Village',
        activities: [
          'Kohima local market visit',
          'Drive to Khonoma — India\'s first green village',
          'Walk the traditional Naga village trails',
          'Learn about Angami Naga conservation history',
          'Return to campsite for evening festival',
        ],
        transport: 'Day excursion by vehicle',
      },
      {
        day: 4,
        title: 'Kohima → Kaziranga',
        location: 'Kohima · Kaziranga, Assam',
        activities: [
          'Morning departure from Kohima',
          'Scenic drive through the hills',
          'Arrive at Kaziranga National Park, Assam',
          'Check in to hotel',
          'Evening jeep safari (optional, at extra cost)',
        ],
        transport: 'Long-distance transfer to Kaziranga',
      },
      {
        day: 5,
        title: 'Kaziranga → Guwahati',
        location: 'Kaziranga · Guwahati, Assam',
        activities: [
          'Morning elephant safari or jeep safari at Kaziranga',
          'Spot one-horned rhinoceros, elephants, and tigers',
          'Afternoon departure to Guwahati',
          'Check in to Guwahati hotel',
          'Evening by the Brahmaputra river',
        ],
        transport: 'Transfer Kaziranga → Guwahati',
      },
      {
        day: 6,
        title: 'Guwahati / Departure',
        location: 'Guwahati, Assam',
        activities: [
          'Morning at leisure in Guwahati',
          'Optional: visit Kamakhya Temple or Umananda Island',
          'Drop at Guwahati Airport or Railway Station',
          'Or options available for further exploration',
        ],
        transport: 'Drop at Guwahati Airport / Railway Station',
      },
    ],
  },
]
