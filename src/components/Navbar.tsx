import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '@/hooks/useScroll'
import { navItems } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function Navbar() {
  const scrolled = useScrolled(24)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const overlay = !scrolled && !menuOpen

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const ids = navItems.map(n => n.href.slice(1))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        entries => { if (entries[0].isIntersecting) setActiveSection(id) },
        { rootMargin: '-45% 0px -45% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          overlay
            ? 'bg-transparent py-4'
            : 'bg-brand-cream/90 backdrop-blur-md border-b border-brand-border/80 py-2.5'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav('#home') }}
            className="flex flex-col leading-none focus-visible:outline-none"
            aria-label="Kitemanja home"
          >
            <span className="font-display text-[15px] font-extrabold tracking-[0.12em] sm:text-base">
              <span className="text-[#5aa8dc]">KITE</span>
              <span className="text-brand-secondary">MANJA</span>
            </span>
            <span
              className={cn(
                'mt-1 text-[8px] font-semibold uppercase tracking-[0.22em]',
                overlay ? 'text-white/90' : 'text-brand-ink/70'
              )}
            >
              Hornbill Festival
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={cn(
                  'px-3 py-2 text-[13px] font-medium tracking-wide rounded-full transition-colors cursor-pointer',
                  activeSection === item.href.slice(1)
                    ? 'text-[#6bb8e8]'
                    : overlay
                      ? 'text-white hover:text-white/80'
                      : 'text-brand-ink/70 hover:text-brand-ink'
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNav('#contact')}
              className="inline-flex items-center rounded-full bg-brand-secondary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#7ab536] transition-colors cursor-pointer"
            >
              Book Now
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNav('#contact')}
              className="rounded-full bg-brand-secondary px-4 py-2 text-xs font-semibold text-white"
            >
              Book Now
            </button>
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full',
                overlay
                  ? 'bg-white/15 text-white border border-white/25'
                  : 'bg-white text-brand-primary shadow-sm border border-brand-border'
              )}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-brand-cream border-b border-brand-border px-6 py-6 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navItems.map(item => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="w-full text-left px-3 py-3 text-sm font-medium text-brand-ink hover:text-brand-primary cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-brand-secondary px-5 py-3 text-sm font-semibold text-white"
              >
                Book Now
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
