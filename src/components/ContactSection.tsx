import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { EMAIL, WHATSAPP, WHATSAPP_URL } from '@/data/site'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const experience = String(data.get('experience') || '')
    const group = String(data.get('group') || '')
    const when = String(data.get('when') || '')
    const notes = String(data.get('notes') || '')
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nExperience: ${experience}\nGroup: ${group}\nWhen: ${when}\nNotes: ${notes}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Trip request from ' + name)}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary">Let’s make a plan</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Your next good story starts here.
            </h2>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Tell us what you’re drawn to — a festival, a trail, a table full of local food. We’ll shape the rest around you.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`mailto:${EMAIL}`} className="block text-brand-ink hover:text-brand-primary">
                ✉ Say hello · {EMAIL}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-brand-ink hover:text-brand-primary">
                ↗ WhatsApp us · {WHATSAPP}
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-[28px] bg-brand-cream border border-brand-border p-6 sm:p-8 space-y-4"
          >
            <h3 className="font-display text-2xl font-bold text-brand-ink">Plan your escape</h3>
            <p className="text-sm text-brand-muted">A few details and we’ll take it from here.</p>

            <label className="block">
              <span className="text-xs font-medium text-brand-ink">Your name</span>
              <input required name="name" placeholder="e.g. Vikramaditya Roy" className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-primary" />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-brand-ink">Email address</span>
              <input required type="email" name="email" placeholder="you@example.com" className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-primary" />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-brand-ink">What calls you?</span>
              <select required name="experience" defaultValue="" className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-primary">
                <option value="" disabled>Select an experience</option>
                <option>Hornbill Festival Camp</option>
                <option>Dzukou & Khonoma Trails</option>
                <option>Kaziranga & River Trails</option>
                <option>Something custom</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-medium text-brand-ink">Who’s coming?</span>
              <select required name="group" defaultValue="" className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-primary">
                <option value="" disabled>Number of travellers</option>
                <option>Just me</option>
                <option>2 people</option>
                <option>3–5 people</option>
                <option>6+ people</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-medium text-brand-ink">When are you thinking?</span>
              <input name="when" placeholder="e.g. December 2026" className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-primary" />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-brand-ink">Anything we should know?</span>
              <textarea name="notes" rows={4} placeholder="Dietary preferences, pickup needs, or the kind of trip you have in mind..." className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-primary resize-y" />
            </label>

            <button type="submit" className="w-full rounded-full bg-brand-primary py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#0b67a8] cursor-pointer">
              Send trip request
            </button>
            <p className="text-xs text-brand-muted">
              {sent ? 'Your email client should open with the details. We usually reply within 12 hours.' : 'We usually reply within 12 hours. No payment is taken here.'}
            </p>
          </motion.form>
        </div>
      </Container>
    </section>
  )
}
