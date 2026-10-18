import { Faq } from "@/components/site/faq"
import { CtaBand, PageHero } from "@/components/site/hero"
import { Pricing } from "@/components/site/pricing"

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Honest, straightforward pricing."
        intro="Three programs to fit any project and budget — plus a quick estimator to ballpark your fabrication and installation cost."
        image="/images/gallery/kitchen-2.webp"
        position="50% 75%"
      />
      <Pricing />
      <Faq initialCategory="Pricing" className="bg-white" />
      <CtaBand />
    </>
  )
}
