"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { BaseA11yProps } from "./types"

type InfoCardAction =
  | {
      href: string
      ctaLabel: string
      onClick?: never
      actionAriaLabel?: string
    }
  | {
      onClick: () => void
      ctaLabel: string
      href?: never
      actionAriaLabel?: string
    }
  | {
      href?: never
      onClick?: never
      ctaLabel?: never
      actionAriaLabel?: never
    }

export interface InfoCardProps extends BaseA11yProps, InfoCardAction {
  title: string
  description?: string
  meta?: string
  icon?: ReactNode
  className?: string
}

export function InfoCard({
  id,
  ariaLabel,
  title,
  description,
  meta,
  icon,
  className,
  ...action
}: InfoCardProps) {
  const hasAction = "href" in action || "onClick" in action

  return (
    <article
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      {icon ? <div className="mb-3 text-primary">{icon}</div> : null}
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      {meta ? <p className="mt-2 text-sm font-medium text-primary/80">{meta}</p> : null}
      {description ? <p className="mt-3 text-sm leading-relaxed text-foreground/70">{description}</p> : null}

      {hasAction ? (
        <div className="mt-5">
          {"href" in action ? (
            <Link
              href={action.href}
              aria-label={action.actionAriaLabel}
              className="inline-flex items-center rounded-full bg-cta-500 px-4 py-2 text-sm font-semibold text-cta-foreground transition hover:bg-cta-900 hover:text-white focus-visible:ring-2 focus-visible:ring-cta-900 focus-visible:ring-offset-2"
            >
              {action.ctaLabel}
            </Link>
          ) : (
            <button
              type="button"
              onClick={action.onClick}
              aria-label={action.actionAriaLabel}
              className="inline-flex items-center rounded-full bg-cta-500 px-4 py-2 text-sm font-semibold text-cta-foreground transition hover:bg-cta-900 hover:text-white focus-visible:ring-2 focus-visible:ring-cta-900 focus-visible:ring-offset-2"
            >
              {action.ctaLabel}
            </button>
          )}
        </div>
      ) : null}
    </article>
  )
}
