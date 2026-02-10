"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "../../hooks/useReducedMotion"

interface HeroImage {
  src: string
  alt: string
  rotationClass: string
  caption: string
}

const heroImages: HeroImage[] = [
  {
    src:
      "/20260127/Reunion_inicial_madeira_1.jpeg",
    alt: "Primera reunión del proyecto MAC-IDAFE en Madeira",
    rotationClass: "rotate-2",
    caption: "Primera reunión del proyecto MAC-IDAFE en Madeira",
  },
  {
    src:"/20260127/Reunion_inicial_madeira_2.jpeg",
    alt: "Primera reunión del proyecto MAC-IDAFE en Madeira",
    rotationClass: "-rotate-3",
    caption: "Primera reunión del proyecto MAC-IDAFE en Madeira",
  },
  {
    src:"/20260127/Reunion_inicial_madeira_3.jpeg",
    alt: "Primera reunión del proyecto MAC-IDAFE en Madeira",
    rotationClass: "-rotate-3",
    caption: "Primera reunión del proyecto MAC-IDAFE en Madeira",
  },
  {
    src:"/20260210/Reunion_inicial_azores_1.jpeg",
    alt: "Primera reunión del proyecto MAC-IDAFE en Azores",
    rotationClass: "-rotate-1",
    caption: "Primera reunión del proyecto MAC-IDAFE en Azores",
  },
  {
    src:"/20260210/Reunion_inicial_azores_2.jpeg",
    alt: "Primera reunión del proyecto MAC-IDAFE en Azores",
    rotationClass: "-rotate-2",
    caption: "Primera reunión del proyecto MAC-IDAFE en Azores",
  },
  {
    src:"/20260210/Reunion_inicial_azores_3.jpeg",
    alt: "Primera reunión del proyecto MAC-IDAFE en Azores",
    rotationClass: "-rotate-3",
    caption: "Primera reunión del proyecto MAC-IDAFE en Azores",
  }
  // {
  //   src:
  //     "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='480' viewBox='0 0 640 480'><rect width='640' height='480' fill='%23fce7f3'/><rect x='50' y='50' width='540' height='300' fill='%23bbf7d0'/><circle cx='200' cy='210' r='58' fill='%23059669' opacity='0.18'/><circle cx='430' cy='210' r='74' fill='%23059669' opacity='0.22'/><text x='50%' y='85%' font-size='28' font-family='Arial' text-anchor='middle' fill='%231f2937'>Grow</text></svg>",
  //   alt: "Students collaborating in small groups",
  //   rotationClass: "-rotate-2",
  //   caption: "Growing together",
  // },
  // {
  //   src:
  //     "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='480' viewBox='0 0 640 480'><rect width='640' height='480' fill='%23fef3c7'/><rect x='60' y='60' width='520' height='300' fill='%23bbf7d0'/><circle cx='210' cy='190' r='56' fill='%23059669' opacity='0.2'/><circle cx='460' cy='220' r='72' fill='%23059669' opacity='0.2'/><text x='50%' y='85%' font-size='28' font-family='Arial' text-anchor='middle' fill='%231f2937'>Discover</text></svg>",
  //   alt: "A classroom moment full of discovery",
  //   rotationClass: "rotate-3",
  //   caption: "Discover daily",
  // },
  // {
  //   src:
  //     "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='480' viewBox='0 0 640 480'><rect width='640' height='480' fill='%23ecfccb'/><rect x='50' y='60' width='540' height='300' fill='%23fef9c3'/><circle cx='190' cy='210' r='62' fill='%23059669' opacity='0.2'/><circle cx='460' cy='200' r='68' fill='%23059669' opacity='0.2'/><text x='50%' y='85%' font-size='28' font-family='Arial' text-anchor='middle' fill='%231f2937'>Learn</text></svg>",
  //   alt: "Children learning through playful activities",
  //   rotationClass: "-rotate-6",
  //   caption: "Learn with joy",
  // },
]

