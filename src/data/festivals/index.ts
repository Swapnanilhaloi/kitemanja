import { activeFestival } from './active'
import { hornbillFestival } from './hornbill'
import type { FestivalId, FestivalProfile } from './types'
import { ziroFestival } from './ziro'

export const festivals: Record<FestivalId, FestivalProfile> = {
  ziro: ziroFestival,
  hornbill: hornbillFestival,
}

export const festivalOrder: FestivalId[] = ['ziro', 'hornbill']

/** The festival the page opens on. Set with switch-festival.ps1. */
export const defaultFestivalId: FestivalId = activeFestival.id
