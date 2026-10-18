import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { gallery } from "@/data/site"
import { SectionHeading } from "./section-heading"

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const open = index !== null

  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    []
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, step])

  return (
    <section id="gallery" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Inspiration gallery" title="Our recent work." align="left">
            Waterfall islands, full-height backsplashes, outdoor kitchens and more — fabricated and installed by our team.
            Tap any photo to view it full size.
          </SectionHeading>
          <p className="reveal text-sm text-muted-foreground">{gallery.length} projects</p>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setIndex(i)}
              className="reveal group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm focus-visible:ring-3 focus-visible:ring-navy-600 focus-visible:outline-none"
              style={{ transitionDelay: `${(i % 6) * 70}ms` }}
              aria-label={`View photo: ${g.alt}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-navy-950/50 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <Expand className="size-5 text-white" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent className="max-w-[min(1100px,calc(100%-2rem))] border-0 bg-navy-950 p-2 ring-0 sm:max-w-[min(1100px,calc(100%-2rem))] [&>[data-slot=dialog-close]]:bg-white/90">
          <DialogTitle className="sr-only">Project photo</DialogTitle>
          <DialogDescription className="sr-only">{index !== null ? gallery[index].alt : ""}</DialogDescription>
          {index !== null && (
            <div className="relative">
              <img src={gallery[index].src} alt={gallery[index].alt} className="max-h-[80vh] w-full rounded-sm object-contain" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-3">
                <Button size="icon-lg" variant="secondary" aria-label="Previous photo" onClick={() => step(-1)}>
                  <ChevronLeft />
                </Button>
                <span className="rounded-sm bg-navy-950/70 px-3 py-1 text-xs text-white tabular-nums">
                  {index + 1} / {gallery.length}
                </span>
                <Button size="icon-lg" variant="secondary" aria-label="Next photo" onClick={() => step(1)}>
                  <ChevronRight />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
