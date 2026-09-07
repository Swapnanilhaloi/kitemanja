import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useScrolled } from '@/hooks/useScroll'
import { navItems } from '@/data/navigation'
import { EMAIL } from '@/data/site'
import { Logo } from '@/components/Logo'
import { cn } from '@/lib/utils'

export function Navbar() {
  const scrolled = useScrolled(24)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

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
    const ids = ['home', ...navItems.map(n => n.href.slice(1)), 'contact']
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
          scrolled || menuOpen
            ? 'bg-brand-cream/90 backdrop-blur-md border-b border-brand-border/80 py-2.5'
            : 'bg-brand-cream/80 backdrop-blur-sm py-3.5'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNav('#home') }}
            className="flex items-center gap-2.5 focus-visible:outline-none"
            aria-label="Kitemanja home"
          >
            <Logo />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-[13px] font-bold tracking-[0.18em] text-brand-ink">
                KITEMANJA
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={cn(
                  'px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] rounded-full transition-colors cursor-pointer',
                  activeSection === item.href.slice(1)
                    ? 'text-brand-primary'
                    : 'text-brand-ink/70 hover:text-brand-ink'
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="text-[12px] text-brand-muted hover:text-brand-primary transition-colors"
            >
              {EMAIL}
            </a>
            <button
              onClick={() => handleNav('#contact')}
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#0b67a8] transition-colors cursor-pointer"
            >
              Plan your escape
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNav('#contact')}
              className="rounded-full bg-brand-primary px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white"
            >
              Plan
            </button>
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-primary shadow-sm border border-brand-border"
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
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
              >
                Plan your escape <ArrowRight size={14} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
