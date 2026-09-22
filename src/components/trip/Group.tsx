import { formatRs } from '@/data/trip'
import { jumpTo } from '@/hooks/useInView'
import { quote } from '@/state/quote'
import { useTrip } from '@/state/useTrip'

export function Group() {
  const trip = useTrip()
  const { stay, route, table, row } = trip
  const q = quote(trip)

  return (
    <section id="group" className="ground-cream chapter" data-sc-act="flow" aria-labelledby="group-title">
      <div className="wrap">
        <h2 id="group-title" className="title">Who is coming</h2>

        {(!stay || !route) && (
          <div className="mt-6">
            <p className="lede soft">
              {!stay && !route && 'Pick where you sleep and how long you are staying, and your group price appears here.'}
              {!stay && route && 'Pick where you sleep, and your group price appears here.'}
              {stay && !route && 'Pick how long you are staying, and your group price appears here.'}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {!stay && <button type="button" className="btn btn--ghost" onClick={() => jumpTo('stay')}>Choose a stay</button>}
              {!route && <button type="button" className="btn btn--ghost" onClick={() => jumpTo('route')}>Choose a route</button>}
            </div>
          </div>
        )}

        {stay && route?.id === 'stay' && (
          <div className="mt-6 max-w-2xl">
            <p className="lede soft">
              Stay-only bookings are priced per night. Tell us your dates and how many of you there are when you check availability.
            </p>
            <p className="mt-6">
              <span className="display text-3xl num">{q.main}</span>
              <span className="soft ml-2">{q.sub}</span>
            </p>
          </div>
        )}

        {stay && table && route && (
          <>
            <p className="lede soft mt-4">
              {route.name} in a {stay.name.toLowerCase()}. Pick your group size and vehicle. These are our published per-person rates.
            </p>

            <div className="mt-8 overflow-x-auto rounded-[var(--r)] bg-[color-mix(in_srgb,var(--white)_40%,var(--cream))]">
              <table className="rates min-w-[30rem]">
                <caption className="sr-only">Per-person price for {route.name}, {stay.name}, by group size and vehicle</caption>
                <thead>
                  <tr>
                    <th scope="col">Group</th>
                    <th scope="col">Vehicle</th>
                    <th scope="col">Per person</th>
                    <th scope="col">Group total</th>
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map(r => {
                    const selected = row?.key === r.key
                    return (
                      <tr key={r.key} data-selected={selected} onClick={() => trip.setRow(r.key)}>
                        <td>
                          <label className="flex cursor-pointer items-center gap-2.5">
                            <input
                              type="radio"
                              name="group"
                              value={r.key}
                              checked={selected}
                              onChange={() => trip.setRow(r.key)}
                              className="h-4 w-4 accent-[var(--sky)]"
                            />
                            {r.pax} people
                          </label>
                        </td>
                        <td>{r.vehicle}</td>
                        <td>{formatRs(r.perPerson)}</td>
                        <td>{formatRs(r.perPerson * r.pax)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {table.notes.length > 0 && (
              <ul className="soft mt-4 space-y-1 text-sm">
                {table.notes.map(n => <li key={n}>{n}</li>)}
              </ul>
            )}
          </>
        )}
      </div>
    </section>
  )
}
