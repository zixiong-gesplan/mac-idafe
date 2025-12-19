"use client"

/**
 * UI Component - Reading Progress Bar
 * Barra de progreso de lectura para artículos largos
 */

import { useEffect, useState } from "react"

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const totalScrollable = documentHeight - windowHeight
      const currentProgress = (scrollTop / totalScrollable) * 100

      setProgress(Math.min(100, Math.max(0, currentProgress)))
    }

    // Initial check
    handleScroll()

    // Listen to scroll
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="reading-progress"
      style={{
        transform: `scaleX(${progress / 100})`,
        transition: "transform 0.1s ease-out",
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progreso de lectura"
    />
  )
}
