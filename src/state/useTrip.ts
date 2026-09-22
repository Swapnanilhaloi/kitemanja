import { useContext } from 'react'
import { TripContext } from './tripContext'

export function useTrip() {
  const trip = useContext(TripContext)
  if (!trip) throw new Error('useTrip must be used inside <TripProvider>')
  return trip
}
