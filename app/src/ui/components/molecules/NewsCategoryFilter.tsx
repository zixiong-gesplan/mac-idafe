"use client"

import React from "react"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"

interface Category {
  name: string
  slug: string
  color: string
  count: number
}

interface NewsCategoryFilterProps {
  categories: Category[]
  activeCategory: string | null
  onCategoryChange: (slug: string | null) => void
}

export function NewsCategoryFilter({ categories, activeCategory, onCategoryChange }: NewsCategoryFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !containerRef.current || !indicatorRef.current) return

    const activeButton = containerRef.current.querySelector(`[data-slug="${activeCategory || "all"}"]`)
    if (activeButton) {
      const rect = (activeButton as HTMLElement).getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()

      gsap.to(indicatorRef.current, {
        x: rect.left - containerRect.left,
        width: rect.width,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }, [activeCategory])

  return (
    <div ref={containerRef} className="relative flex flex-wrap gap-2 p-1 bg-muted rounded-xl">
      <div
        ref={indicatorRef}
        className="absolute top-1 left-1 h-[calc(100%-8px)] bg-background rounded-lg shadow-sm transition-all"
        style={{ width: 0 }}
      />

      <button
        data-slug="all"
        onClick={() => onCategoryChange(null)}
        className={`relative z-10 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          activeCategory === null ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Todas
      </button>

      {categories.map((category) => (
        <button
          key={category.slug}
          data-slug={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          className={`relative z-10 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
            activeCategory === category.slug ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }} />
          {category.name}
          <span className="text-xs opacity-60">({category.count})</span>
        </button>
      ))}
    </div>
  )
}
