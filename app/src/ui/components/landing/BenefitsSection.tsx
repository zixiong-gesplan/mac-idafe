"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "../../hooks/useReducedMotion"
import { BenefitCard } from "./BenefitCard"
import { DoodleDecoration } from "./DoodleDecoration"

interface BenefitItem {
  title: string
  description: string
  ctaLabel?: string
}

interface BenefitsSectionProps {
  heading?: string
  subheading?: string
  items?: BenefitItem[]
}

const defaultItems: BenefitItem[] = [
  {
    title: "Formacion climatica",
    description: "Fortalecer capacidades en educacion ambiental y accion climatica.",
    ctaLabel: "Ver objetivo 1",
  },
  {
    title: "Red escolar activa",
    description: "Conectar centros educativos para compartir recursos y buenas practicas.",
    ctaLabel: "Ver objetivo 2",
  },
  {
    title: "Impacto local",
    description: "Impulsar proyectos colaborativos con impacto medible en la comunidad.",
    ctaLabel: "Ver objetivo 3",
  },
]

export function BenefitsSection({
  heading = "Tres objetivos del proyecto",
  subheading = "MAC-IDAFE_2CAP se apoya en metas claras para transformar la educacion ambiental.",
  items = defaultItems,
}: BenefitsSectionProps) {
  const visibleItems = items.slice(0, 3)
  const cardsRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || !cardsRef.current) return
    gsap.registerPlugin(ScrollTrigger)
    const cards = Array.from(cardsRef.current.children)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }, cardsRef)
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section className="relative bg-background py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4">
        <DoodleDecoration className="right-6 top-6 hidden md:block text-cta/70" variant="zigzag" />
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Benefits</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">{heading}</h2>
          <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">{subheading}</p>
        </div>

        <div ref={cardsRef} className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {visibleItems.map((item) => (
            <BenefitCard
              key={item.title}
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3.75l2.2 4.46 4.93.72-3.56 3.47.84 4.92L12 14.97l-4.41 2.35.84-4.92L4.88 8.93l4.93-.72L12 3.75z"
                  />
                </svg>
              }
              title={item.title}
              description={item.description}
              ctaLabel={item.ctaLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

