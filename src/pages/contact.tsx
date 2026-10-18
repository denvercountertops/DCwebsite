import { usePageTitle } from "@/hooks/use-reveal"
import { Contact } from "@/components/site/contact"

export default function ContactPage() {
  usePageTitle("Contact Us | Free Countertop Quote | Denver Countertops")
  return <Contact />
}
