"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "../../hooks/useReducedMotion"
import { DoodleDecoration } from "./DoodleDecoration"
import { TestimonialCard } from "./TestimonialCard"

interface TestimonialItem {
  quote: string
  name: string
  role?: string
  avatarSrc: string
}

interface TestimonialsSectionProps {
  heading?: string
  subheading?: string
  items?: TestimonialItem[]
}

const defaultItems: TestimonialItem[] = [
  {
    quote: "Our daughter loves coming every day.",
    name: "Maria G.",
    role: "Parent",
    avatarSrc:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'><rect width='96' height='96' rx='48' fill='%23fde68a'/><circle cx='48' cy='42' r='18' fill='%23059669' opacity='0.25'/><rect x='26' y='60' width='44' height='18' rx='9' fill='%23059669' opacity='0.25'/></svg>",
  },
  {
    quote: "Great teachers and playful learning.",
    name: "Luis P.",
    role: "Parent",
    avatarSrc:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'><rect width='96' height='96' rx='48' fill='%23bbf7d0'/><circle cx='48' cy='40' r='18' fill='%23059669' opacity='0.25'/><rect x='24' y='60' width='48' height='18' rx='9' fill='%23059669' opacity='0.25'/></svg>",
  },
  {
    quote: "Safe, warm, and inspiring.",
    name: "Ana R.",
    role: "Parent",
    avatarSrc:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'><rect width='96' height='96' rx='48' fill='%23e0f2fe'/><circle cx='48' cy='40' r='18' fill='%23059669' opacity='0.25'/><rect x='24' y='60' width='48' height='18' rx='9' fill='%23059669' opacity='0.25'/></svg>",
  },
]

export function TestimonialsSection({
  heading = "Families love Sunshine Academy",
  subheading = "Real voices from parents who trust our community every day.",
  items = defaultItems,
}: TestimonialsSectionProps) {
  const visibleItems = items.slice(0, 3)
  const gridRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || !gridRef.current) return
    gsap.registerPlugin(ScrollTrigger)
    const cards = Array.from(gridRef.current.children)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        },
      )
    }, gridRef)
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section className="relative bg-background py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <DoodleDecoration className="left-6 top-8 hidden md:block text-emerald-200/70" variant="curve" />
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Testimonials</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">{heading}</h2>
          <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">{subheading}</p>
        </div>

        <div ref={gridRef} className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <TestimonialCard
              key={item.name}
              quote={item.quote}
              name={item.name}
              role={item.role}
              avatarSrc={item.avatarSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
