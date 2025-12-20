"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import { List } from "./utils"

interface BreakingNews {
  id: string
  title: string
  slug: string
}

interface BreakingNewsTickerProps {
  news: BreakingNews[]
}

export function BreakingNewsTicker({ news }: BreakingNewsTickerProps) {
  const tickerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !contentRef.current) return

    const content = contentRef.current
    const contentWidth = content.scrollWidth

    gsap.to(content, {
      x: -contentWidth / 2,
      duration: 30,
      ease: "none",
      repeat: -1,
    })
  }, [news])

  if (news.length === 0) return null

  // Duplicate content for seamless loop
  const duplicatedNews = [...news, ...news]

  return (
    <div ref={tickerRef} className="relative overflow-hidden bg-destructive text-destructive-foreground py-2">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4 font-bold text-sm flex items-center gap-2 border-r border-destructive-foreground/30 bg-destructive h-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          ÚLTIMA HORA
        </div>

        <div ref={contentRef} className="flex items-center whitespace-nowrap">
          <List
            data={duplicatedNews}
            Render={ ({item, index}:{item: BreakingNews, index:number}) => (
              <Link key={`${item.id}-${index}`} href={`/noticias/${item.slug}`} className="px-8 text-sm hover:underline">
                {item.title}
              </Link>
            )}
          />
        </div>
      </div>
    </div>
  )
}
