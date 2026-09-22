export type FestivalId = 'ziro' | 'hornbill'

export interface FestivalFact {
  value: string
  label: string
}

export interface FestivalImage {
  src: string
  alt: string
  /** CSS object-position, for crops that must keep a subject in frame. */
  position?: string
}

export interface FestivalProfile {
  id: FestivalId
  name: string
  region: string
  state: string
  dates: string
  campOpens: string
  place: string
  mapsUrl: string
  tagline: string
  intro: string
  stayCopy: string
  highlights: string
  /** The three value/label tiles under the intro copy. */
  facts: FestivalFact[]
  /** What the camp kitchen is called at this festival. */
  kitchen: string
  /** Photo on the festival picker. */
  card: FestivalImage
  /** Full-bleed photo for the camp reveal. */
  scene: FestivalImage
}
