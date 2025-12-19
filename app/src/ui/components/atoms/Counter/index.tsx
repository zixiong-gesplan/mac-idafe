"use client"

import { useCountUp } from "../../../hooks/useGSAP"

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
  label: string
}

export function Counter({ value, suffix = "", duration = 2, className = "", label }: CounterProps) {
  const { ref } = useCountUp(value, duration, suffix)

  return (
    <div className={`text-center ${className}`}>
      <span
        ref={ref}
        className="block text-4xl md:text-5xl font-bold text-primary"
        aria-label={`${value}${suffix} ${label}`}
      >
        0{suffix}
      </span>
      <span className="block mt-2 text-sm md:text-base text-muted-foreground">{label}</span>
    </div>
  )
}
