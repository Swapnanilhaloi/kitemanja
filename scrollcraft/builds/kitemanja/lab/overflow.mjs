import { chromium } from 'playwright-core'
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' })
const p = await b.newPage({ viewport: { width: 390, height: 844 } })
await p.goto('http://localhost:4510'); await p.waitForSelector('html.sc-ready')
console.log(await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > innerWidth + 1 && !e.closest('.hero__stage,.camp__stage,[class*="overflow-x-auto"]')).slice(0, 8).map(e => `${e.tagName}.${e.className} right=${Math.round(e.getBoundingClientRect().right)}`)))
await b.close()
