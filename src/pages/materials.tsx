import { CtaBand, PageHero } from "@/components/site/hero"
import { Materials } from "@/components/site/materials"
import { Partners } from "@/components/site/reviews"

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Materials"
        title="Find the right stone for your home."
        intro="Granite, quartz, quartzite, marble and soapstone countertops — we carry a huge selection, with over 70 granite variations in stock."
        image="/images/marble.jpg"
        position="30% 50%"
      />
      <Materials />
      <Partners />
      <CtaBand />
    </>
  )
}
