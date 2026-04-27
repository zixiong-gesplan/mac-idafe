import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { BaseA11yProps, GridColumns } from "./types"

export interface SectionCardGridProps extends BaseA11yProps {
  title?: string
  subtitle?: string
  columns?: GridColumns
  children: ReactNode
  sectionClassName?: string
  headerClassName?: string
  gridClassName?: string
}

const columnsMap: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
}

export function SectionCardGrid({
  id,
  ariaLabel,
  title,
  subtitle,
  columns = 3,
  children,
  sectionClassName,
  headerClassName,
  gridClassName,
}: SectionCardGridProps) {
  const hasHeader = Boolean(title || subtitle)

  return (
    <section id={id} aria-label={ariaLabel} className={cn("w-full", sectionClassName)}>
      {hasHeader ? (
        <header className={cn("mb-6", headerClassName)}>
          {title ? <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{title}</h2> : null}
          {subtitle ? <p className="mt-2 text-sm text-foreground/70">{subtitle}</p> : null}
        </header>
      ) : null}
      <div className={cn("grid gap-5", columnsMap[columns], gridClassName)}>{children}</div>
    </section>
  )
}
