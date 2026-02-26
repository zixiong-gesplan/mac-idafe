import type { ReactNode } from "react"

interface BenefitCardProps {
  icon: ReactNode
  title: string
  description: string
  ctaLabel?: string
}

export function BenefitCard({ icon, title, description, ctaLabel }: BenefitCardProps) {
  return (
    <article className="group benefit-card flex h-full flex-col rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div
        className="benefit-icon flex h-12 w-12 items-center justify-center rounded-full bg-cta/20 text-primary transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
        aria-hidden
      >
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70">{description}</p>
      {ctaLabel ? (
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
          {ctaLabel}
          <span aria-hidden>→</span>
        </span>
      ) : (
        <span className="mt-auto" />
      )}
    </article>
  )
}

