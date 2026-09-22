import { useEffect } from 'react'
import { PageFoot } from '@/components/trip/PageFoot'
import { TicketRail } from '@/components/trip/TicketRail'
import { TopBar } from '@/components/trip/TopBar'
import { Home } from '@/pages/Home'
import { TripProvider } from '@/state/TripProvider'

export default function App() {
  // Signals "fonts and first paint done" to the scroll-craft screenshot harness.
  useEffect(() => {
    document.fonts.ready.then(() => document.documentElement.classList.add('sc-ready'))
  }, [])

  return (
    <TripProvider>
      <TopBar />
      <Home />
      <PageFoot />
      <TicketRail />
    </TripProvider>
  )
}
