"use client"

import type { ReactNode } from "react"
import { useFadeInOnScroll, useStaggerOnScroll, useParallax } from "../../hooks/useGSAP"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade" | "stagger" | "parallax"
  staggerDelay?: number
  parallaxSpeed?: number
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade",
  staggerDelay = 0.1,
  parallaxSpeed = 0.3,
}: AnimatedSectionProps) {
  const fadeRef = useFadeInOnScroll<HTMLDivElement>()
  const staggerRef = useStaggerOnScroll<HTMLDivElement>(staggerDelay)
  const parallaxRef = useParallax<HTMLDivElement>(parallaxSpeed)

  const ref = animation === "stagger" ? staggerRef : animation === "parallax" ? parallaxRef : fadeRef

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  )
}
