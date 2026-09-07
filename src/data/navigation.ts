export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Our story', href: '#about' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Stories', href: '#stories' },
]

export { BOOKING_URL } from './site'
