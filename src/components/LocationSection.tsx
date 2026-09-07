import { MapPin, Navigation } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MAPS_URL } from '@/data/site'

const destinations = [
  {
    name: 'Kisama Heritage Village',
    distance: 'Festival HQ',
    description: 'The home of the Hornbill Festival and Kitemanja campsite.',
    primary: true,
  },
  {
    name: 'Kohima',
    distance: '~12 km from Kisama',
    description: "Nagaland's capital — markets, history, and the iconic War Cemetery.",
  },
  {
    name: 'Dimapur',
    distance: '~74 km from Kohima',
    description: 'Main gateway city with the nearest airport and railway station.',
  },
  {
    name: 'Khonoma Village',
    distance: '~20 km from Kohima',
    description: "India's first green village — terraced fields, ancient traditions.",
  },
  {
    name: 'Kaziranga',
    distance: 'On the 5N/6D route',
    description: 'UNESCO World Heritage Site — home of the one-horned rhinoceros.',
  },
]

export function LocationSection() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-brand-cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              eyebrow="The event"
              title="Kisama Heritage Village, Kohima"
              subtitle="Our exclusive campsite sits inside the Hornbill Festival venue — about 12 km from Kohima. Packages start from Dimapur."
            />
            <div className="space-y-3">
              {destinations.map(dest => (
                <div
                  key={dest.name}
                  className={`flex items-start gap-4 p-4 rounded-2xl border ${
                    dest.primary
                      ? 'border-brand-primary/25 bg-white'
                      : 'border-brand-border bg-white'
                  }`}
                >
                  <MapPin size={16} className={`mt-0.5 ${dest.primary ? 'text-brand-primary' : 'text-brand-muted'}`} />
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">{dest.name}</p>
                    <p className="text-xs text-brand-primary mt-0.5">{dest.distance}</p>
                    <p className="text-xs text-brand-muted mt-1">{dest.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-brand-dark transition-colors"
            >
              <Navigation size={14} />
              Get directions
            </a>
          </div>
          <div className="relative overflow-hidden rounded-[28px] aspect-[4/3] bg-brand-dark">
            <img
              src="https://www.kitemanja.com/assets/images/banner/about.jpg"
              alt="Hills around Kisama Heritage Village"
              className="h-full w-full object-cover opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-display text-xl font-bold">Kisama Heritage Village</p>
              <p className="text-sm text-white/80">Kohima, Nagaland</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
