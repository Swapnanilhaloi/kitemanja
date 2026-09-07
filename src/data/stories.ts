export interface Story {
  id: string
  quote: string
  name: string
  place: string
}

export const stories: Story[] = [
  {
    id: 'ananya',
    quote:
      'Kitemanja made Hornbill feel like staying with family. The tent was cosy, the food was generous, and every evening ended around a fire.',
    name: 'Ananya Sharma',
    place: 'Mumbai · Hornbill Festival',
  },
  {
    id: 'david-sarah',
    quote:
      'The best kind of travel is when you stop feeling like a visitor. Our village guide, the walks, the little details — all beautifully handled.',
    name: 'David & Sarah',
    place: 'London · Khonoma Village',
  },
  {
    id: 'rohan',
    quote:
      'We came for the festival and stayed for the people. Sleeping under that sky after a long trail is a memory we will keep for years.',
    name: 'Rohan Deshmukh',
    place: 'Bengaluru · Kisama Camp',
  },
]
