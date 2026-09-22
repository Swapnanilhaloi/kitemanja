import { Camp } from '@/components/trip/Camp'
import { Enquire } from '@/components/trip/Enquire'
import { FestivalPick } from '@/components/trip/FestivalPick'
import { Group } from '@/components/trip/Group'
import { Hero } from '@/components/trip/Hero'
import { Kit } from '@/components/trip/Kit'
import { Night } from '@/components/trip/Night'
import { Photos } from '@/components/trip/Photos'
import { Route } from '@/components/trip/Route'
import { Stays } from '@/components/trip/Stays'

export function Home() {
  return (
    <main>
      <Hero />
      <FestivalPick />
      <Night />
      <Camp />
      <Kit />
      <Stays />
      <Route />
      <Group />
      <Photos />
      <Enquire />
    </main>
  )
}
