import { useRef } from 'react'
import crowd from '@/assets/gallery/03. Artist.jpg'
import performer from '@/assets/site/hero-performer.webp'
import { festivals } from '@/data/festivals'
import { jumpTo } from '@/hooks/useInView'
import { useScrollProgress } from '@/hooks/useScrollProgress'

/**
 * Four planes: the crowd plate, a stage glow, the headline, and the performer
 * cut out of the same photo. Plate and performer scale from one shared point
 * (the performer's feet) at different rates, so he steps toward you while the
 * crowd barely moves, and his raised hand passes in front of the headline.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null)
  useScrollProgress(ref, 'pin')
  const { ziro, hornbill } = festivals

  return (
    <section id="top" ref={ref} className="hero" data-sc-act="pin" aria-labelledby="hero-title">
      <div className="hero__stage grain" data-sc-stage>
        <div className="hero__frame">
          <img
            className="hero__plate"
            src={crowd}
            alt="Seen from the stage at night: a performer with his hand raised to a packed festival crowd"
            fetchPriority="high"
          />
          <div className="hero__glow" aria-hidden="true" />
          <img className="hero__performer" src={performer} alt="" aria-hidden="true" />
        </div>

        <h1 id="hero-title" className="hero__headline display" data-sc-cue="">Stay inside the festival.</h1>

        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__lower text-[var(--cream)]">
          <div className="hero__intro max-w-xl" data-sc-cue="">
            <p className="lede" style={{ color: 'color-mix(in srgb, var(--cream) 88%, var(--navy))' }}>
              Tents, rooms and trips for {ziro.name} and {hornbill.name}.
            </p>
            <a
              href="#ticket"
              onClick={e => { e.preventDefault(); jumpTo('ticket') }}
              className="btn mt-5"
            >
              Check availability
            </a>
          </div>
          <p className="hero__beat display text-[clamp(1.6rem,3.4vw,2.8rem)]" aria-hidden="true">
            Ziro in September.<br />
            <span style={{ color: 'var(--sky-light)' }}>Hornbill in December.</span>
          </p>
        </div>

        <div className="hero__exit" aria-hidden="true" />
      </div>
    </section>
  )
}
