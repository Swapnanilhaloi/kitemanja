# KiteManja redesign — brief

**Self-authored under explicit creative delegation.** The user said "make u re design the website and remember the color design used in this website" after being offered the interview. Answers below are authored decisions, not quotes, except where marked. Evidence comes from the repo and the company's own photos; assumptions are labelled.

## The eight topics

1. **Vibe.** Warm, outdoorsy, festival-night, trustworthy. References: a paper festival wristband and ticket stub; a well-thumbed travel itinerary; night photographs from the grass in front of a bamboo stage.
2. **Journey.** Festival pulse first, then *which festival*, then the problem (where do you sleep), then the answer (camp inside the venue), then what the camp gives you, then choose a stay, choose a route, say who is coming and see the real price, see faces from the festival, send the enquiry with everything already filled in.
3. **Energy.** Loud at the open (night stage). Drops to near silence just before the camp reveal. Calm and practical through the choices. Warm again at the photos. Settled at the end.
4. **Feeling and the one moment.** Pulse, ownership, a small doubt, relief, comfort, choosing, momentum, clarity, belonging, readiness. **The moment:** "It went quiet, then the whole valley opened up and it said you'd be camping right there."
5. **What no other site does.** *(Authored.)* The page builds your trip while you read it: a festival ticket fills in with each choice, works out the real per-person price from the published rate table, and at the end *is* the enquiry.
6. **Range.** Warm editorial with a practical, ticketed layer. Not premium-minimal dark luxury; this is a festival company.
7. **One world or scenes.** Distinct scenes. Two festivals, a camp, rooms, and a route are separate places.
8. **Assets.** Real only, no generation (no `KIE_AI_API_KEY`, and the real photos are better). Four Ziro festival photos in `src/assets/gallery`; the company's own Hornbill dance photo, camp tent and hammock photo, hotel room and guesthouse room photos (downloaded from kitemanja.com into `src/assets/site`); logo; the full rate tables in `src/data/pricing.ts`. Performer cutout made locally with rembg from `03. Artist.jpg`.

## Business answers

- **What it is.** KiteManja sells stays (Dome tent, Alpine tent, family guesthouse, hotel) and 3-night / 5-night packages with transfers, for Ziro Music Festival (Arunachal Pradesh) and Hornbill Festival (Nagaland).
- **Believe by the end.** "KiteManja is the easy way to actually stay at the festival."
- **The one action, one label.** **Check availability.** Used everywhere. Honest: the form sends an enquiry, it does not book or take payment.
- **Both festivals.** Both on one page. The visitor picks one and everything festival-specific follows the pick. The switch script still sets the default.

## Colour (locked by the user)

