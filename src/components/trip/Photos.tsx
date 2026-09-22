import { galleryImages } from '@/data/gallery'

/**
 * Drop photos into src/assets/gallery and they appear here, in file-name order.
 * The first leads at double size. With exactly four, the second runs tall so
 * the grid closes without an empty cell.
 */
export function Photos() {
  const photos = galleryImages.slice(0, 5)

  return (
    <section id="photos" className="ground-navy grain chapter" data-sc-act="gallery" aria-labelledby="photos-title">
      <div className="wrap relative z-[8]">
        <h2 id="photos-title" className="title">The crowd you are joining</h2>
        <div className="photos mt-10">
          {photos.map((img, i) => (
            <figure key={img.id} className={photos.length === 4 && i === 1 ? 'photos__tall' : undefined}>
              <img src={img.src} alt={`Festival photo: ${img.alt}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
