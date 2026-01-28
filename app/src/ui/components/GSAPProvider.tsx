"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "../hooks/useReducedMotion"

interface GSAPProviderProps {
  children: ReactNode
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  const initialized = useRef(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    gsap.registerPlugin(ScrollTrigger)

    if (prefersReducedMotion) {
      // Disable all GSAP animations for users who prefer reduced motion
      gsap.globalTimeline.timeScale(0)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
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
