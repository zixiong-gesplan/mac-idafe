import type { ReactNode } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./Main"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
