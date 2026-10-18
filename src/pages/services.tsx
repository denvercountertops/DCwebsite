import { CtaBand, PageHero } from "@/components/site/hero"
import { ServicesDetail } from "@/components/site/services"

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Countertops first — and the work around them."
        intro="Custom countertops are our specialty. When your project needs more, the same in-house team also handles porcelain wall panels, stone repairs and complete kitchen & bath remodels."
        image="/images/gallery/kitchen-5.webp"
        position="50% 45%"
      />
      <ServicesDetail />
      <CtaBand />
    </>
  )
}
