export interface Facility {
  id: string
  icon: string
  title: string
  description: string
}

export const facilities: Facility[] = [
  {
    id: 'tents',
    icon: 'tent',
    title: 'Pre-Pitched Tents',
    description: 'Dome and Alpine tents pre-pitched and ready when you arrive — no setup required.',
  },
  {
    id: 'bedding',
    icon: 'pillow',
    title: 'Bedding Included',
    description: 'Inflatable pillows, sleeping bags, and blankets provided for every guest.',
  },
  {
    id: 'water',
    icon: 'droplets',
    title: '24-Hour Water Access',
    description: 'Round-the-clock access to clean water throughout the campsite.',
  },
  {
    id: 'lobby',
    icon: 'sofa',
    title: 'Common Lobby',
    description: 'A shared gathering space to relax, connect with fellow travellers, and unwind.',
  },
  {
    id: 'charging',
    icon: 'zap',
    title: 'Charging Points',
    description: 'Keep your devices powered with dedicated plug points throughout the campsite.',
  },
  {
    id: 'kitchen',
    icon: 'utensils',
    title: 'Angami Naga Kitchen',
    description: 'An in-house kitchen serving authentic Angami Naga cuisine — taste the culture on your plate.',
  },
  {
    id: 'bathroom',
    icon: 'bath',
    title: 'Eco-Friendly Bathrooms',
    description: 'Clean, eco-friendly toilet and bathroom facilities for all guests.',
  },
  {
    id: 'hotwater',
    icon: 'flame',
    title: 'Hot Water on Request',
    description: 'Hot water available on request to refresh after a day at the festival.',
  },
]
