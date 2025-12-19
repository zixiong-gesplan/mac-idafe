"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { NewsCard } from "./NewsCard"

gsap.registerPlugin(ScrollTrigger)

interface News {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  categoryColor: string
  author: { name: string; avatar?: string }
  publishedAt: string
  readingTimeMinutes: number
  featured: boolean
  breaking: boolean
}

interface NewsGridProps {
  news: News[]
  title?: string
  showFeatured?: boolean
}

export function NewsGrid({ news, title, showFeatured = true }: NewsGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !gridRef.current) return

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".news-card-item")

      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, gridRef)

    return () => ctx.revert()
  }, [news])

  const featuredNews = news.filter((n) => n.featured).slice(0, 2)
  const regularNews = showFeatured ? news.filter((n) => !n.featured) : news

  return (
    <section className="py-12">
      {title && <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">{title}</h2>}

      <div ref={gridRef}>
        {/* Featured news - larger cards */}
        {showFeatured && featuredNews.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featuredNews.map((item, index) => (
              <div key={item.id} className="news-card-item">
                <NewsCard news={item} index={index} variant="featured" />
              </div>
            ))}
          </div>
        )}

        {/* Regular news grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map((item, index) => (
            <div key={item.id} className="news-card-item">
              <NewsCard news={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
