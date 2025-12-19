"use client"
import React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface GradientTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  colors?: string[]
  animationDuration?: number
}

export function GradientText({
  text,
  className = "",
  as: Component = "span",
  colors = ["var(--primary)", "#10b981", "#06b6d4", "var(--primary)"],
  animationDuration = 5,
}: GradientTextProps) {
  const textRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const element = textRef.current
    if (!element) return

    // Animate gradient position
    gsap.to(element, {
      backgroundPosition: "200% center",
      duration: animationDuration,
      ease: "none",
      repeat: -1,
    })
  }, [animationDuration])

  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize: "200% auto",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  }

  return (
    <Component ref={textRef as any} className={className} style={gradientStyle}>
      {text}
    </Component>
  )
}
