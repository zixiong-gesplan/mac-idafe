"use client"
import React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  revealType?: "words" | "chars" | "lines"
  staggerDelay?: number
}

export function TextReveal({
  text,
  className = "",
  as: Component = "p",
  revealType = "words",
  staggerDelay = 0.05,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const elements = container.querySelectorAll(".reveal-item")

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 30,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: staggerDelay,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, container)

    return () => ctx.revert()
  }, [staggerDelay])

  // Split text based on revealType
  const splitText = () => {
    if (revealType === "chars") {
      return text.split("").map((char, i) => (
        <span key={i} className="reveal-item inline-block" style={{ perspective: "1000px" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))
    }

    if (revealType === "words") {
      return text.split(" ").map((word, i) => (
        <span key={i} className="reveal-item inline-block mr-[0.25em]" style={{ perspective: "1000px" }}>
          {word}
        </span>
      ))
    }

    // lines
    return text.split("\n").map((line, i) => (
      <span key={i} className="reveal-item block" style={{ perspective: "1000px" }}>
        {line}
      </span>
    ))
  }

  return (
    <Component ref={containerRef as any} className={`overflow-hidden ${className}`}>
      {splitText()}
    </Component>
  )
}
