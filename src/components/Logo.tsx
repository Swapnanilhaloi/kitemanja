import { LOGO_URL } from '@/data/site'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src={LOGO_URL}
      alt="Kite Manja"
      className={`h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12 ${className}`}
    />
  )
}
