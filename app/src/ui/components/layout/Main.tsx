import type { ReactNode } from "react"

interface MainProps {
  children: ReactNode
}

export function Main({ children }: MainProps) {
  return (
    <main className="flex-1 bg-background mx-auto w-full">
      {children}
    </main>
  )
}
