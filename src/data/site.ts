import { activeFestival } from './festivals/active'

export const LOGO_URL = '/logo.svg'
export const BANNER_URL = 'https://www.kitemanja.com/assets/images/banner/banner.jpg'
export const HERO_URL = BANNER_URL
export const ABOUT_IMAGE_URL = 'https://www.kitemanja.com/assets/images/banner/about.jpg'
export const TENT_IMAGE_DOME = 'https://www.kitemanja.com/assets/images/background/r2.jpg'
export const TENT_IMAGE_ALPINE = 'https://www.kitemanja.com/assets/images/background/r1.jpg'

export const EMAIL = 'hello@kitemanja.com'
export const WHATSAPP = '+91 91272 89901'
export const WHATSAPP_URL = 'https://wa.me/919127289901'
export const BOOKING_URL = 'https://www.kitemanja.com/'
export const MAPS_URL = activeFestival.mapsUrl

export const FESTIVAL_NAME = activeFestival.name
export const FESTIVAL_REGION = activeFestival.region
export const FESTIVAL_STATE = activeFestival.state
export const FESTIVAL_DATES = activeFestival.dates
export const CAMP_OPENS = activeFestival.campOpens
export const FESTIVAL_PLACE = activeFestival.place
export const FESTIVAL_TAGLINE = activeFestival.tagline
export const FESTIVAL_INTRO = activeFestival.intro
export const FESTIVAL_STAY_COPY = activeFestival.stayCopy
export const FESTIVAL_HIGHLIGHTS = activeFestival.highlights
export const FESTIVAL_FACTS = activeFestival.facts
export const CAMP_DESCRIPTION = `Our campsite in ${FESTIVAL_PLACE} gives you a comfortable base for the festival. Operational from ${CAMP_OPENS}, so you can arrive early and settle in.`
