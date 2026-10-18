import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
  light = false,
  className,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  align?: "center" | "left"
  light?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        "reveal flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <p className={cn("eyebrow flex items-center gap-3", light ? "text-white/70" : "text-brand-red")}>
        <span className={cn("h-px w-8", light ? "bg-white/40" : "bg-brand-red/60")} />
        {eyebrow}
        {align === "center" && <span className={cn("h-px w-8", light ? "bg-white/40" : "bg-brand-red/60")} />}
      </p>
      <h2 className={cn("font-heading text-4xl leading-[1.08] md:text-5xl", light ? "text-white" : "text-navy-900")}>
        {title}
      </h2>
      {children && (
        <div className={cn("text-base leading-relaxed md:text-lg", light ? "text-white/75" : "text-muted-foreground")}>
          {children}
        </div>
      )}
    </div>
  )
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z" />
    </svg>
  )
}
