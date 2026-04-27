"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { BaseA11yProps } from "./types"

export interface ErrorStateProps extends BaseA11yProps {
  title: string
  message?: string
  errorId?: string
  retryLabel?: string
  onRetry?: () => void
  action?: ReactNode
  role?: "alert" | "status"
  className?: string
}

export function ErrorState({
  id,
  ariaLabel,
  title,
  message,
  errorId,
  retryLabel = "Reintentar",
  onRetry,
  action,
  role = "alert",
  className,
}: ErrorStateProps) {
  return (
    <div
      id={id}
      aria-label={ariaLabel}
      role={role}
      className={cn("rounded-2xl border border-destructive/25 bg-card px-6 py-12 text-center", className)}
    >
      <div className="mb-4 text-4xl text-destructive/75" aria-hidden="true">
        :(
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      {message ? <p className="mt-2 text-muted-foreground">{message}</p> : null}
      {errorId ? <p className="mt-2 text-xs text-muted-foreground">Error: {errorId}</p> : null}

      <div className="mt-6 flex items-center justify-center gap-3">
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {retryLabel}
          </button>
        ) : null}
        {action}
      </div>
    </div>
  )
}
