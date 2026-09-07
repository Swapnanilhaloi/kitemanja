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
    id: 'hornbill-camp',
    category: 'Festivals',
    location: 'Kohima, Nagaland',
    title: 'Hornbill Festival Camp',
    description:
      'Wake up inside the festival story with pre-pitched tents, local food, and an Angami welcome.',
    image:
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=86',
    imageAlt: 'Hornbill Festival Camp',
  },
  {
    id: 'khonoma-trails',
    category: 'Trails',
    location: 'Nagaland highlands',
    title: 'Dzukou & Khonoma Trails',
    description:
      'Misty ridges, lily valleys, and village guardians who know every bend in the trail.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=86',
    imageAlt: 'Dzukou & Khonoma Trails',
  },
  {
    id: 'kaziranga',
    category: 'Wildlife',
    location: 'Assam',
    title: 'Kaziranga & River Trails',
    description:
      'Rhino safaris, tea garden mornings, and Brahmaputra sunsets around the campfire.',
    image:
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=86',
    imageAlt: 'Kaziranga & River Trails',
  },
  {
    id: 'naga-food',
    category: 'Culture',
    location: 'Kisama Heritage Village',
    title: 'Angami Naga Kitchen',
    description:
      'Slow-cooked meats, foraged vegetables, and smokehouse traditions from our in-house kitchen.',
    image:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Traditional Naga food spread',
  },
]
