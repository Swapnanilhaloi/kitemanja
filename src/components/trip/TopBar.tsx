import { useScrolled } from '@/hooks/useScroll'
import { jumpTo } from '@/hooks/useInView'

export function TopBar() {
  // Transparent over the hero's night sky, solid once the page moves on.
  const solid = useScrolled(typeof window === 'undefined' ? 600 : window.innerHeight * 0.9)

  return (
    <header className="topbar" data-solid={solid}>
      <div className="flex items-center justify-between gap-4 px-[var(--gutter)] py-2.5">
        <a
          href="#top"
          onClick={e => { e.preventDefault(); jumpTo('top') }}
          className="flex items-center gap-2.5"
          aria-label="Kite Manja, back to top"
        >
          <img src="/logo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="label hidden sm:inline" style={{ letterSpacing: '0.2em' }}>Kite Manja</span>
        </a>
        <a
          href="#ticket"
          onClick={e => { e.preventDefault(); jumpTo('ticket') }}
          className="btn"
          style={{ minHeight: '2.5rem', padding: '0.55rem 1rem', fontSize: '0.88rem' }}
        >
          Check availability
        </a>
      </div>
    </header>
  )
}
