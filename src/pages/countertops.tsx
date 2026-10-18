import { usePageTitle } from "@/hooks/use-reveal"
import { CountertopRooms, EdgeProfiles, Fabrication, InstallPrep, MaterialSwatches, Sinks } from "@/components/site/countertops"
import { CtaBand, PageHero } from "@/components/site/hero"
import { Reviews } from "@/components/site/reviews"

export default function CountertopsPage() {
  usePageTitle("Custom Granite & Quartz Countertops | Fabrication & Installation | Denver Countertops")
  return (
    <>
      <PageHero
        eyebrow="Countertops"
        title="Custom countertops, made in our own shop."
        intro="Digital laser templating, CNC fabrication and professional installation — granite, quartz, quartzite and marble countertops, typically installed 7–10 days after template."
        image="/images/gallery/kitchen-2.webp"
        position="50% 65%"
      />
      <CountertopRooms />
      <Fabrication />
      <EdgeProfiles />
      <Sinks />
      <MaterialSwatches />
      <InstallPrep />
      <Reviews />
      <CtaBand />
    </>
  )
}
