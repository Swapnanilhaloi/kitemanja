import { useEffect, useState, type RefObject } from 'react'

/** True once the element has entered the viewport (and stays true). */
export function useInView(ref: RefObject<Element | null>, threshold = 0.2) {
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || seen) return
    const obs = new IntersectionObserver(
      entries => { if (entries.some(e => e.isIntersecting)) setSeen(true) },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, threshold, seen])

  return seen
}

/** Id of the chapter crossing the middle of the viewport, or null. */
export function useActiveChapter(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(',')

  useEffect(() => {
    const els = key.split(',').map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      entries => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [key])

  return active
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function jumpTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}
