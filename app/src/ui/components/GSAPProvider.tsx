"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPProviderProps {
  children: ReactNode
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      // Disable all GSAP animations for users who prefer reduced motion
      gsap.globalTimeline.timeScale(0)
      return
    }

    // Set GSAP defaults for smooth animations
    gsap.defaults({
      ease: "power3.out",
      duration: 0.8,
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
