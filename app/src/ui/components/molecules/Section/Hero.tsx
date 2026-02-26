"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { MagneticButton } from "../../atoms/MagneticButton"
import { RippleEffect } from "../../atoms/RippleEffect"
import { GradientText } from "../../atoms"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Initial hero animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Background gradient animation
      tl.fromTo(bgRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.2 })

      // Title animation with character split
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".title-char")
        tl.fromTo(
          chars,
          { opacity: 0, y: 100, rotateX: -90 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.02, ease: "back.out(1.7)" },
          "-=0.8",
        )
      }

      // Subtitle fade in
      tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")

      // CTA button animation
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
        "-=0.3",
      )

      // Floating animation for decorative elements
      gsap.to(".hero-float", {
        y: -15,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Split title text for animation
  const titlePart1 = "Educación Ambiental para un "
  const titlePart2 = "Futuro Sostenible"

  return (
    <section id="hero" ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div ref={bgRef} className="absolute inset-0 from-primary/10 via-primary/5 to-background" />

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-float absolute top-20 left-[10%] w-20 h-20 rounded-full bg-primary/10 blur-xl" />
        <div className="hero-float absolute top-40 right-[15%] w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
        <div className="hero-float absolute bottom-32 left-[20%] w-24 h-24 rounded-full bg-primary/15 blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          style={{ perspective: "1000px" }}
        >
          {titlePart1.split("").map((char, i) => (
            <span key={i} className="title-char inline-block" style={{ transformStyle: "preserve-3d" }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <GradientText
            text={titlePart2}
            as="span"
            className="inline"
            colors={["var(--primary)", "var(--secondary)", "var(--cta)", "var(--primary)"]}
          />
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed"
        >
          Descubre contenido educativo sobre sostenibilidad, cambio climático, biodiversidad y buenas prácticas
          ecológicas para transformar nuestro mundo.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton strength={0.2}>
            <RippleEffect color="rgba(255,255,255,0.3)">
              <Link
                href="/noticias"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-lg hover:shadow-lg hover:shadow-primary/20"
              >
                Explora nuestra actualidad
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </RippleEffect>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border text-foreground rounded-lg hover:bg-accent hover:border-accent transition-all duration-300 font-medium text-lg"
            >
              Conoce sobre nosotros
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
