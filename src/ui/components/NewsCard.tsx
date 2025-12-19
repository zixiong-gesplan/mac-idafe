"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"

interface NewsCardProps {
  news: {
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
  index?: number
  variant?: "default" | "featured" | "compact"
}

export function NewsCard({ news, index = 0, variant = "default" }: NewsCardProps) {
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const card = cardRef.current
    if (!card) return

    // 3D tilt effect on hover
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 1000,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      })
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const publishedDate = new Date(news.publishedAt).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  const timeAgo = getTimeAgo(new Date(news.publishedAt))

  if (variant === "featured") {
    return (
      <article
        ref={cardRef}
        className="group relative overflow-hidden rounded-2xl bg-card border border-border h-full min-h-[400px] flex flex-col"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image placeholder */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
          <div className="absolute inset-0 opacity-20" style={{ backgroundColor: news.categoryColor }} />
          {news.breaking && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full animate-pulse">
              ÚLTIMA HORA
            </div>
          )}
          <div className="absolute bottom-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: news.categoryColor }}
            >
              {news.category}
            </span>
          </div>
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <Link href={`/noticias/${news.slug}`} className="group/link flex-1">
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover/link:text-primary transition-colors line-clamp-2 text-balance">
              {news.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{news.excerpt}</p>
          </Link>

          <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <img
                src={news.author.avatar || "/placeholder.svg?height=24&width=24"}
                alt={news.author.name}
                className="w-6 h-6 rounded-full"
              />
              <span>{news.author.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{timeAgo}</span>
              <span className="text-primary">{news.readingTimeMinutes} min</span>
            </div>
          </div>
        </div>
      </article>
    )
  }

  if (variant === "compact") {
    return (
      <article className="group flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
        <div className="w-2 h-full rounded-full flex-shrink-0" style={{ backgroundColor: news.categoryColor }} />
        <div className="flex-1 min-w-0">
          <Link href={`/noticias/${news.slug}`}>
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm">
              {news.title}
            </h4>
          </Link>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <span>{news.category}</span>
            <span>·</span>
            <span>{timeAgo}</span>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl bg-card border border-border p-5 hover:border-primary/50 transition-all duration-300"
      style={{
        transformStyle: "preserve-3d",
        animationDelay: `${index * 100}ms`,
      }}
    >
      {news.breaking && (
        <div className="absolute top-0 right-0 px-2 py-1 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-bl-lg">
          URGENTE
        </div>
      )}

      <div className="flex items-start gap-3 mb-3">
        <span
          className="px-2.5 py-1 rounded-full text-xs font-medium"
          style={{
            backgroundColor: `${news.categoryColor}20`,
            color: news.categoryColor,
          }}
        >
          {news.category}
        </span>
        {news.featured && <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Destacado</span>}
      </div>

      <Link href={`/noticias/${news.slug}`} className="block group/title">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover/title:text-primary transition-colors line-clamp-2">
          {news.title}
        </h3>
      </Link>

      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{news.excerpt}</p>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <img
            src={news.author.avatar || "/placeholder.svg?height=20&width=20"}
            alt={news.author.name}
            className="w-5 h-5 rounded-full"
          />
          <span>{news.author.name}</span>
        </div>
        <span>{timeAgo}</span>
      </div>
    </article>
  )
}

function getTimeAgo(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMins < 60) return `Hace ${diffMins} min`
  if (diffHours < 24) return `Hace ${diffHours}h`
  if (diffDays < 7) return `Hace ${diffDays}d`
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "short" })
}
