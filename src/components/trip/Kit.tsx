import campTent from '@/assets/site/camp-tent.jpg'
import { useTrip } from '@/state/useTrip'

export function Kit() {
  const { festival } = useTrip()

  const facts: [string, string][] = [
    ['Tent', 'Dome or Alpine, pitched and ready before you arrive. No setup.'],
    ['Bedding', 'Sleeping bag, blanket and an inflatable pillow for every guest.'],
    ['Meals', `Breakfast and dinner from our ${festival.kitchen}.`],
    ['Water', 'Clean water around the clock. Hot water on request.'],
    ['Bathrooms', 'Eco-friendly toilets and bathrooms.'],
    ['Lobby', 'A shared space to sit, meet people and charge your phone.'],
  ]

  return (
    <section id="kit" className="ground-cream chapter" data-sc-act="flow" aria-labelledby="kit-title">
      <div className="wrap kit">
        <figure className="kit__photo m-0">
          <img src={campTent} alt="An orange tent and a hammock among the trees at the Kite Manja camp" width={534} height={534} loading="lazy" />
        </figure>
        <div>
          <h2 id="kit-title" className="title">What is in the tent</h2>
          <p className="lede soft mt-4">The same at every camp, from the first night to the last.</p>
          <dl className="facts mt-8">
            {facts.map(([term, detail]) => (
              <div key={term}>
                <dt className="label accent">{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
