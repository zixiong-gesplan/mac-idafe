"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const sunRef = useRef<SVGSVGElement>(null)
  const moonRef = useRef<SVGSVGElement>(null)

  // Initialize theme from system preference or localStorage
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (saved === "dark" || (!saved && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Animate toggle and update theme
  const toggleTheme = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const newIsDark = !isDark

    if (!prefersReducedMotion) {
      // Animate icons
      const tl = gsap.timeline()

      if (newIsDark) {
        tl.to(sunRef.current, { scale: 0, rotate: -90, opacity: 0, duration: 0.3 }).to(
          moonRef.current,
          { scale: 1, rotate: 0, opacity: 1, duration: 0.3 },
          "-=0.1",
        )
      } else {
        tl.to(moonRef.current, { scale: 0, rotate: 90, opacity: 0, duration: 0.3 }).to(
          sunRef.current,
          { scale: 1, rotate: 0, opacity: 1, duration: 0.3 },
          "-=0.1",
        )
      }

      // Animate page transition
      gsap.to("body", {
        opacity: 0.95,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
      })
    }

    setIsDark(newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")

    if (newIsDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  if (!mounted) return null

  return (
    <button
      ref={toggleRef}
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-secondary hover:bg-accent flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {/* Sun icon */}
      <svg
        ref={sunRef}
        className="absolute w-6 h-6 text-amber-500"
        style={{ opacity: isDark ? 0 : 1, transform: isDark ? "scale(0) rotate(-90deg)" : "scale(1) rotate(0)" }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      {/* Moon icon */}
      <svg
        ref={moonRef}
        className="absolute w-6 h-6 text-blue-400"
        style={{ opacity: isDark ? 1 : 0, transform: isDark ? "scale(1) rotate(0)" : "scale(0) rotate(90deg)" }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  )
}
