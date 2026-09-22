import nightStage from '@/assets/gallery/01. Stage.jpg'
import dayStage from '@/assets/gallery/02. Stage.jpg'
import type { FestivalProfile } from './types'

const name = 'Ziro Music Festival'
const region = 'Ziro Valley'
const state = 'Arunachal Pradesh'
const dates = 'September 25–28'
const campOpens = '24 September'

export const ziroFestival: FestivalProfile = {
  id: 'ziro',
  name,
  region,
  state,
  dates,
  campOpens,
  place: `${region}, ${state}`,
  mapsUrl: 'https://maps.google.com/?q=Ziro+Valley+Arunachal+Pradesh',
  tagline: 'Music, mountains & the Ziro Valley experience',
  intro: 'If Ziro Music Festival is on your list, make your stay part of the experience. Set in the beautiful Ziro Valley of Arunachal Pradesh, the festival brings together independent music, local culture, food, and the laid-back spirit of the Northeast.',
  stayCopy: 'Stay with us and enjoy a comfortable base for your festival days — from easy mornings in the valley to nights filled with live music. Arrive early, settle in, explore Ziro, and make the most of the festival beyond the stage.',
  highlights: 'Live music, local culture, mountain adventures and unforgettable festival moments.',
  facts: [
    { value: region, label: `Kite Manja camp, ${state}` },
    { value: dates, label: name },
    { value: campOpens, label: 'Camp opens for the inaugural' },
  ],
  kitchen: 'in-house camp kitchen',
  card: {
    src: nightStage,
    alt: 'The main stage at Ziro Music Festival at night, crowd with hands raised',
    position: '50% 45%',
  },
  scene: {
    src: dayStage,
    alt: 'The bamboo stage at Ziro Music Festival by day, people sitting on the grass with the valley and hills behind',
    position: '50% 55%',
  },
}
