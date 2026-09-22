import { festivalOrder, festivals } from '@/data/festivals'
import { EMAIL, WHATSAPP, WHATSAPP_URL } from '@/data/site'

export function PageFoot() {
  return (
    <footer className="ground-navy page-foot py-12">
      <div className="mx-auto flex w-full max-w-[76rem] flex-col gap-8 px-[var(--gutter)] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" width={44} height={44} className="h-11 w-11 object-contain" />
            <p className="label" style={{ letterSpacing: '0.2em' }}>Kite Manja</p>
          </div>
          <p className="soft mt-4 text-sm">
            Festival stays at {festivalOrder.map(id => festivals[id].name).join(' and ')}.
          </p>
        </div>
        <div className="soft space-y-1.5 text-sm sm:text-right">
          <p><a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <p><a className="underline" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp {WHATSAPP}</a></p>
          <p>© {new Date().getFullYear()} Kite Manja</p>
        </div>
      </div>
    </footer>
  )
}
