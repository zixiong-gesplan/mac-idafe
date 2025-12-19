"use client"

import React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  parallaxSpeed?: number
  zoomOnScroll?: boolean
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  parallaxSpeed = 0.3,
  zoomOnScroll = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const container = containerRef.current
    const image = imageRef.current
    if (!container || !image) return

    const ctx = gsap.context(() => {
      // Parallax movement
      gsap.to(image, {
        yPercent: parallaxSpeed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Zoom effect
      if (zoomOnScroll) {
        gsap.fromTo(
          image,
          { scale: 1.2 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        )
      }
    }, container)

    return () => ctx.revert()
  }, [parallaxSpeed, zoomOnScroll])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={imageRef} className="relative w-full h-full" style={{ transform: "translateY(-15%)" }}>
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" sizes="100vw" />
      </div>
    </div>
  )
}
