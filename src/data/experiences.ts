import { FESTIVAL_NAME, FESTIVAL_PLACE, FESTIVAL_REGION, FESTIVAL_STATE } from './site'

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
    location: FESTIVAL_PLACE,
    title: 'Cultural heritage',
    description:
      `Live ${FESTIVAL_NAME} from inside the venue — independent music, local culture, food, and the inaugural experience a day before the crowds arrive.`,
    image: 'https://www.kitemanja.com/assets/images/banner/about.jpg',
    imageAlt: `${FESTIVAL_NAME} at ${FESTIVAL_PLACE}`,
  },
  {
    id: 'village-tours',
    category: 'Village tours',
    location: `${FESTIVAL_REGION} · local villages`,
    title: 'Village tours',
    description:
      `Explore ${FESTIVAL_REGION} and nearby villages with transfers built into the 3-night and 5-night packages.`,
    image: 'https://www.kitemanja.com/assets/images/banner/banner.jpg',
    imageAlt: 'Naga hills and village landscape',
  },
  {
    id: 'cuisine',
    category: 'Food',
    location: 'Camp kitchen',
    title: 'Local cuisines',
    description:
      `Breakfast and dinner from our in-house kitchen, plus festival food courts with dishes inspired by ${FESTIVAL_STATE}'s local traditions.`,
    image: 'https://www.kitemanja.com/assets/images/background/r2.jpg',
    imageAlt: 'Camp kitchen and dining at Kite Manja',
  },
  {
    id: 'adventures',
    category: 'Adventures',
    location: `${FESTIVAL_STATE} · beyond`,
    title: 'Adventures & festive fervour',
    description:
      `Festival nights in ${FESTIVAL_REGION}, then mountain adventures and optional longer trails on the 5 nights / 6 days tour.`,
    image: 'https://www.kitemanja.com/assets/images/background/r1.jpg',
    imageAlt: 'Festival camp and adventure stays',
  },
]
