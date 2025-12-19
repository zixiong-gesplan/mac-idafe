"use client"

import React from "react"
import { useRef, type ReactNode, type MouseEvent } from "react"
import { gsap } from "gsap"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  onClick?: () => void
  href?: string
  as?: "button" | "a"
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
  href,
  as = "button",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const contentRef = useRef<HTMLSpanElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const button = buttonRef.current
    const content = contentRef.current
    if (!button || !content) return

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(button, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out",
    })

    gsap.to(content, {
      x: x * strength * 0.5,
      y: y * strength * 0.5,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleMouseLeave = () => {
    const button = buttonRef.current
    const content = contentRef.current
    if (!button || !content) return

    gsap.to([button, content], {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    })
  }

  const Component = as === "a" ? "a" : "button"

  return (
    <Component
      ref={buttonRef as any}
      className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      href={href}
    >
      <span ref={contentRef} className="relative z-10">
        {children}
      </span>
    </Component>
  )
}
