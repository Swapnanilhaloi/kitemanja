import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { stories } from '@/data/stories'

export function StoriesSection() {
  return (
    <section id="stories" className="py-20 lg:py-28 bg-brand-cream">
      <Container>
        <SectionHeading
          eyebrow="Words around the fire"
          title="Come for the place. Stay for the people."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.blockquote
              key={story.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-[24px] bg-white border border-brand-border p-6"
            >
              <p className="text-sm leading-relaxed text-brand-ink">“{story.quote}”</p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-brand-ink">{story.name}</p>
                <p className="text-xs text-brand-muted mt-0.5">{story.place}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </section>
  )
}
