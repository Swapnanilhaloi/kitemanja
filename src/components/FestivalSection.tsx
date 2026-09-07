import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export function FestivalSection() {
  return (
    <section id="hornbill" className="py-16 bg-brand-cream">
      <Container>
        <div className="rounded-[28px] bg-brand-dark text-white overflow-hidden grid lg:grid-cols-2">
          <div className="relative min-h-[280px]">
            <img
              src="https://www.kitemanja.com/assets/images/banner/banner.jpg"
              alt="Hornbill Festival cultural celebrations at Kisama Heritage Village"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="p-8 sm:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              The festival of festivals
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Hornbill Festival
            </h2>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} className="text-brand-accent" /> December 1–10
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-brand-accent" /> Kisama Heritage Village, Kohima
              </span>
            </div>
            <p className="mt-5 text-white/70 leading-relaxed">
              Hornbill Festival is celebrating its 25th year. If this biggest festival of the Northeast is on your list — or you’ve been here before — join us for the Silver Jubilee. Camp inside the venue, or stay in boutique hotels and family-run guesthouses.
            </p>
            <p className="mt-3 text-white/70 leading-relaxed">
              We ensure you arrive a day early to attend the inaugural ceremony — a blend of cultural heritage, village tours, local cuisines, adventures, and festive fervour.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
