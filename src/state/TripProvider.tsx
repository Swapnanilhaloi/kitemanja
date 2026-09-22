import { useMemo, useState, type ReactNode } from 'react'
import { defaultFestivalId, festivals } from '@/data/festivals'
import type { FestivalId } from '@/data/festivals/types'
import { rateTable, routesFor, stayById, type RouteId, type StayId } from '@/data/trip'
import { TripContext, type Trip } from './tripContext'

export function TripProvider({ children }: { children: ReactNode }) {
  const [festivalId, setFestival] = useState<FestivalId>(defaultFestivalId)
  const [stayId, setStay] = useState<StayId | null>(null)
  const [routeId, setRoute] = useState<RouteId | null>(null)
  const [rowKey, setRow] = useState<string | null>(null)

  const trip = useMemo<Trip>(() => {
    const festival = festivals[festivalId]
    const routes = routesFor(festival)
    const table = stayId && routeId ? rateTable(routeId, stayId) : null
    // A group picked against another table carries over only if this
    // table prices the same group size and vehicle; otherwise it clears.
    const row = table?.rows.find(r => r.key === rowKey) ?? null
    return {
      festivalId,
      festival,
      stay: stayId ? stayById(stayId) : null,
      route: routes.find(r => r.id === routeId) ?? null,
      routes,
      table,
      row,
      setFestival,
      setStay,
      setRoute,
      setRow,
    }
  }, [festivalId, stayId, routeId, rowKey])

  return <TripContext.Provider value={trip}>{children}</TripContext.Provider>
}
