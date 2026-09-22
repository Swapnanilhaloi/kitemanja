/** Authored silence: one line on empty navy, so the camp has something to open out of. */
export function Night() {
  return (
    <section className="ground-navy grain night" data-sc-act="flow" aria-label="Where to sleep">
      <div className="wrap relative z-[8]">
        <p className="display soft max-w-[20ch] text-[clamp(1.5rem,3vw,2.4rem)]" style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          The music runs late into the night.
          <br />
          After the last set, you still need somewhere to sleep.
        </p>
      </div>
    </section>
  )
}
