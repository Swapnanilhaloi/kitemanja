import { FESTIVAL_NAME } from './site'

export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home',        href: '#home' },
  { label: 'Stay',        href: '#stay' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Packages',    href: '#packages' },
  { label: FESTIVAL_NAME, href: '#festival' },
  { label: 'Pricing',     href: '#pricing' },
  { label: 'Contact',     href: '#contact' },
]