export function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null)
  const doodleRef = useRef<HTMLDivElement>(null)
  const activeFigureRef = useRef<HTMLElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState<number | null>(null)
  const totalSlides = heroImages.length
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % totalSlides
        setPreviousIndex(prev)
        return next
      })
    }, 4500)
    return () => window.clearInterval(id)
  }, [totalSlides])

  useEffect(() => {
    if (previousIndex === null) return
    const timeoutId = window.setTimeout(() => setPreviousIndex(null), 550)
    return () => window.clearTimeout(timeoutId)
  }, [previousIndex])

  const activeImage = heroImages[activeIndex]
  const previousImage = previousIndex !== null ? heroImages[previousIndex] : null

  const setSlide = (nextIndex: number) => {
    if (nextIndex === activeIndex) return
    setPreviousIndex(activeIndex)
    setActiveIndex(nextIndex)
  }

  useEffect(() => {
    if (prefersReducedMotion) return
    if (!textRef.current) return

    gsap.registerPlugin(ScrollTrigger)
    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      const targets = textRef.current ? Array.from(textRef.current.children) : []
      gsap.fromTo(
        targets,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.45 : 0.7,
          stagger: 0.12,
          ease: "power3.out",
        },
      )

      if (doodleRef.current) {
        const doodles = Array.from(doodleRef.current.children)
        doodles.forEach((doodle, index) => {
          gsap.to(doodle, {
            y: 8 + index * 3,
            duration: 2.8 + index * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          })
        })
      }
    })

    return () => {
      ctx.revert()
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) return
    if (!activeFigureRef.current) return
    const isMobile = window.innerWidth < 768

    gsap.fromTo(
      activeFigureRef.current,
      { scale: 0.96, rotate: -2, opacity: 0.6 },
      { scale: 1, rotate: 0, opacity: 1, duration: isMobile ? 0.45 : 0.65, ease: "power3.out" },
    )
  }, [activeIndex, prefersReducedMotion])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%),linear-gradient(180deg,_#0f7a38_0%,_#0b6b33_60%,_#0a5f2e_100%)] text-primary-foreground">
      <div ref={doodleRef} className="pointer-events-none absolute inset-0">
        <span className="absolute left-6 top-10 h-24 w-24 rounded-full border border-primary-foreground/25 opacity-40" />
        <span className="absolute right-10 top-24 h-16 w-16 -rotate-12 rounded-lg border border-primary-foreground/25 opacity-30" />
        <span className="absolute bottom-10 left-1/3 h-20 w-20 rotate-6 rounded-full border border-primary-foreground/20 opacity-30" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 220"
          width="100%"
          height="220"
          preserveAspectRatio="none"
          className="block"
          aria-hidden="true"
        >
          <path
            d="M0 90 C200 30 400 30 600 90 C800 150 1000 150 1200 90 L1200 220 L0 220 Z"
            fill="rgba(236, 253, 245, 0.85)"
          />
          <path
            d="M0 125 C220 55 420 55 620 125 C820 195 1020 195 1200 125 L1200 220 L0 220 Z"
            fill="rgba(167, 243, 208, 0.6)"
          />
        </svg>
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-20 pt-24 text-center md:h-screen md:flex-row md:items-center md:justify-between md:gap-12 md:pb-24 md:pt-28 md:text-left">
        <div ref={textRef} className="flex flex-1 flex-col items-center gap-5 md:items-start">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
            Proyecto MAC-IDAFE_2CAP
          </p>
          <h1 className="text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            <span className="block">Educacion ambiental</span>
            <span className="block">para una region resiliente</span>
          </h1>
          <p className="max-w-xl text-sm text-primary-foreground/80 sm:text-base lg:text-lg">
            MAC-IDAFE_2CAP conecta escuelas y comunidades para acelerar la accion climatica local.
          </p>
          <div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-foreground shadow-md transition hover:bg-amber-200 focus-visible-ring"
            >
              Conocer el proyecto
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-4 md:items-end">
          <div
            className="flex w-full max-w-xs flex-col items-center sm:max-w-sm lg:max-w-md"
            role="region"
            aria-roledescription="carousel"
            aria-label="Hero photo carousel"
          >
            <div className="relative w-full">
              {previousImage && (
                <figure
                  className={`absolute inset-0 w-full rounded-3xl bg-white p-4 text-center text-foreground shadow-xl ${previousImage.rotationClass} animate-vanish-out`}
                >
                  <img
                    src={previousImage.src}
                    alt={previousImage.alt}
                    className="h-64 w-full rounded-2xl object-cover md:h-72"
                  />
                  <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                    {previousImage.caption}
                  </figcaption>
                </figure>
              )}
              <figure
                key={activeImage.alt}
                ref={(node) => {
                  activeFigureRef.current = node
                }}
                className={`relative w-full rounded-3xl bg-white p-4 text-center text-foreground shadow-xl ${activeImage.rotationClass} animate-vanish-in`}
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="h-64 w-full rounded-2xl object-cover md:h-72"
                />
                <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                  {activeImage.caption}
                </figcaption>
              </figure>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setSlide((activeIndex - 1 + totalSlides) % totalSlides)}
                className="rounded-full border border-primary-foreground/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary-foreground/10 focus-visible-ring"
                aria-label="Previous slide"
              >
                Prev
              </button>
              <div className="flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSlide(index)}
                    className={`h-2.5 w-2.5 rounded-full border border-primary-foreground/50 transition ${
                      index === activeIndex ? "bg-amber-300" : "bg-primary-foreground/10"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setSlide((activeIndex + 1) % totalSlides)}
                className="rounded-full border border-primary-foreground/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary-foreground/10 focus-visible-ring"
                aria-label="Next slide"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}


