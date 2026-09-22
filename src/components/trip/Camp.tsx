import { useRef } from 'react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useTrip } from '@/state/useTrip'

/**
 * The peak. A narrow window in the dark opens out to the festival grounds,
 * full bleed, and the page says the one line addressed to "you".
 * The longest pinned span on the page.
 */
export function Camp() {
  const ref = useRef<HTMLElement>(null)
  useScrollProgress(ref, 'pin')
  const { festival } = useTrip()

  return (
    <section id="camp" ref={ref} className="camp" data-sc-act="pin" aria-labelledby="camp-title">
      <div className="camp__stage" data-sc-stage>
        <div className="camp__media" data-sc-reveal>
          <img
            key={festival.id}
            src={festival.scene.src}
            alt={festival.scene.alt}
            style={{ objectPosition: festival.scene.position }}
            loading="lazy"
          />
        </div>
        <p className="camp__whisper label" style={{ color: 'var(--soft-on-navy)' }} aria-hidden="true">
          {festival.region}
        </p>
        <div className="camp__scrim" aria-hidden="true" />
        <div className="camp__copy" data-sc-cue="">
          <h2 id="camp-title" className="display max-w-[14ch] text-[clamp(2.6rem,6.6vw,6rem)]">
            You wake up inside the festival.
          </h2>
          <p className="lede mt-5" style={{ color: 'color-mix(in srgb, var(--cream) 90%, var(--navy))' }}>
            Our camp is pitched inside the {festival.name} venue, ready from {festival.campOpens}.
          </p>
        </div>
      </div>
    </section>
  )
}
