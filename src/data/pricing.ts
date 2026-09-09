import { FESTIVAL_REGION } from './site'

export interface PricingRow {
  pax: string
  vehicle: string
  col1: string
  col2: string
}

export interface PricingTable {
  id: string
  title: string
  subtitle: string
  col1Header: string
  col2Header: string
  rows: PricingRow[]
  notes?: string[]
}

export interface PricingSection {
  id: string
  packageName: string
  packageDuration: string
  tables: PricingTable[]
}

export const pricingSections: PricingSection[] = [
  {
    id: 'camping-3n4d',
    packageName: '3 Nights / 4 Days — Camping',
    packageDuration: `Arrival–${FESTIVAL_REGION}–Departure with transfers`,
    tables: [
      {
        id: 'camping-tent',
        title: '3 nights / 4 days camping tour package with transfers',
        subtitle: 'Per person price',
        col1Header: 'Dome Tent',
        col2Header: 'Alpine Tent',
        rows: [
          { pax: '2 Pax', vehicle: '1 Small Taxi',  col1: 'Rs. 15,900', col2: 'Rs. 17,990' },
          { pax: '4 Pax', vehicle: '1 Small Taxi',  col1: 'Rs. 12,500', col2: 'Rs. 14,500' },
          { pax: '4 Pax', vehicle: '1 Maruti Ecco', col1: 'Rs. 14,900', col2: 'Rs. 17,200' },
          { pax: '6 Pax', vehicle: '1 Sumo',        col1: 'Rs. 12,900', col2: 'Rs. 14,950' },
          { pax: '8 Pax', vehicle: '1 Sumo',        col1: 'Rs. 11,900', col2: 'Rs. 13,900' },
          { pax: '8 Pax', vehicle: '2 Sumo',        col1: 'Rs. 14,900', col2: 'Rs. 16,900' },
          { pax: '10 Pax', vehicle: '1 Sumo',       col1: 'Rs. 11,500', col2: 'Rs. 13,500' },
          { pax: '10 Pax', vehicle: '2 Sumo',       col1: 'Rs. 13,500', col2: 'Rs. 15,900' },
        ],
      },
    ],
  },
  {
    id: 'guesthouse-hotel-3n4d',
    packageName: '3 Nights / 4 Days — Guesthouse & Hotel',
    packageDuration: `Arrival–${FESTIVAL_REGION}–Departure with transfers`,
    tables: [
      {
        id: 'guesthouse-hotel',
        title: `3 nights / 4 days (${FESTIVAL_REGION} stay)`,
        subtitle: 'Per person price',
        col1Header: 'Guesthouse',
        col2Header: 'Hotel',
        rows: [
          { pax: '2 Pax',  vehicle: '1 Sedan/Hatchback', col1: 'Rs. 24,500', col2: 'Rs. 26,500' },
          { pax: '2 Pax',  vehicle: '1 Innova',          col1: 'Rs. 30,900', col2: 'Rs. 32,900' },
          { pax: '4 Pax',  vehicle: '1 Sedan/Hatchback', col1: 'Rs. 18,900', col2: 'Rs. 20,900' },
          { pax: '4 Pax',  vehicle: '1 Innova',          col1: 'Rs. 22,100', col2: 'Rs. 23,900' },
          { pax: '6 Pax',  vehicle: '1 Tempo',           col1: 'Rs. 22,900', col2: 'Rs. 24,500' },
          { pax: '8 Pax',  vehicle: '1 Tempo',           col1: 'Rs. 20,500', col2: 'Rs. 22,100' },
          { pax: '8 Pax',  vehicle: '2 Innova',          col1: 'Rs. 22,000', col2: 'Rs. 23,900' },
          { pax: '10 Pax', vehicle: '2 Innova',          col1: 'Rs. 20,500', col2: 'Rs. 22,100' },
          { pax: '10 Pax', vehicle: '1 Tempo',           col1: 'Rs. 19,900', col2: 'Rs. 21,500' },
        ],
        notes: [
          'Children (6–11 years): Rs. 5,250 per child (Guesthouse & Hotel)',
          'Extra Adult (12+ years): Guesthouse Rs. 7,600 · Hotel Rs. 9,200',
        ],
      },
    ],
  },
  {
    id: 'all-5nights',
    packageName: '5 Nights / 6 Days — All Accommodation',
    packageDuration: `${FESTIVAL_REGION} + regional adventure with transfers`,
    tables: [
      {
        id: 'all-5n-guesthouse-hotel',
        title: 'All 5 nights (Guesthouse / Hotel)',
        subtitle: 'Per person price',
        col1Header: 'Guesthouse',
        col2Header: 'Hotel',
        rows: [
          { pax: '2 Pax',  vehicle: '1 Sedan',  col1: 'Rs. 42,900', col2: 'Rs. 45,900' },
          { pax: '2 Pax',  vehicle: '1 Innova', col1: 'Rs. 49,900', col2: 'Rs. 53,000' },
          { pax: '4 Pax',  vehicle: '1 Sedan',  col1: 'Rs. 32,500', col2: 'Rs. 35,500' },
          { pax: '4 Pax',  vehicle: '1 Innova', col1: 'Rs. 35,900', col2: 'Rs. 39,800' },
          { pax: '6 Pax',  vehicle: '1 Tempo',  col1: 'Rs. 34,100', col2: 'Rs. 37,300' },
          { pax: '8 Pax',  vehicle: '1 Tempo',  col1: 'Rs. 30,990', col2: 'Rs. 33,990' },
          { pax: '8 Pax',  vehicle: '2 Innova', col1: 'Rs. 35,500', col2: 'Rs. 38,900' },
          { pax: '10 Pax', vehicle: '2 Innova', col1: 'Rs. 32,900', col2: 'Rs. 35,900' },
          { pax: '10 Pax', vehicle: '1 Tempo',  col1: 'Rs. 29,100', col2: 'Rs. 32,500' },
        ],
        notes: [
          'Children (6–11 years): Rs. 8,900 per child (Guesthouse & Hotel)',
          'Extra Adult (12+ years): Guesthouse Rs. 12,700 · Hotel Rs. 15,400',
        ],
      },
    ],
  },
  {
    id: 'camping-kaziranga-5n',
    packageName: '5 Nights / 6 Days — Camping + Kaziranga',
    packageDuration: `${FESTIVAL_REGION} 3 nights camping + regional adventure 2 nights in hotels`,
    tables: [
      {
        id: 'camping-kaziranga-tent',
        title: `${FESTIVAL_REGION} 3 Nights Camping & Regional Adventure 2 Nights Hotels`,
        subtitle: 'Per person price',
        col1Header: 'Dome Tent',
        col2Header: 'Alpine Tent',
        rows: [
          { pax: '2 Pax',  vehicle: '1 Sedan',  col1: 'Rs. 34,500', col2: 'Rs. 37,900' },
          { pax: '2 Pax',  vehicle: '1 Innova', col1: 'Rs. 41,900', col2: 'Rs. 45,050' },
          { pax: '4 Pax',  vehicle: '1 Sedan',  col1: 'Rs. 23,900', col2: 'Rs. 27,500' },
          { pax: '4 Pax',  vehicle: '1 Innova', col1: 'Rs. 27,500', col2: 'Rs. 30,900' },
          { pax: '6 Pax',  vehicle: '1 Tempo',  col1: 'Rs. 25,900', col2: 'Rs. 26,500' },
          { pax: '8 Pax',  vehicle: '1 Tempo',  col1: 'Rs. 22,900', col2: 'Rs. 26,000' },
          { pax: '8 Pax',  vehicle: '2 Innova', col1: 'Rs. 27,300', col2: 'Rs. 30,900' },
          { pax: '10 Pax', vehicle: '2 Innova', col1: 'Rs. 24,500', col2: 'Rs. 27,900' },
          { pax: '10 Pax', vehicle: '1 Tempo',  col1: 'Rs. 20,900', col2: 'Rs. 24,500' },
        ],
      },
    ],
  },
]
