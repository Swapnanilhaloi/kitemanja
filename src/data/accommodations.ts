export interface Accommodation {
  id: string
  title: string
  subtitle: string
  description: string
  capacity: string
  features: string[]
  image: string
  imageAlt: string
  cta: string
  ctaHref: string
  availability?: string
  badge?: string
  price?: string
  priceNote?: string
}

export const accommodations: Accommodation[] = [
  {
    id: 'dome-tent',
    title: 'Dome Tent',
    subtitle: 'Premium Camping',
    description:
      'Sleep beneath Nagaland\'s night sky in our pre-pitched Dome Tents, set right inside the festival zone. Wake up to the sounds of drums and culture just steps from your door.',
    capacity: '2 guests',
    features: [
      'Pre-pitched & ready on arrival',
      'Inflatable pillow included',
      'Sleeping bag & blanket provided',
      'Common lobby access',
      'Charging plug points',
      'In-house Angami Naga kitchen',
      'Eco-friendly toilet bathrooms',
      'Hot water on request',
      '24-hour access to water',
    ],
    image: 'https://www.kitemanja.com/assets/images/background/r2.jpg',
    imageAlt: 'Dome tent accommodation',
    cta: 'Book your Dome Tent',
    ctaHref: '#contact',
    badge: 'Most Popular',
    price: 'Rs. 2,356',
    priceNote: 'per person per night, breakfast & dinner included',
  },
  {
    id: 'alpine-tent',
    title: 'Alpine Tent',
    subtitle: 'Elevated Camping',
    description:
      'The Alpine Tent offers a roomier, more elevated camping experience. Ideal for guests who want extra space and comfort while staying deep in the festival atmosphere.',
    capacity: '2–3 guests',
    features: [
      'Pre-pitched & ready on arrival',
      'Inflatable pillow included',
      'Sleeping bag & blanket provided',
      'Spacious interior',
      'Common lobby access',
      'Charging plug points',
      'In-house Angami Naga kitchen',
      'Eco-friendly toilet bathrooms',
      'Hot water on request',
      '24-hour access to water',
    ],
    image: 'https://www.kitemanja.com/assets/images/background/r1.jpg',
    imageAlt: 'Alpine tent accommodation',
    cta: 'Book your Alpine Tent',
    ctaHref: '#contact',
    price: 'Rs. 5,998',
    priceNote: 'for 2 people · Rs. 8,996 for 3, meals included',
  },
  {
    id: 'guesthouse',
    title: 'Family Run Guest House',
    subtitle: 'Local Hospitality',
    description:
      'Stay with local Naga families for an authentic, home-away-from-home experience. Our partner guesthouses offer warm hospitality with comfortable rooms in the heart of Kohima.',
    capacity: 'Various room types',
    features: [
      'Authentic local hospitality',
      'Home-cooked meals available',
      'Comfortable rooms',
      'Local family atmosphere',
      'Proximity to festival venue',
    ],
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80',
    imageAlt: 'Cosy guesthouse room',
    cta: 'Enquire for guesthouse',
    ctaHref: '#contact',
    availability: 'Open for December 1st, 2nd and 3rd',
  },
  {
    id: 'hotel',
    title: 'Hotel',
    subtitle: 'Comfort & Convenience',
    description:
      'For guests who prefer hotel-standard comfort, our hotel packages provide private rooms, modern amenities, and easy access to the Hornbill Festival grounds.',
    capacity: 'Various room types',
    features: [
      'Hotel-standard rooms',
      'Modern amenities',
      'Private bathrooms',
      'Festival transfers included',
    ],
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80',
    imageAlt: 'Hotel room with modern amenities',
    cta: 'Enquire for hotel',
    ctaHref: '#contact',
    availability: 'Open for December 1st, 2nd, 3rd, 8th, 9th and 10th',
  },
]
