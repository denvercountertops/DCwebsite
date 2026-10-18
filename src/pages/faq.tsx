import { usePageTitle } from "@/hooks/use-reveal"
import { Faq } from "@/components/site/faq"
import { CtaBand, PageHero } from "@/components/site/hero"

export default function FaqPage() {
  usePageTitle("Countertop FAQ | Denver Countertops")
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        intro="Answers about materials, pricing, our process, installation and care."
        image="/images/gallery/kitchen-5.webp"
        position="50% 25%"
      />
      <Faq />
      <CtaBand />
    </>
  )
}
