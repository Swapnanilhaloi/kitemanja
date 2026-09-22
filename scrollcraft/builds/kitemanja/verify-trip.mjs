// Interaction + composition checks the scroll harness cannot do.
// Usage: node verify-trip.mjs [url]
import { chromium } from 'playwright-core'
import fs from 'node:fs'

const URL = process.argv[2] ?? 'http://localhost:4510'
const OUT = 'lab/trip'
fs.mkdirSync(OUT, { recursive: true })
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const browser = await chromium.launch({ executablePath: CHROME, headless: true })
const results = []
const check = (name, ok, detail = '') => { results.push({ name, ok, detail }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `  (${detail})` : ''}`) }

async function open(viewport, reduced = false) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1, reducedMotion: reduced ? 'reduce' : 'no-preference' })
  const errors = []
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()) })
  page.on('pageerror', e => errors.push(String(e)))
  await page.goto(URL, { waitUntil: 'domcontentloaded' })
  await page.waitForSelector('html.sc-ready')
  await page.waitForTimeout(500)
  return { page, errors }
}
const scrollToP = (page, sel, p) => page.evaluate(([sel, p]) => {
  const el = document.querySelector(sel)
  const top = el.getBoundingClientRect().top + scrollY
  scrollTo({ top: top + (el.offsetHeight - innerHeight) * p, behavior: 'instant' })
}, [sel, p])
const scrollToEl = (page, sel, offset = 0) => page.evaluate(([sel, offset]) => {
  const el = document.querySelector(sel)
  scrollTo({ top: el.getBoundingClientRect().top + scrollY + offset, behavior: 'instant' })
}, [sel, offset])

// ── Desktop ─────────────────────────────────────────────────────────────
{
  const { page, errors } = await open({ width: 1440, height: 900 })

  for (const p of [0, 0.3, 0.5, 0.7]) {
    await scrollToP(page, '#top', p)
    await page.waitForTimeout(250)
    await page.screenshot({ path: `${OUT}/d-hero-${p}.png` })
  }
  // Does the raised hand overlap the headline box at some point in the travel?
  const overlap = []
  for (const p of [0, 0.2, 0.4, 0.6]) {
    await scrollToP(page, '#top', p)
    await page.waitForTimeout(120)
    overlap.push(await page.evaluate(() => {
      const h = document.querySelector('.hero__headline').getBoundingClientRect()
      const perf = document.querySelector('.hero__performer').getBoundingClientRect()
      // Hand: the top 18% of the cutout box, right half.
      const hand = { l: perf.left + perf.width * 0.55, r: perf.right - perf.width * 0.1, t: perf.top, b: perf.top + perf.height * 0.18 }
      return hand.l < h.right && hand.r > h.left && hand.t < h.bottom && hand.b > h.top
    }))
  }
  check('hero: raised hand crosses the headline during the travel', overlap.some(Boolean), overlap.join(','))
  const edges = await page.evaluate(() => {
    const f = document.querySelector('.hero__frame').getBoundingClientRect()
    return { l: f.left, r: f.right, t: f.top, b: f.bottom, w: innerWidth, h: innerHeight }
  })
  check('hero: photo frame covers the stage', edges.l <= 0.5 && edges.r >= edges.w - 0.5 && edges.t <= 0.5 && edges.b >= edges.h - 0.5, JSON.stringify(edges))

  // Build a trip: Hornbill, Alpine tent, 5 nights, 4 people with a Sedan.
  await scrollToEl(page, '#festival', 200)
  await page.getByRole('radio', { name: /Hornbill Festival/ }).check({ force: true })
  await page.waitForTimeout(300)
  await scrollToP(page, '#camp', 0.85)
  await page.waitForTimeout(500)
  await page.screenshot({ path: `${OUT}/d-camp-hornbill.png` })
  const campCopy = await page.locator('.camp__copy').innerText()
  check('camp: copy follows the festival pick', campCopy.includes('Hornbill Festival') && campCopy.includes('30 November'), campCopy.replace(/\n/g, ' '))

  await scrollToEl(page, '#stay', 0)
  await page.getByRole('radio', { name: /Alpine tent/ }).check({ force: true })
  await scrollToEl(page, '#route', 0)
  await page.getByRole('radio', { name: '5 nights, 6 days' }).check({ force: true })
  await page.waitForTimeout(200)
  const routeText = await page.locator('#route').innerText()
  check('route: 5-night days use the Hornbill region', routeText.includes('Kisama Heritage Village') && routeText.includes('Regional adventure'))

  await scrollToEl(page, '#group', 0)
  await page.waitForTimeout(200)
  await page.screenshot({ path: `${OUT}/d-group-table.png` })
  await page.locator('tr', { hasText: '1 Sedan' }).filter({ hasText: '4 people' }).click()
  await page.waitForTimeout(200)
  // camping-kaziranga-5n, 4 Pax 1 Sedan, Alpine = Rs. 27,500 per person.
  const rail = await page.locator('.rail .ticket__price').innerText()
  check('ticket: price is the published row', rail.includes('Rs. 27,500') && rail.includes('Rs. 1,10,000 for 4'), rail.replace(/\n/g, ' | '))
  await scrollToEl(page, '#group', 300)
  await page.waitForTimeout(700)
  await page.screenshot({ path: `${OUT}/d-rail-filled.png` })
  const punched = await page.locator('.rail .ticket__punch[data-punched="true"]').count()
  check('ticket: all four slots punched', punched === 4, `${punched}/4`)

  // Switching stay to hotel on the 5-night route keeps the 4-person Sedan row only if priced there.
  await scrollToEl(page, '#stay', 0)
  await page.getByRole('radio', { name: /Hotel/ }).check({ force: true })
  await page.waitForTimeout(200)
  const railHotel = await page.locator('.rail .ticket__price').innerText()
  check('ticket: switching stay reprices the same group', railHotel.includes('Rs. 35,500'), railHotel.replace(/\n/g, ' | '))

  // Close: rail docks, editor carries the choices, WhatsApp message carries the trip.
  await page.evaluate(() => scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }))
  await page.waitForTimeout(900)
  await page.screenshot({ path: `${OUT}/d-docked.png` })
  const railState = await page.locator('.rail').getAttribute('data-state')
  check('close: rail docks at the enquiry', railState === 'docked', railState)
  const title = await page.locator('#ticket-title').innerText()
  check('close: headline reflects a complete ticket', title.includes('ready'), title)
  const wa = decodeURIComponent(await page.locator('a', { hasText: 'Or send it on WhatsApp' }).getAttribute('href'))
  check('close: WhatsApp message carries the whole trip', wa.includes('Hornbill Festival') && wa.includes('Hotel') && wa.includes('5 nights, 6 days') && wa.includes('4 people, 1 Sedan') && wa.includes('Rs. 35,500'), wa.split('\n').slice(1).join(' | '))
  const sel = await page.locator('#t-route').inputValue()
  check('close: docked editor shows the chosen route', sel === '5n', sel)

  // Editing in the dock updates the same trip.
  await page.locator('#t-festival').selectOption('ziro')
  const wa2 = decodeURIComponent(await page.locator('a', { hasText: 'Or send it on WhatsApp' }).getAttribute('href'))
  check('close: editing the dock updates the message', wa2.includes('Ziro Music Festival'))

  check('desktop: no console errors', errors.length === 0, errors.join(' / '))
  await page.close()
}

// ── Phone ───────────────────────────────────────────────────────────────
for (const vp of [{ width: 390, height: 844 }, { width: 360, height: 640 }]) {
  const tag = `${vp.width}x${vp.height}`
  const { page, errors } = await open(vp)
  await page.screenshot({ path: `${OUT}/m-${tag}-hero.png` })
  const heroFits = await page.evaluate(() => {
    const h = document.querySelector('.hero__headline').getBoundingClientRect()
    const cta = document.querySelector('.hero__intro .btn').getBoundingClientRect()
    return h.bottom < cta.top && cta.bottom <= innerHeight && h.top >= 56
  })
  check(`${tag}: headline and CTA both visible without overlap`, heroFits)
  await scrollToP(page, '#top', 0.5)
  await page.waitForTimeout(250)
  await page.screenshot({ path: `${OUT}/m-${tag}-hero-mid.png` })
  await scrollToEl(page, '#festival', 0)
  await page.waitForTimeout(700)
  await page.screenshot({ path: `${OUT}/m-${tag}-pick.png` })
  await scrollToEl(page, '#stay', 0)
  await page.getByRole('radio', { name: /Dome tent/ }).check({ force: true })
  await page.waitForTimeout(500)
  await page.screenshot({ path: `${OUT}/m-${tag}-stay.png` })
  await page.locator('.railbar button[aria-expanded]').click()
  await page.waitForTimeout(300)
  await page.screenshot({ path: `${OUT}/m-${tag}-bar-open.png` })
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
  check(`${tag}: no horizontal overflow`, overflow <= 0, `${overflow}px`)
  await scrollToEl(page, '#ticket', 0)
  await page.waitForTimeout(700)
  await page.screenshot({ path: `${OUT}/m-${tag}-ticket.png` })
  check(`${tag}: no console errors`, errors.length === 0, errors.join(' / '))
  await page.close()
}

// ── Reduced motion ──────────────────────────────────────────────────────
{
  const { page } = await open({ width: 1440, height: 900 }, true)
  const h = await page.evaluate(() => ({ hero: document.querySelector('#top').offsetHeight, camp: document.querySelector('#camp').offsetHeight, vh: innerHeight }))
  check('reduced: no pinned travel on hero or camp', h.hero <= h.vh + 1 && h.camp <= h.vh + 1, JSON.stringify(h))
  await scrollToEl(page, '#camp', 0)
  await page.waitForTimeout(300)
  await page.screenshot({ path: `${OUT}/r-camp.png` })
  const campVisible = await page.evaluate(() => getComputedStyle(document.querySelector('.camp__copy')).opacity)
  check('reduced: camp copy fully visible', campVisible === '1', campVisible)
  await page.close()
}

await browser.close()
const failed = results.filter(r => !r.ok)
console.log(`\n${results.length - failed.length}/${results.length} passed`)
process.exit(failed.length ? 1 : 0)
