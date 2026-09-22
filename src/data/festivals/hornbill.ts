import dance from '@/assets/site/hornbill-dance.jpg'
import type { FestivalProfile } from './types'

const name = 'Hornbill Festival'
const region = 'Kisama Heritage Village'
const state = 'Nagaland'
const dates = 'December 1–10'
const campOpens = '30 November'

export const hornbillFestival: FestivalProfile = {
  id: 'hornbill',
  name,
  region,
  state,
  dates,
  campOpens,
  place: `${region}, Kohima, ${state}`,
  mapsUrl: 'https://maps.google.com/?q=Kisama+Heritage+Village+Kohima+Nagaland',
  tagline: 'Culture, music & the Hornbill experience',
  intro: 'If Hornbill Festival is on your list, make your stay part of the experience. Set in Kisama Heritage Village, the festival brings together music, tribal culture, local food, and the welcoming spirit of Nagaland.',
  stayCopy: 'Stay with us and enjoy a comfortable base for your festival days, from easy mornings in the hills to nights filled with live performances. Arrive early, settle in, explore Kohima, and make the most of the festival beyond the stage.',
  highlights: 'Live music, tribal culture, mountain adventures and unforgettable festival moments.',
  facts: [
    { value: region, label: `Kite Manja camp, ${state}` },
    { value: dates, label: name },
    { value: campOpens, label: 'Camp opens for the inaugural' },
  ],
  kitchen: 'in-house Angami Naga kitchen',
  card: {
    src: dance,
    alt: 'A Naga warrior leaps mid-dance with a spear at Hornbill Festival, performers seated behind',
    position: '55% 40%',
  },
  scene: {
    src: dance,
    alt: 'Naga performers in traditional dress at Hornbill Festival, Kisama Heritage Village',
    position: '45% 60%',
  },
}
