import { Calendar, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { BANNER_URL, CAMP_DESCRIPTION, CAMP_OPENS, FESTIVAL_DATES, FESTIVAL_NAME, FESTIVAL_PLACE } from '@/data/site'

export function FestivalSection() {
  return (
    <section id="festival" className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="rounded-[28px] bg-brand-dark text-white overflow-hidden grid lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[420px]">
            <img
              src={BANNER_URL}
              alt={`${FESTIVAL_NAME} at ${FESTIVAL_PLACE}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              The festival of festivals
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {FESTIVAL_NAME}
            </h2>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/75">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} className="text-brand-accent" /> {FESTIVAL_DATES}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-brand-accent" /> {FESTIVAL_PLACE}
              </span>
            </div>
            <p className="mt-5 text-white/75 leading-relaxed">
              {CAMP_DESCRIPTION}
            </p>
            <p className="mt-3 text-white/75 leading-relaxed">
              The camp is operational from {CAMP_OPENS} onwards so you can arrive a day early for the inaugural ceremony. Stay on site, or choose a family-run guesthouse or hotel.
            </p>
            <div className="mt-8">
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-accent cursor-pointer transition-colors"
              >
                See package tours
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
