"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { BaseA11yProps } from "./types"

export interface FormShellProps extends BaseA11yProps {
  title: string
  description?: string
  eyebrow?: string
  backLabel?: string
  onBack?: () => void
  actions?: ReactNode
  children: ReactNode
  className?: string
}

export function FormShell({
  id,
  ariaLabel,
  title,
  description,
  eyebrow,
  backLabel = "Volver",
  onBack,
  actions,
  children,
  className,
}: FormShellProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("rounded-xl border border-border bg-card p-6 shadow-sm", className)}
    >
      <header className="flex items-start justify-between gap-4">
        <div>
          {eyebrow ? <p className="text-sm text-muted-foreground">{eyebrow}</p> : null}
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          {description ? <p className="mt-2 text-sm text-muted-foreground">{description}</p> : null}
        </div>

        <div className="flex items-center gap-3">
          {actions}
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {backLabel}
            </button>
          ) : null}
        </div>
      </header>

      <div className="mt-6">{children}</div>
    </section>
  )
}
