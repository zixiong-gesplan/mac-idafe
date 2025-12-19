"use client"

import { useTextReveal } from "../../hooks/useGSAP"

interface AnimatedTextProps {
  children: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  className?: string
}

export function AnimatedText({ children, as: Tag = "p", className = "" }: AnimatedTextProps) {
  const ref = useTextReveal<HTMLElement>()

  return (
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  )
}
