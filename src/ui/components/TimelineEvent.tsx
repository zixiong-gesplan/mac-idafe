"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TimelineEventProps {
  year: string
  title: string
  description: string
  index: number
  isLast?: boolean
}

export function TimelineEvent({ year, title, description, index, isLast = false }: TimelineEventProps) {
  const eventRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const event = eventRef.current
    const line = lineRef.current
    const dot = dotRef.current
    if (!event || !line || !dot) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: event,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      tl.fromTo(dot, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" })
        .fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: 0.6, ease: "power2.out" }, "-=0.2")
        .fromTo(
          event.querySelector(".timeline-content"),
          { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
    }, event)

    return () => ctx.revert()
  }, [index])

  const isEven = index % 2 === 0

  return (
    <div
      ref={eventRef}
      className={`relative flex items-center gap-8 ${isEven ? "flex-row" : "flex-row-reverse"} md:flex-row`}
    >
      {/* Timeline line and dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center h-full">
        <div ref={dotRef} className="relative z-10 w-4 h-4 bg-primary rounded-full ring-4 ring-primary/20" />
        {!isLast && (
          <div ref={lineRef} className="w-0.5 flex-1 bg-gradient-to-b from-primary to-primary/20 origin-top" />
        )}
      </div>

      {/* Content */}
      <div
        className={`timeline-content ml-12 md:ml-0 md:w-5/12 ${
          isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
        }`}
      >
        <span className="inline-block px-3 py-1 mb-2 text-xs font-bold bg-primary/10 text-primary rounded-full">
          {year}
        </span>
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
