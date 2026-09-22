import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { EMAIL, FESTIVAL_NAME, FESTIVAL_PLACE, WHATSAPP, WHATSAPP_URL } from '@/data/site'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const stay = String(data.get('stay') || '')
    const group = String(data.get('group') || '')
    const when = String(data.get('when') || '')
    const notes = String(data.get('notes') || '')
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nStay: ${stay}\nGroup: ${group}\nWhen: ${when}\nNotes: ${notes}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Booking enquiry from ' + name)}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary">Contact us</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Book your desired package
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Tell us your dates, group size, and whether you want a Dome tent, Alpine tent, guesthouse or hotel. We will reply with availability for {FESTIVAL_NAME} in {FESTIVAL_PLACE}.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`mailto:${EMAIL}`} className="block text-brand-ink hover:text-brand-primary">
                {EMAIL}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-brand-ink hover:text-brand-primary">
                WhatsApp · {WHATSAPP}
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 lg:col-start-7 rounded-[28px] bg-brand-cream border border-brand-border p-5 sm:p-6 space-y-3"
          >
            <h3 className="font-display text-2xl font-bold text-brand-ink">Send an enquiry</h3>
            <p className="text-sm text-brand-muted">No payment is taken on this form.</p>

            <label className="block">
              <span className="text-xs font-medium text-brand-ink">Your name</span>
              <input required name="name" className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-primary" />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-brand-ink">Email address</span>
              <input required type="email" name="email" className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-primary" />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-brand-ink">Stay type</span>
              <select required name="stay" defaultValue="" className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-primary">
                <option value="" disabled>Select</option>
                <option>Dome Tent</option>
                <option>Alpine Tent</option>
                <option>Family Run Guest House</option>
                <option>Hotel</option>
                <option>3 Nights / 4 Days package</option>
                <option>5 Nights / 6 Days package</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-medium text-brand-ink">Number of guests</span>
              <select required name="group" defaultValue="" className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-primary">
                <option value="" disabled>Select</option>
                <option>2 Pax</option>
                <option>4 Pax</option>
                <option>6 Pax</option>
                <option>8 Pax</option>
                <option>10 Pax</option>
                <option>Other / mixed group</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-medium text-brand-ink">Festival dates</span>
              <input name="when" placeholder="e.g. 25–28 September" className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-primary" />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-brand-ink">Notes</span>
              <textarea name="notes" rows={3} placeholder="Vehicle preference, arrival details, extra adults or children…" className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-primary resize-y" />
            </label>

            <button type="submit" className="w-full rounded-full bg-brand-primary py-3.5 text-sm font-semibold text-white hover:bg-brand-accent transition-colors cursor-pointer">
              Contact us to book
            </button>
            <p className="text-xs text-brand-muted">
              {sent ? 'Your email app should open with the enquiry. If it does not, write to us directly.' : 'We will confirm tents, rooms, and transfers for your dates.'}
            </p>
          </motion.form>
        </div>
      </Container>
    </section>
  )
}
