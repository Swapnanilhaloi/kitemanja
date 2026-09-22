import { createContext } from 'react'
import type { FestivalId, FestivalProfile } from '@/data/festivals/types'
import type { RateRow, RateTable, Route, RouteId, Stay, StayId } from '@/data/trip'

export interface Trip {
  festivalId: FestivalId
  festival: FestivalProfile
  stay: Stay | null
  route: Route | null
  routes: Route[]
  /** Published rates for the chosen route and stay, when both are chosen. */
  table: RateTable | null
  row: RateRow | null
  setFestival: (id: FestivalId) => void
  setStay: (id: StayId) => void
  setRoute: (id: RouteId) => void
  setRow: (key: string) => void
}

export const TripContext = createContext<Trip | null>(null)
