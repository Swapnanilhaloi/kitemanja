export interface GalleryImage {
  id: string
  src: string
  thumb: string
  alt: string
  category: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    category: 'Campsites',
    src: 'https://www.kitemanja.com/assets/images/banner/banner.jpg',
    thumb: 'https://www.kitemanja.com/assets/images/banner/banner.jpg',
    alt: 'The road to the next story',
  },
  {
    id: 'g2',
    category: 'Campsites',
    src: 'https://www.kitemanja.com/assets/images/background/r1.jpg',
    thumb: 'https://www.kitemanja.com/assets/images/background/r1.jpg',
    alt: 'Golden hour at basecamp',
  },
  {
    id: 'g3',
    category: 'Festivals',
    src: 'https://www.kitemanja.com/assets/images/banner/about.jpg',
    thumb: 'https://www.kitemanja.com/assets/images/banner/about.jpg',
    alt: 'Hornbill Festival grounds',
  },
  {
    id: 'g4',
    category: 'Trails',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=75',
    alt: 'A little further off the map',
  },
  {
    id: 'g5',
    category: 'Culture',
    src: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=75',
    alt: 'Make room for new friends',
  },
  {
    id: 'g6',
    category: 'Campsites',
    src: 'https://www.kitemanja.com/assets/images/background/r2.jpg',
    thumb: 'https://www.kitemanja.com/assets/images/background/r2.jpg',
    alt: 'Dome tent at camp',
  },
  {
    id: 'g7',
    category: 'Trails',
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=75',
    alt: 'Terraced mountain village',
  },
  {
    id: 'g8',
    category: 'Culture',
    src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=75',
    alt: 'Good food tastes better together',
  },
]

export const galleryCategories = ['All', 'Campsites', 'Festivals', 'Trails', 'Culture']
