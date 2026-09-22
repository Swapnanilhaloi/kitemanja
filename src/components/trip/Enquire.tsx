import { useRef, useState, type FormEvent } from 'react'
import { EMAIL, WHATSAPP, WHATSAPP_URL } from '@/data/site'
import { useInView } from '@/hooks/useInView'
import { tripLines } from '@/state/quote'
import { useTrip } from '@/state/useTrip'
import { TicketEditor } from './TicketCard'

/** The close: the ticket docks here and becomes the enquiry. */
export function Enquire() {
  const ref = useRef<HTMLDivElement>(null)
  const seen = useInView(ref, 0.2)
  const trip = useTrip()
  const [opened, setOpened] = useState(false)

  const whatsappText = encodeURIComponent(['Hi Kite Manja, please check availability for:', ...tripLines(trip)].join('\n'))

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const body = [
      ...tripLines(trip),
      '',
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone') || 'Not given'}`,
      '',
      get('notes') || 'No note.',
    ].join('\n')
    const subject = `Availability: ${trip.festival.name}, ${get('name')}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <section id="ticket" className="ground-cream chapter" data-sc-act="dock" aria-labelledby="ticket-title">
      <div ref={ref} data-seen={seen} className="mx-auto w-full max-w-[76rem] px-[var(--gutter)]">
        <h2 id="ticket-title" className="title max-w-[14ch]">
          {trip.stay && trip.route ? 'Your ticket is ready.' : 'Your ticket so far.'}
        </h2>
        <p className="lede soft mt-4">
          {trip.stay && trip.route
            ? 'Everything you picked is on it, and you can change any of it here. Add your details and we will reply with availability.'
            : 'Fill in what is left right here, or leave it open and tell us in the note. We will reply with availability either way.'}
        </p>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
          <div className="docked">
            <TicketEditor />
          </div>

          <form
            onSubmit={onSubmit}
            method="post"
            action={`mailto:${EMAIL}`}
            encType="text/plain"
            className="grid gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="field">
                <label htmlFor="f-name" className="text-sm font-semibold">Your name</label>
                <input id="f-name" name="name" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="f-email" className="text-sm font-semibold">Email</label>
                <input id="f-email" name="email" type="email" required autoComplete="email" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-phone" className="text-sm font-semibold">
                Phone or WhatsApp <span className="soft font-normal">(optional)</span>
              </label>
              <input id="f-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="f-notes" className="text-sm font-semibold">
                Anything else <span className="soft font-normal">(dates, children, where you are coming from)</span>
              </label>
              <textarea id="f-notes" name="notes" rows={4} />
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
              <button type="submit" className="btn">Check availability</button>
              <a
                href={`${WHATSAPP_URL}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline accent"
              >
                Or send it on WhatsApp
              </a>
            </div>

            <p className="soft text-sm" aria-live="polite">
              {opened
                ? <>Your email app should have opened with the trip filled in. If it did not, send it on WhatsApp ({WHATSAPP}) or write to <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>
                : 'This opens your email app with the trip filled in. Nothing is booked or paid until we confirm.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
