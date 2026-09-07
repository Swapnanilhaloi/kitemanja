import { Hero } from '@/components/Hero'
import { IntroSection } from '@/components/IntroSection'
import { FestivalSection } from '@/components/FestivalSection'
import { ExperiencesSection } from '@/components/ExperiencesSection'
import { AccommodationSection } from '@/components/AccommodationSection'
import { FacilitiesSection } from '@/components/FacilitiesSection'
import { PackagesSection } from '@/components/PackagesSection'
import { PricingSection } from '@/components/PricingSection'
import { Gallery } from '@/components/Gallery'
import { LocationSection } from '@/components/LocationSection'
import { ContactSection } from '@/components/ContactSection'

export function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <FestivalSection />
      <ExperiencesSection />
      <AccommodationSection />
      <FacilitiesSection />
      <PackagesSection />
      <PricingSection />
      <Gallery />
      <LocationSection />
      <ContactSection />
    </main>
  )
}
