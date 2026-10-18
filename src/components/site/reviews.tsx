import { Quote, Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { reviews } from "@/data/site"
import { SectionHeading } from "./section-heading"

export function Reviews() {
  return (
    <section id="reviews" className="overflow-hidden bg-navy-900 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="What our customers say" title="Stress-free, start to finish." light />

        <Carousel opts={{ align: "start", loop: true }} className="reveal mt-14">
          <CarouselContent className="-ml-6">
            {reviews.map((r) => (
              <CarouselItem key={r.name} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col gap-6 rounded-sm border border-white/10 bg-white/[0.04] p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex text-star" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                      ))}
                    </span>
                    <Quote className="size-8 text-white/15" />
                  </div>
                  <blockquote className="flex-1 leading-relaxed text-white/85">“{r.text}”</blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="flex size-10 items-center justify-center rounded-full bg-brand-red font-heading text-lg">
                      {r.name[0]}
                    </span>
                    <span className="text-sm font-semibold tracking-wide">{r.name}</span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-10 flex justify-center gap-3">
            <CarouselPrevious className="static size-11 translate-y-0 rounded-sm border-white/30 bg-transparent text-white hover:bg-white hover:text-navy-900" />
            <CarouselNext className="static size-11 translate-y-0 rounded-sm border-white/30 bg-transparent text-white hover:bg-white hover:text-navy-900" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

const partnerLogos = [
  { name: "Cambria", w: 218, h: 52 },
  { name: "Arizona Tile", w: 218, h: 52 },
  { name: "Silestone", w: 218, h: 52 },
  { name: "MSI", w: 158, h: 66 },
  { name: "Dorado", w: 389, h: 129 },
  { name: "Daltile", w: 1423, h: 291 },
  { name: "Q Premium Natural Quartz by MSI", w: 158, h: 75 },
  { name: "Francini", w: 557, h: 151 },
].map((p, i) => ({ ...p, src: `/images/partners/partner-${i + 1}.png` }))

export function Partners() {
  return (
    <section aria-label="Our suppliers and partners" className="border-y border-stone-200 bg-white py-10">
      <p className="eyebrow mb-8 text-center text-muted-foreground">Proud to work with the industry's best suppliers</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {[...partnerLogos, ...partnerLogos].map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={i < partnerLogos.length ? p.name : ""}
              aria-hidden={i >= partnerLogos.length || undefined}
              width={p.w}
              height={p.h}
              loading="lazy"
              className="h-10 w-auto max-w-[160px] object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
