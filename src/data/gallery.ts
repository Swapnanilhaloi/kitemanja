import { FESTIVAL_NAME, FESTIVAL_PLACE } from './site'

export interface GalleryImage {
  id: string
  src: string
  thumb: string
  alt: string
  category: string
}

const CATEGORY_KEYS = ['camp', 'tents', 'tent', 'festival', 'food', 'village', 'stay'] as const

const categoryLabel: Record<string, string> = {
  camp: 'Camp',
  tents: 'Tents',
  tent: 'Tents',
  festival: 'Festival',
  food: 'Food',
  village: 'Village',
  stay: 'Stay',
}

function titleFromSlug(slug: string) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase())
}

function parseFile(path: string, src: string): GalleryImage {
  const file = path.split('/').pop() ?? path
  const base = file.replace(/\.[^.]+$/, '')
  const withoutIndex = base.replace(/^\d+[-_\s]*/, '')
  const parts = withoutIndex.split(/[-_]/).filter(Boolean)
  const key = parts[0]?.toLowerCase() ?? ''
  const category = key && CATEGORY_KEYS.includes(key as (typeof CATEGORY_KEYS)[number])
    ? categoryLabel[key]
    : 'Camp'
  const captionSlug = CATEGORY_KEYS.includes(key as (typeof CATEGORY_KEYS)[number])
    ? parts.slice(1).join(' ') || parts.join(' ')
    : withoutIndex

  return {
    id: file,
    src,
    thumb: src,
    alt: titleFromSlug(captionSlug) || titleFromSlug(withoutIndex) || 'Camp Kite Manja',
    category,
  }
}

const localModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const km = (path: string) => `https://www.kitemanja.com/assets/images/${path}`

const fallbackImages: GalleryImage[] = [
  { id: 'g1', category: 'Camp', src: km('banner/banner.jpg'), thumb: km('banner/banner.jpg'), alt: `Camp Kite Manja at ${FESTIVAL_NAME}` },
  { id: 'g2', category: 'Tents', src: km('background/r1.jpg'), thumb: km('background/r1.jpg'), alt: 'Alpine tent at the campsite' },
  { id: 'g3', category: 'Festival', src: km('banner/about.jpg'), thumb: km('banner/about.jpg'), alt: FESTIVAL_PLACE },
  { id: 'g4', category: 'Tents', src: km('background/r2.jpg'), thumb: km('background/r2.jpg'), alt: 'Dome tent at Camp Kite Manja' },
]

const localImages = Object.entries(localModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => parseFile(path, src))

export const usingLocalGallery = localImages.length > 0
export const galleryImages: GalleryImage[] = usingLocalGallery ? localImages : fallbackImages

export const galleryCategories = [
  'All',
  ...Array.from(new Set(galleryImages.map(img => img.category))),
]
