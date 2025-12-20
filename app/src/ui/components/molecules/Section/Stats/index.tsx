"use client"

import { Counter } from "../../../atoms/Counter"
import { useFadeInOnScroll } from "../../../../hooks/useGSAP"
import { List } from "@ui/components/utils"
import { stats } from "./data"

export function StatsSection() {
  const sectionRef = useFadeInOnScroll<HTMLDivElement>()

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <List
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          data={stats}
          Render={ ({item, index}) => (
            <Counter
              key={index}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              duration={2 + index * 0.2}
            />
          )}
        />
      </div>
    </section>
  )
}
