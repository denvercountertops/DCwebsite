import { usePageTitle } from "@/hooks/use-reveal"
import { Gallery } from "@/components/site/gallery"
import { CtaBand, PageHero } from "@/components/site/hero"
import { Reviews } from "@/components/site/reviews"

export default function OurWorkPage() {
  usePageTitle("Our Work | Countertop Gallery | Denver Countertops")
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Inspiration gallery."
        intro="Real Colorado kitchens — templated, fabricated and installed by our own team."
        image="/images/projects/project-1.webp"
        position="50% 55%"
      />
      <Gallery />
      <Reviews />
      <CtaBand />
    </>
  )
}
