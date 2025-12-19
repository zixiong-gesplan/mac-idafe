import React, { ReactNode } from "react"

type BoundaryProps = {
  when: boolean
  fallback: ReactNode
  children: ReactNode
}

export function Boundary({ when, fallback, children }: BoundaryProps) {
  return <div>{when ? children : fallback}</div>
}
