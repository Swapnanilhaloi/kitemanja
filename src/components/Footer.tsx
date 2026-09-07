import { Container } from '@/components/ui/Container'
import { navItems } from '@/data/navigation'
import { EMAIL, WHATSAPP, WHATSAPP_URL, BOOKING_URL } from '@/data/site'
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
              <span className="font-display text-sm font-bold tracking-[0.18em]">KITEMANJA</span>
            </a>
            <p className="mt-5 text-sm text-white/60 leading-relaxed">
              Responsible travel, warm camps, and better stories from Northeast India.
            </p>
            <p className="mt-4 text-sm text-white/50">
              Instagram · WhatsApp · {EMAIL}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">Explore</p>
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">Say hello</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">{WHATSAPP}</a></li>
                <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">kitemanja.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 text-xs text-white/40">
          © {currentYear} KiteManja Travel LLP · Made for the curious
        </div>
      </Container>
    </footer>
  )
}
