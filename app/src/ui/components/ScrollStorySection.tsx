"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollStorySectionProps {
  children: ReactNode
  className?: string
  parallaxIntensity?: number
  revealDirection?: "up" | "down" | "left" | "right"
}

export function ScrollStorySection({
  children,
  className = "",
  parallaxIntensity = 50,
  revealDirection = "up",
}: ScrollStorySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      // Determine initial position based on direction
      const directions = {
        up: { y: 100, x: 0 },
        down: { y: -100, x: 0 },
        left: { y: 0, x: 100 },
        right: { y: 0, x: -100 },
      }

      const initialPos = directions[revealDirection]

      // Content reveal animation
      gsap.fromTo(
        content,
        {
          opacity: 0,
          ...initialPos,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        },
      )

      // Parallax background effect
      gsap.to(section, {
        backgroundPositionY: `${parallaxIntensity}%`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [parallaxIntensity, revealDirection])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef}>{children}</div>
    </div>
  )
}
