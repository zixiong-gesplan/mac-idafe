import type { ReactNode } from "react"

export type Align = "left" | "center"
export type GridColumns = 1 | 2 | 3 | 4

export interface BaseA11yProps {
  id?: string
  ariaLabel?: string
}

export interface BaseSharedProps {
  className?: string
  children?: ReactNode
}
