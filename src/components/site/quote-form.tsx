import { useState, type FormEvent } from "react"
import { CheckCircle2, Loader2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { business, FORM_ENDPOINT, projectTypes, serviceAreas } from "@/data/site"

export type QuotePreset = { project?: string; message?: string }

type Status = "idle" | "sending" | "sent" | "offline" | "error"

export function QuoteForm({ preset, dark = false }: { preset?: QuotePreset; dark?: boolean }) {
  const [status, setStatus] = useState<Status>("idle")
  const [project, setProject] = useState(preset?.project ?? "")
  const [city, setCity] = useState("")

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const fullName = String(form.get("name") ?? "").trim()
    const [firstName, ...rest] = fullName.split(/\s+/)
    const payload = new URLSearchParams({
      full_name: fullName,
      first_name: firstName ?? "",
      last_name: rest.join(" "),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      project_type: project,
      city,
      message: String(form.get("message") ?? ""),
      source: "denvercounter.com quote form",
      page: window.location.href,
    })
    if (!FORM_ENDPOINT) {
      setStatus("offline")
      return
    }
    setStatus("sending")
    try {
      // GoHighLevel inbound webhooks don't send CORS headers, so post as a simple no-cors request.
      await fetch(FORM_ENDPOINT, { method: "POST", mode: "no-cors", body: payload })
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 className="size-12 text-navy-600" />
        <h3 className="font-heading text-2xl">Thank you!</h3>
        <p className={dark ? "text-white/75" : "text-muted-foreground"}>
          We received your request and will be in touch shortly. Need us sooner? Call{" "}
          <a href={business.phoneHref} className="font-semibold underline">
            {business.phone}
          </a>
          .
        </p>
      </div>
    )
  }

  const labelCls = dark ? "text-white/85" : "text-navy-900"
  const fieldCls = dark
    ? "h-11 rounded-sm border-white/20 bg-white/10 text-white placeholder:text-white/45"
    : "h-11 rounded-sm bg-white"

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="grid gap-1.5">
        <Label htmlFor="q-name" className={labelCls}>Full name</Label>
        <Input id="q-name" name="name" required autoComplete="name" placeholder="Jane Smith" className={fieldCls} />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="q-phone" className={labelCls}>Phone</Label>
        <Input id="q-phone" name="phone" type="tel" required autoComplete="tel" placeholder="(720) 555-0123" className={fieldCls} />
      </div>
      <div className="grid gap-1.5 sm:col-span-2">
        <Label htmlFor="q-email" className={labelCls}>Email</Label>
        <Input id="q-email" name="email" type="email" autoComplete="email" placeholder="you@email.com" className={fieldCls} />
      </div>
      <div className="grid gap-1.5">
        <Label className={labelCls}>Project type</Label>
        <Select value={project} onValueChange={setProject}>
          <SelectTrigger className={`${fieldCls} w-full data-[size=default]:h-11`}>
            <SelectValue placeholder="Choose one" />
          </SelectTrigger>
          <SelectContent>
            {projectTypes.map((p) => (
              <SelectItem key={p} value={p}>{p}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5">
        <Label className={labelCls}>City</Label>
        <Select value={city} onValueChange={setCity}>
          <SelectTrigger className={`${fieldCls} w-full data-[size=default]:h-11`}>
            <SelectValue placeholder="Where's the project?" />
          </SelectTrigger>
          <SelectContent>
            {serviceAreas.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
            <SelectItem value="Other">Other Colorado city</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5 sm:col-span-2">
        <Label htmlFor="q-msg" className={labelCls}>Tell us about your project</Label>
        <Textarea
          id="q-msg"
          name="message"
          rows={4}
          defaultValue={preset?.message}
          placeholder="Approximate size, material you like, timeline…"
          className={dark ? "rounded-sm border-white/20 bg-white/10 text-white placeholder:text-white/45" : "rounded-sm bg-white"}
        />
      </div>

      {status === "offline" && (
        <p role="status" className="rounded-sm border border-brand-red/30 bg-brand-red/10 p-3 text-sm sm:col-span-2">
          Online requests aren't connected yet. Please call us at{" "}
          <a href={business.phoneHref} className="font-semibold underline">{business.phone}</a> and we'll get you a quote right away.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-sm border border-brand-red/30 bg-brand-red/10 p-3 text-sm sm:col-span-2">
          Something went wrong sending your request. Please call{" "}
          <a href={business.phoneHref} className="font-semibold underline">{business.phone}</a>.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={status === "sending"}
          className="h-12 rounded-sm bg-brand-red px-8 text-xs font-semibold tracking-[0.2em] uppercase text-white hover:bg-brand-red-dark"
        >
          {status === "sending" && <Loader2 className="animate-spin" />}
          Request my free quote
        </Button>
        <a
          href={business.phoneHref}
          className={`inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap ${dark ? "text-white/80 hover:text-white" : "text-navy-800 hover:text-navy-600"}`}
        >
          <Phone className="size-4" /> or call {business.phone}
        </a>
      </div>
    </form>
  )
}
