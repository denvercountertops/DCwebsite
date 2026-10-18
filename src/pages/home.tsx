import { CountertopRooms, Fabrication, MaterialSwatches } from "@/components/site/countertops"
import { Deals } from "@/components/site/deals"
import { CtaBand, Hero } from "@/components/site/hero"
import { Intro } from "@/components/site/intro"
import { WhyUs } from "@/components/site/process"
import { Partners, Reviews } from "@/components/site/reviews"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <CountertopRooms />
      <Fabrication showLink />
      <MaterialSwatches />
      <Deals limit={3} />
      <WhyUs />
      <Reviews />
      <Partners />
      <CtaBand />
    </>
  )
}
