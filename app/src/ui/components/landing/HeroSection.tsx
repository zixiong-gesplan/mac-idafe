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
  //     "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='480' viewBox='0 0 640 480'><rect width='640' height='480' fill='%23fce7f3'/><rect x='50' y='50' width='540' height='300' fill='%23bbf7d0'/><circle cx='200' cy='210' r='58' fill='%23059669' opacity='0.18'/><circle cx='430' cy='210' r='74' fill='%23059669' opacity='0.22'/><text x='50%' y='85%' fontSize='28' fontFamily='Arial' text-anchor='middle' fill='%231f2937'>Grow</text></svg>",
  //   alt: "Students collaborating in small groups",
  //   rotationClass: "-rotate-2",
  //   caption: "Growing together",
  // },
  // {
  //   src:
  //     "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='480' viewBox='0 0 640 480'><rect width='640' height='480' fill='%23fef3c7'/><rect x='60' y='60' width='520' height='300' fill='%23bbf7d0'/><circle cx='210' cy='190' r='56' fill='%23059669' opacity='0.2'/><circle cx='460' cy='220' r='72' fill='%23059669' opacity='0.2'/><text x='50%' y='85%' fontSize='28' fontFamily='Arial' text-anchor='middle' fill='%231f2937'>Discover</text></svg>",
  //   alt: "A classroom moment full of discovery",
  //   rotationClass: "rotate-3",
  //   caption: "Discover daily",
  // },
  // {
  //   src:
  //     "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='480' viewBox='0 0 640 480'><rect width='640' height='480' fill='%23ecfccb'/><rect x='50' y='60' width='540' height='300' fill='%23fef9c3'/><circle cx='190' cy='210' r='62' fill='%23059669' opacity='0.2'/><circle cx='460' cy='200' r='68' fill='%23059669' opacity='0.2'/><text x='50%' y='85%' fontSize='28' fontFamily='Arial' text-anchor='middle' fill='%231f2937'>Learn</text></svg>",
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
      <div className="md:h-screen">
        <div className="w-full text-sm text-primary-foreground/80 sm:text-base lg:text-lg flex gap-4 px-4 pt-24 md:gap-12 md:pb-8 md:pt-28 md:text-left mx-auto justify-center items-center">
            {/* MAC-IDAFE_2CAP conecta escuelas y comunidades para acelerar la accion climatica local. */}
            <img src="/Interreg.png" alt="" className="h-28"/>
            <img src="/MAC.png" alt="" className="h-28"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 683 682" className="w-20 h-20 inline-block">
              <path stroke="#ffffff" strokeWidth="12.5" d="M341.5 6.25c185.144 0 335.25 149.864 335.25 334.75S526.644 675.75 341.5 675.75 6.25 525.886 6.25 341 156.356 6.25 341.5 6.25Z"/>
              <path fill="#ffffff" d="M575.113 369.034c.404 4.066 3.941 7.266 8.029 7.266h26.075a8.064 8.064 0 0 0 8.062-8.066c0-4.455-3.612-8.067-8.062-8.067h-6.6L625.783 337a8.074 8.074 0 0 0 0-11.408 8.067 8.067 0 0 0-11.408 0l-23.171 23.171v-6.605a8.061 8.061 0 0 0-8.062-8.066 8.068 8.068 0 0 0-8.071 8.066v26.071c0 .267.012.538.042.805ZM347.429 584.4c-3.192-2.562-7.954-2.258-10.808.663l-18.217 18.658a8.077 8.077 0 0 0 .137 11.409 8.073 8.073 0 0 0 11.409-.138l4.612-4.725.388 32.763c.062 4.454 3.712 8.02 8.162 7.966a8.03 8.03 0 0 0 5.679-2.433 8.054 8.054 0 0 0 2.296-5.729l-.396-32.759 4.721 4.609a8.069 8.069 0 0 0 11.409-.138 8.063 8.063 0 0 0-.138-11.404l-18.65-18.212a8.064 8.064 0 0 0-.604-.53ZM195.477 131.933a8.04 8.04 0 0 0-5.704-2.358 8.03 8.03 0 0 0-5.705 2.362 8.063 8.063 0 0 0 0 11.405l23.171 23.166h-6.604a8.066 8.066 0 0 0-8.067 8.067 8.069 8.069 0 0 0 8.067 8.067h26.075c4.383 0 8.067-3.675 8.067-8.075v-26.063a8.069 8.069 0 0 0-8.067-8.067 8.069 8.069 0 0 0-8.067 8.067v6.596l-23.166-23.167ZM321.657 241.512c0-8.304 6.758-15.063 15.062-15.063 8.3 0 15.059 6.759 15.059 15.063 0 8.3-6.759 15.058-15.059 15.058-8.304 0-15.062-6.758-15.062-15.058Zm41.917 0c0-14.804-12.05-26.854-26.855-26.854-14.804 0-26.85 12.05-26.85 26.854 0 14.8 12.046 26.846 26.85 26.846 14.805 0 26.855-12.046 26.855-26.846Z"/>
              <path fill="#ffffff" d="M159.079 290.696h23.579v9.825c0 6.921 5.142 12.642 11.792 13.6v143.975c-6.65.963-11.792 6.688-11.792 13.6v9.825h-23.579V290.696Zm35.371 0h52.179v9.825a1.97 1.97 0 0 1-1.966 1.967h-48.246a1.968 1.968 0 0 1-1.967-1.967v-9.825Zm11.788 23.579h28.595v143.667h-28.595V314.275Zm40.391 167.246H194.45v-9.825c0-1.083.879-1.962 1.967-1.962h48.246c1.083 0 1.966.879 1.966 1.962v9.825Zm180.184-190.825h52.175v9.825a1.967 1.967 0 0 1-1.963 1.967h-48.246a1.97 1.97 0 0 1-1.966-1.967v-9.825Zm-84.196-164.404h45.029v23.579h-45.029v-23.579Zm17.4 378.858H149.254a1.975 1.975 0 0 1-1.966-1.979v-7.875c0-1.096.883-1.983 1.966-1.983h206.884a105.94 105.94 0 0 1-2.38-11.792h-51.254v-96.012c0-1.084.884-1.963 1.967-1.963h64.496c1.087 0 1.967.879 1.967 1.963v20.52c3.5-5.187 7.462-10.033 11.791-14.525v-5.995c0-7.584-6.175-13.755-13.758-13.755h-64.496c-7.588 0-13.758 6.171-13.758 13.755v96.012h-32.296v-9.825c0-6.912-5.138-12.642-11.788-13.6V314.121c6.654-.958 11.788-6.679 11.788-13.6v-9.825h156.608v9.825c0 6.921 5.129 12.642 11.788 13.6v49.758a106.853 106.853 0 0 1 11.791-3.116v-46.488h28.592v44.609c3.996.266 7.929.75 11.792 1.437v-46.2c6.654-.958 11.787-6.679 11.787-13.6v-9.825h23.588v82.692a107.286 107.286 0 0 1 11.787 8.033v-90.725h.392c6.283 0 11.4-5.113 11.4-11.396v-29.821c0-6.283-5.117-11.396-11.4-11.396h-79.638a9.831 9.831 0 0 1-4.766-1.237l-99.521-55.292v-19.891h45.417c6.287 0 11.4-5.113 11.4-11.4V125.9c0-6.287-5.113-11.4-11.4-11.4h-45.813c-6.283 0-11.396 5.113-11.396 11.4v55.654l-50.929 28.292a5.897 5.897 0 1 0 5.729 10.308l51.096-28.387 99.688 55.383a21.619 21.619 0 0 0 10.495 2.721h79.246v29.033H147.288v-29.033h79.245c3.663 0 7.292-.938 10.496-2.721l24.692-13.717a5.897 5.897 0 0 0-5.725-10.308l-24.692 13.721a9.859 9.859 0 0 1-4.771 1.237h-79.637c-6.283 0-11.396 5.113-11.396 11.396V279.3c0 6.283 5.113 11.396 11.396 11.396h.392v190.983c-6.655.963-11.788 6.688-11.788 13.617v7.875c0 7.592 6.167 13.771 13.754 13.771H365.45a106.422 106.422 0 0 1-5.433-11.792Z"/>
              <path fill="#ffffff" d="M387.146 337.975h-100.85v-13.487h100.85v13.487Zm.395-25.283H285.904c-6.283 0-11.4 5.116-11.4 11.4v14.275c0 6.283 5.117 11.396 11.4 11.396h101.637c6.284 0 11.4-5.113 11.4-11.396v-14.275c0-6.284-5.116-11.4-11.4-11.4Z"/>
              <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8.333" d="M456.137 395.2c0-5.616 4.559-10.171 10.175-10.171 5.621 0 10.175 4.555 10.175 10.171v3.392a10.173 10.173 0 0 1-10.175 10.175c-5.616 0-10.175-4.554-10.175-10.175V395.2ZM433.242 468.963l-9.972 34.699M401.879 449.463c0-6.784 3.388-6.784 10.171-6.784 6.783 0 31.162 21.417 31.162 21.417a4.58 4.58 0 0 1 1.142 5.55l-.004.004a4.575 4.575 0 0 1-5.542 2.296l-16.579-8.917-3.396 6.784M401.879 422.334c0-5.62 4.555-10.175 10.175-10.175 5.619 0 10.175 4.555 10.175 10.175 0 5.619-4.556 10.175-10.175 10.175-5.62 0-10.175-4.556-10.175-10.175ZM486.662 435.9v-6.783c0-7.913-10.175-10.175-20.35-10.175s-20.35 2.262-20.35 10.175v6.783M388.312 527.471v-30.525c0-4.683 3.388-6.783 10.171-6.783 6.784 0 31.163 18.029 31.163 18.029a4.576 4.576 0 0 1 1.141 5.546l-.004.008a4.568 4.568 0 0 1-5.541 2.292l-16.58-5.525-3.395 3.392M388.312 469.813c0-5.62 4.556-10.175 10.175-10.175 5.62 0 10.175 4.555 10.175 10.175 0 5.619-4.555 10.175-10.175 10.175-5.619 0-10.175-4.556-10.175-10.175Z"/>
              <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8.333" d="m436.467 458.417 2.712-8.954h54.267l2.712 8.954M512.437 514.342l4.75 16.517H415.446l4.741-16.517M509.349 503.66l-9.975-34.695"/>
              <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8.333" d="M530.75 449.463c0-6.784-3.388-6.784-10.171-6.784-6.783 0-31.162 21.417-31.162 21.417a4.58 4.58 0 0 0-1.142 5.55l.004.004a4.575 4.575 0 0 0 5.542 2.296l16.579-8.917 3.396 6.784M530.75 422.334c0 5.619-4.556 10.175-10.175 10.175-5.62 0-10.175-4.556-10.175-10.175 0-5.62 4.555-10.175 10.175-10.175 5.619 0 10.175 4.555 10.175 10.175ZM544.317 527.471v-30.525c0-4.683-3.388-6.783-10.171-6.783-6.784 0-31.163 18.029-31.163 18.029a4.576 4.576 0 0 0-1.141 5.546l.004.008a4.568 4.568 0 0 0 5.541 2.292l16.58-5.525 3.395 3.392M544.317 469.813c0 5.619-4.556 10.175-10.175 10.175-5.62 0-10.175-4.556-10.175-10.175 0-5.62 4.555-10.175 10.175-10.175 5.619 0 10.175 4.555 10.175 10.175Z"/>
              <path stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="12.5" d="M368.587 537.154c-22.133-41.841-21.896-90.708 2.059-127.412 5.4-8.275 27.916-40.317 70.629-48.479 58.512-11.184 100.8 32.791 103.712 35.929"/>
            </svg>
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 text-center md:flex-row md:items-center md:justify-between">
          <div ref={textRef} className="flex flex-1 flex-col items-center gap-5 md:items-start">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
              Proyecto MAC-IDAFE_2CAP
            </p>
            <h1 className="text-3xl font-bold leading-tight text-primary-foreground sm:text-2xl lg:text-3xl text-left">
              <span className="block">Educación ambiental</span>
              <span className="block">para una región resiliente</span>
            </h1>
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
                  className="rounded-full border border-primary-foreground/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible-ring inline-flex items-center justify-center bg-amber-300 text-foreground shadow-md hover:bg-amber-200 focus-visible-ring"
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
                        index === activeIndex ? "bg-amber-300" : "bg-primary-foreground/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSlide((activeIndex + 1) % totalSlides)}
                  className="rounded-full border border-primary-foreground/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible-ring inline-flex items-center justify-center bg-amber-300 text-foreground shadow-md hover:bg-amber-200 focus-visible-ring"
                  aria-label="Next slide"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </section>
  )
}


