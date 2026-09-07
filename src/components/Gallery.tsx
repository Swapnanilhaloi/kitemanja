import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { galleryImages, galleryCategories, usingLocalGallery, type GalleryImage } from '@/data/gallery'
import { cn } from '@/lib/utils'

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[]
  startIndex: number
  onClose: () => void
}) {
  const [current, setCurrent] = useState(startIndex)

  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, prev, next])

  const img = images[current]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label={`Image lightbox: ${img.alt}`}
    >
      <button onClick={onClose} aria-label="Close lightbox" className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
        <X size={20} />
      </button>
      <button onClick={prev} aria-label="Previous image" className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
        <ChevronLeft size={22} />
      </button>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          className="relative flex items-center justify-center px-16 w-full h-full"
        >
          <img src={img.src} alt={img.alt} className="max-h-[85vh] max-w-full object-contain rounded-lg" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 rounded-full px-4 py-1.5 text-xs text-white/70">
            {img.alt} · {current + 1} / {images.length}
          </div>
        </motion.div>
      </AnimatePresence>
      <button onClick={next} aria-label="Next image" className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
        <ChevronRight size={22} />
      </button>
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-hidden="true" />
    </motion.div>
  )
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Camp Kite Manja"
          title="From the campsite"
          subtitle={usingLocalGallery ? undefined : 'Add your photos to src/assets/gallery — they replace these placeholders as soon as you drop them in.'}
          align="center"
        />

        <div className="mt-2 flex flex-wrap gap-2 justify-center">
          {galleryCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 border cursor-pointer',
                activeCategory === cat
                  ? 'bg-brand-primary text-white border-brand-primary'
                  : 'bg-white text-brand-muted border-brand-border hover:border-brand-primary hover:text-brand-primary'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                onClick={() => setLightboxIndex(i)}
                className={cn(
                  'group relative overflow-hidden rounded-2xl cursor-pointer',
                  i % 7 === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                )}
                aria-label={`View image: ${img.alt}`}
              >
                <img src={img.thumb} alt={img.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox images={filtered} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
