import { Deals } from "@/components/site/deals"
import { CtaBand, PageHero } from "@/components/site/hero"

export default function DealsPage() {
  return (
    <>
      <PageHero
        eyebrow="Slab Deals"
        title="Slab liquidation."
        intro="Overstock granite, quartz and quartzite at a fraction of the regular price. Inventory changes daily — place a slab on hold before it's gone."
        image="/images/marble.jpg"
      />
      <Deals />
      <CtaBand />
    </>
  )
}
