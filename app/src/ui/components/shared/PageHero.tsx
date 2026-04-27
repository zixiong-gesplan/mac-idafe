import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { Align, BaseA11yProps } from "./types"

export interface PageHeroProps extends BaseA11yProps {
  title: string
  description?: string
  eyebrow?: string
  align?: Align
  actions?: ReactNode
  as?: "header" | "section"
  className?: string
}

export function PageHero({
  id,
  ariaLabel,
  title,
  description,
  eyebrow,
  align = "left",
  actions,
  as = "section",
  className,
}: PageHeroProps) {
  const Component = as

  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "w-full",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
          {eyebrow}
        </p>
      ) : null}
      <h1 className={cn("font-bold text-foreground", eyebrow ? "mt-4" : "", "text-4xl md:text-5xl")}>
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/70">{description}</p>
      ) : null}
      {actions ? <div className="mt-6">{actions}</div> : null}
    </Component>
  )
}
