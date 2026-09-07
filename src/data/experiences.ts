export interface Experience {
  id: string
  category: string
  location: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export const experiences: Experience[] = [
  {
    id: 'heritage',
    category: 'Culture',
    location: 'Kisama Heritage Village',
    title: 'Cultural heritage',
    description:
      'Live the Hornbill Festival from inside the venue — tribal morungs, dances, crafts, and the inaugural ceremony a day before the crowds arrive.',
    image: 'https://www.kitemanja.com/assets/images/banner/about.jpg',
    imageAlt: 'Hornbill Festival at Kisama Heritage Village',
  },
  {
    id: 'village-tours',
    category: 'Village tours',
    location: 'Kohima · Khonoma',
    title: 'Village tours',
    description:
      'Walk Kohima town and Khonoma — India’s first green village — with transfers built into the 3-night and 5-night packages.',
    image: 'https://www.kitemanja.com/assets/images/banner/banner.jpg',
    imageAlt: 'Naga hills and village landscape',
  },
  {
    id: 'cuisine',
    category: 'Food',
    location: 'Camp kitchen',
    title: 'Local cuisines',
    description:
      'Breakfast and dinner from our in-house Angami Naga kitchen, plus festival food courts with dishes from across Nagaland’s tribes.',
    image: 'https://www.kitemanja.com/assets/images/background/r2.jpg',
    imageAlt: 'Camp kitchen and dining at Kite Manja',
  },
  {
    id: 'adventures',
    category: 'Adventures',
    location: 'Nagaland · Assam',
    title: 'Adventures & festive fervour',
    description:
      'Festival nights at Kisama, then the longer trail to Kaziranga and Guwahati on the 5 nights / 6 days tour.',
    image: 'https://www.kitemanja.com/assets/images/background/r1.jpg',
    imageAlt: 'Festival camp and adventure stays',
  },
]