Palette from `src/index.css`, unchanged: navy `#062240` and cream `#f2f7fb` grounds, ink `#0d2233`, muted `#5a7a96`, border `#c8dce9`. Accent is one hue at two lightnesses: sky `#0d74bb` on cream, light sky `#3a9fd6` on navy (the taste floor's two-ground exception). Lime `#8dc740` owns exactly one role: the ticket's filled/punched state.

## Grammar: Trip ticket (new)

- **Fits:** services a visitor assembles from options (travel, stays, events hospitality).
- **Feels like:** packing. Each chapter asks one question; the answer sticks to the ticket.
- **Nav:** the ticket *is* the nav. Its slots (Festival, Stay, Route, Group) show the current choice and jump to their chapter. The top bar carries only the wordmark and the one CTA.
- **Sequence:** context before the first question only; then questions in the order a booking is made. Admin (prices, notes) lives inside the question that needs it, never as its own pitch section.
- **Hero:** a layered scene with the headline between planes.
- **Close:** the ticket docks and becomes the enquiry, pre-filled. No button island.
- **Bans:** kinetic headline stacks, spotlight, magnetic CTA, card rails with tilt, pinned crossfade type acts, invented urgency or testimonials, any CTA that throws away the visitor's choices, identical icon-card grids.

Why not the eight defined grammars: filmic one-shot has no place for choices; chaptered editorial's title-page hero conflicts with the layered-hero baseline; live surface needs a product UI; continuous world is for one geography and this has two festivals plus rooms; typographic poster wastes the best asset (real photos); gallery/catalog forces one label schema onto a festival, a tent and a route; split stage needs an argument where one side wins; rhythmic cutlist bans the calm the price chapters need.

## Signature move

**The trip ticket.** A perforated festival ticket pinned to the page edge (bottom bar on phones). Each slot fills as the visitor chooses; passing a chapter punches its slot in lime; the price line recomputes from the actual rate table for the chosen route, stay and group (per person, and total for the group). At the close the ticket docks into the page and becomes the enquiry form, so the email or WhatsApp message arrives already describing the trip.

**Tell someone:** "It's the site where you pick your festival and your tent while you scroll, and at the bottom your ticket's already filled in with the price, you just hit send."

## Feeling curve

| # | Act | Feeling | What causes it |
|---|---|---|---|
| 1 | Hero | Pulse | Standing behind the performer; the headline sits in the night sky behind his raised hand; the crowd comes toward you as you scroll (parallax planes, pinned) |
| 2 | Pick | Ownership | Two festivals side by side, real dates; choosing one re-dates and re-places the whole page (reveal + selection) |
| 3 | Night | Doubt | Authored silence: one small line on navy, lots of empty ground (flow) |
| 4 | Camp | **Relief (peak)** | A narrow window in the dark opens to the festival grounds in daylight, full bleed; "Camp inside the venue." (clip-path reveal, pinned, largest span) |
| 5 | Kit | Comfort | Plain facts about what is in the tent, next to the real hammock photo (flow, masked media column) |
| 6 | Stays | Choosing | Four real places to sleep, with real photos and prices; pick one (catalog list + sticky preview) |
| 7 | Route | Momentum | Day by day, the route draws itself down the page as you read (SVG stroke from scroll) |
| 8 | Group | Clarity | Tap your group size; the real rate row lights up and the ticket shows your price (flow, table) |
| 9 | Faces | Belonging | The crowd, close, from the grass (gallery grid) |
| 10 | Ticket | Readiness | The ticket docks, fields filled, one action (close holds) |

**Peak:** act 4. "It went quiet, then the whole valley opened up and it said you'd be camping right there." Gets the best photo per festival, the silence of act 3 before it, and the longest pinned span.

**Authored silence:** act 3 is intentionally mostly empty navy. It is not dead scroll.

## Honesty notes

- Prices are only those in `pricing.ts` / `accommodations.ts`. Totals are simple arithmetic on them. Guesthouse and hotel nightly prices do not exist, so they show "Price on request" for stay-only.
- The 5-night camping package's second leg is labelled "regional adventure" (as the data does), not Kaziranga, because it is unconfirmed whether it applies to Ziro. *(Assumption flagged to user.)*
- `stories.ts` testimonials are not used: their origin is unknown.
- Both tents share one camp photo because no separate Dome/Alpine photos exist.

## Feel check (after build, scrolled cold, then diffed)

| # | Intended | Felt | Note |
|---|---|---|---|
| 1 | Pulse | Pulse | Performer steps toward you, hand crosses "festival." |
| 2 | Ownership | Choice | Close enough; the pick visibly re-dates the rest of the page |
| 3 | Doubt | Quiet | Reads as authored silence, not a failed load |
| 4 | Relief (peak) | Relief, opening out | Largest visual change and longest span (300svh) on the page |
| 5 | Comfort | Reassured | Plain facts next to a real photo |
| 6 | Choosing | Shopping | Weakest seam: 5 and 6 are both light, practical grounds back to back. Distinct enough (list vs. live choice) to keep; first candidate to merge if the page needs tightening |
| 7 | Momentum | Momentum | The drawn line carries it |
| 8 | Clarity | Clarity | Real rate table, selected row, ticket reprices |
| 9 | Belonging | Warmth | Faces |
| 10 | Readiness | Ready | Ticket docks, holds, fields pre-filled; the page finishes rather than trails |

Changes made from verification: hero frame re-composed so the hand actually occludes the headline (first build missed it by ~125px); festival cards wiped in too late (blank panels); enquiry headline claimed "ready" with nothing chosen; 43px phone overflow from the pre-dock offset; phone bar summary truncated.
