import { groupLabel } from './quote'
import { useTrip } from './useTrip'

export interface Slot {
  /** Also the id of the chapter the slot jumps to. */
  id: 'festival' | 'stay' | 'route' | 'group'
  label: string
  value: string | null
  detail?: string
}

export function useSlots(): Slot[] {
  const trip = useTrip()
  const stayOnly = trip.route?.id === 'stay'
  return [
    { id: 'festival', label: 'Festival', value: trip.festival.name, detail: trip.festival.dates },
    { id: 'stay', label: 'Stay', value: trip.stay?.name ?? null },
    { id: 'route', label: 'Route', value: trip.route?.name ?? null },
    { id: 'group', label: 'Group', value: stayOnly ? null : groupLabel(trip), detail: stayOnly ? 'Tell us in your enquiry' : undefined },
  ]
}
