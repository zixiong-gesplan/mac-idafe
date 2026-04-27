import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { BaseA11yProps } from "./types"

export interface EmptyStateProps extends BaseA11yProps {
  title: string
  message?: string
  icon?: ReactNode
  action?: ReactNode
  tone?: "neutral" | "soft"
  className?: string
}

export function EmptyState({
  id,
  ariaLabel,
  title,
  message,
  icon,
  action,
  tone = "neutral",
  className,
}: EmptyStateProps) {
  return (
    <div
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "rounded-2xl border px-6 py-12 text-center",
        tone === "soft" ? "border-primary/10 bg-primary-50/40" : "border-border bg-card",
        className,
      )}
    >
      {icon ? <div className="mb-4 text-4xl text-primary/70">{icon}</div> : null}
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      {message ? <p className="mt-2 text-muted-foreground">{message}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  )
}
