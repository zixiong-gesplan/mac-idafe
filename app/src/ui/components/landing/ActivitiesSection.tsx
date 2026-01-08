"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "../../hooks/useReducedMotion"
import { DoodleDecoration } from "./DoodleDecoration"
import { FeatureBullet } from "./FeatureBullet"

interface ActivityBullet {
  text: string
}

interface ActivitiesSectionProps {
  heading?: string
  description?: string
  ctaLabel?: string
  bullets?: ActivityBullet[]
  imageAlt?: string
}

const defaultBullets: ActivityBullet[] = [
  { text: "STEM corners" },
  { text: "Outdoor discovery" },
  { text: "Art & music" },
]

const activitiesImageSrc =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='720' height='560' viewBox='0 0 720 560'><rect width='720' height='560' fill='%23bbf7d0'/><path d='M100 140 C120 90 200 80 250 120 C310 160 380 120 420 100 C470 80 540 100 560 160 C580 230 520 260 500 320 C470 400 420 440 340 450 C240 460 120 420 110 320 C100 250 80 200 100 140 Z' fill='%23fef3c7'/><circle cx='240' cy='230' r='52' fill='%23059669' opacity='0.2'/><circle cx='440' cy='300' r='68' fill='%23059669' opacity='0.18'/><text x='50%' y='86%' font-size='28' font-family='Arial' text-anchor='middle' fill='%231f2937'>Activities</text></svg>"

export function ActivitiesSection({
  heading = "Hands-on Activities Every Day",
  description = "We blend play and guided learning to build confidence and curiosity.",
  ctaLabel = "Explore our program",
  bullets = defaultBullets,
  imageAlt = "Children exploring hands-on activities",
}: ActivitiesSectionProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const bulletsRef = useRef<HTMLUListElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        const supportsClipPath = typeof CSS !== "undefined" && CSS.supports("clip-path", "inset(0 0 0 0)")
        if (supportsClipPath) {
          gsap.fromTo(
            imageRef.current,
            { clipPath: "inset(0 0 100% 0)", scale: 1.05 },
            {
              clipPath: "inset(0 0 0% 0)",
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            },
          )
        } else {
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.05 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: imageRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          )
        }
      }

      if (bulletsRef.current) {
        const bulletItems = Array.from(bulletsRef.current.children)
        gsap.fromTo(
          bulletItems,
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bulletsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        )
      }
    })

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section className="relative bg-background py-12 md:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 text-center md:flex-row md:justify-between md:gap-12 md:text-left">
        <DoodleDecoration className="right-6 top-6 hidden md:block text-amber-200/70" variant="zigzag" />
        <div className="flex w-full flex-1 flex-col items-center gap-5 md:max-w-xl md:items-start">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Activities</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">{heading}</h2>
          <p className="text-sm text-foreground/70 sm:text-base">{description}</p>
          <ul ref={bulletsRef} className="grid gap-3 text-left">
            {bullets.slice(0, 3).map((bullet) => (
              <FeatureBullet
                key={bullet.text}
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l4 4L19 7" />
                  </svg>
                }
                text={bullet.text}
              />
            ))}
          </ul>
          <div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-5 py-2 text-sm font-semibold text-primary shadow-sm transition hover:border-primary hover:text-foreground focus-visible-ring"
            >
              {ctaLabel}
            </button>
          </div>
        </div>

        <div className="flex w-full flex-1 justify-center md:justify-end">
          <figure className="w-full max-w-md rounded-[36px] bg-white p-4 shadow-xl md:max-w-lg">
            <div ref={imageRef} className="overflow-hidden rounded-[28px]">
              <img
                src={activitiesImageSrc}
                alt={imageAlt}
                className="h-64 w-full object-cover sm:h-72 md:h-90"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
