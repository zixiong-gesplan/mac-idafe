"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MagneticButton } from "./atoms/MagneticButton"
import { NewsCard } from "./molecules"

gsap.registerPlugin(ScrollTrigger)

interface SidebarNews {
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

interface NewsSidebarProps {
  recentNews: SidebarNews[]
  popularTags: string[]
}

export function NewsSidebar({ recentNews, popularTags }: NewsSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !sidebarRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sidebar-item",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sidebarRef)

    return () => ctx.revert()
  }, [])

  return (
    <aside ref={sidebarRef} className="space-y-8">
      {/* Recent News */}
      <div className="sidebar-item bg-card rounded-2xl border border-border p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full" />
          Noticias Recientes
        </h3>
        <div className="space-y-1">
          {recentNews.slice(0, 5).map((news) => (
            <NewsCard key={news.id} news={news} variant="compact" />
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="sidebar-item bg-card rounded-2xl border border-border p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-accent rounded-full" />
          Temas Populares
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <MagneticButton
              key={tag}
              className="px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
              strength={0.2}
            >
              #{tag}
            </MagneticButton>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="sidebar-item bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-6">
        <h3 className="text-lg font-bold mb-2">Boletín Ambiental</h3>
        <p className="text-sm text-muted-foreground mb-4">Recibe las noticias más importantes cada semana.</p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="tu@email.com"
            className="w-full px-4 py-2 bg-background rounded-lg border border-border text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <MagneticButton className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Suscribirse
          </MagneticButton>
        </form>
      </div>
    </aside>
  )
}
