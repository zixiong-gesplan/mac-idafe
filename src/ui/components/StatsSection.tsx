"use client"

import { AnimatedCounter } from "./AnimatedCounter"
import { useFadeInOnScroll } from "../hooks/useGSAP"

const stats = [
  { value: 150, suffix: "+", label: "Artículos publicados" },
  { value: 50, suffix: "K", label: "Lectores mensuales" },
  { value: 25, suffix: "+", label: "Colaboradores expertos" },
  { value: 12, suffix: "", label: "Categorías temáticas" },
]

export function StatsSection() {
  const sectionRef = useFadeInOnScroll<HTMLDivElement>()

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              duration={2 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
