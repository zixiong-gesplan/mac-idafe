"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const categories = [
  { name: "Cambio Climático", slug: "cambio-climatico", icon: "🌡️", color: "#ef4444", count: 24 },
  { name: "Reciclaje", slug: "reciclaje", icon: "♻️", color: "#10b981", count: 18 },
  { name: "Energía Renovable", slug: "energia", icon: "⚡", color: "#f59e0b", count: 15 },
  { name: "Biodiversidad", slug: "biodiversidad", icon: "🦋", color: "#8b5cf6", count: 21 },
]

export function CategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !cardsRef.current) return

    const cards = cardsRef.current.children

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
        rotateX: -15,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    )

    // Hover animations for each card
    Array.from(cards).forEach((card) => {
      const cardEl = card as HTMLElement

      cardEl.addEventListener("mouseenter", () => {
        gsap.to(cardEl, {
          y: -8,
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out",
        })
      })

      cardEl.addEventListener("mouseleave", () => {
        gsap.to(cardEl, {
          y: 0,
          scale: 1,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.3,
          ease: "power2.out",
        })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current) st.kill()
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explora por Categoría</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra contenido especializado en las áreas que más te interesan.
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: "1000px" }}>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group block p-6 rounded-xl border-2 bg-card transition-colors duration-300"
              style={{ borderColor: category.color }}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} artículos</p>
              <div
                className="mt-4 h-1 rounded-full transition-all duration-500 group-hover:w-full w-0"
                style={{ backgroundColor: category.color }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
