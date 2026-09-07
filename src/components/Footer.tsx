import { Container } from '@/components/ui/Container'
import { navItems } from '@/data/navigation'
import { EMAIL, WHATSAPP, WHATSAPP_URL, BOOKING_URL, CAMP_OPENS } from '@/data/site'
import { Logo } from '@/components/Logo'

const currentYear = new Date().getFullYear()

export function Footer() {
  const handleNav = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 pb-12 border-b border-white/10 justify-between">
          <div className="max-w-md">
            <a
              href="#home"
              onClick={e => { e.preventDefault(); handleNav('#home') }}
              className="inline-flex items-center gap-3"
              aria-label="Kitemanja home"
            >
              <Logo />
              <span className="leading-tight">
                <span className="block font-display text-sm font-bold tracking-[0.14em]">
                  <span className="text-[#6bb8e8]">KITE</span>
                  <span className="text-brand-secondary">MANJA</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">Hornbill Festival</span>
              </span>
            </a>
            <p className="mt-5 text-sm text-white/60 leading-relaxed">
              Tenth edition of our exclusive campsite inside Kisama Heritage Village. Operational from {CAMP_OPENS} so you can attend the inaugural ceremony.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">Links</p>
              <ul className="space-y-2">
                {navItems.map(item => (
                  <li key={item.href}>
                    <button onClick={() => handleNav(item.href)} className="text-sm text-white/60 hover:text-white cursor-pointer">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">Contact us</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">{WHATSAPP}</a></li>
                <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">kitemanja.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 text-xs text-white/40">
          © {currentYear} Camp Kite Manja · Hornbill Festival, Kohima
        </div>
      </Container>
    </footer>
  )
}
