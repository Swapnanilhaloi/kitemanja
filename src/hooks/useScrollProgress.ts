import { useEffect, type RefObject } from 'react'

/**
 * Publishes scroll progress (0 to 1) as `--p` on the element, straight to the
 * style attribute so scrolling never re-renders React.
 *
 * - `pin`: progress across the element's pinned travel (height minus one
 *   viewport). For tall sections with a sticky stage inside.
 * - `through`: progress from the element's top entering the viewport bottom
 *   to its bottom leaving the viewport top. For normal-flow sections.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>, mode: 'pin' | 'through' = 'pin') {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0

    const update = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      let p: number
      if (mode === 'pin') {
        const travel = r.height - vh
        p = travel > 0 ? -r.top / travel : r.top <= 0 ? 1 : 0
      } else {
        p = (vh - r.top) / (vh + r.height)
      }
      const clamped = Math.min(1, Math.max(0, p))
      el.style.setProperty('--p', clamped.toFixed(4))
      // Read by the scroll-craft verification harness to tell motion from dead scroll.
      el.dataset.scVerifyState = clamped.toFixed(2)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [ref, mode])
}
