"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Section {
  id: string
  title: string
}

interface ScrollProgressSectionsProps {
  sections: Section[]
  className?: string
}

export function ScrollProgressSections({ sections, className = "" }: ScrollProgressSectionsProps) {
  const [activeSection, setActiveSection] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    sections.forEach((section, index) => {
      const element = document.getElementById(section.id)
      if (!element) return

      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [sections])

  // Animate progress indicator
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const progress = progressRef.current
    if (!progress) return

    gsap.to(progress, {
      scaleY: (activeSection + 1) / sections.length,
      duration: 0.4,
      ease: "power2.out",
    })
  }, [activeSection, sections.length])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block ${className}`}
      aria-label="Navegación de secciones"
    >
      <div className="relative flex flex-col items-center gap-4">
        {/* Progress bar background */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-border rounded-full" />
        {/* Active progress */}
        <div
          ref={progressRef}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 bg-primary rounded-full origin-top"
          style={{ height: "100%", transform: "scaleY(0)" }}
        />

        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`relative z-10 group flex items-center gap-3 ${
              index === activeSection ? "text-primary" : "text-muted-foreground"
            }`}
            aria-label={`Ir a ${section.title}`}
            aria-current={index === activeSection ? "true" : undefined}
          >
            {/* Dot indicator */}
            <span
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === activeSection
                  ? "bg-primary border-primary scale-125"
                  : "bg-background border-muted-foreground group-hover:border-primary"
              }`}
            />
            {/* Label tooltip */}
            <span
              className={`absolute right-full mr-4 px-2 py-1 text-sm whitespace-nowrap bg-card border border-border rounded shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}
            >
              {section.title}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
