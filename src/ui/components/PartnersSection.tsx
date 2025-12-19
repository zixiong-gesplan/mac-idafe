"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PartnerCard } from "./PartnerCard"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const partners = [
  {
    name: "WWF",
    description:
      "Organización mundial dedicada a la conservación de la naturaleza y reducción de amenazas ambientales.",
    logo: "/generic-panda-logo.png",
    website: "https://www.worldwildlife.org",
    category: "Conservación",
  },
  {
    name: "Greenpeace",
    description: "Activismo ecológico global para proteger el medio ambiente y promover la paz.",
    logo: "/greenpeace-logo.jpg",
    website: "https://www.greenpeace.org",
    category: "Activismo",
  },
  {
    name: "Ocean Cleanup",
    description: "Tecnología innovadora para limpiar plásticos de océanos y ríos.",
    logo: "/ocean-cleanup-logo.jpg",
    website: "https://theoceancleanup.com",
    category: "Tecnología",
  },
  {
    name: "Reforestum",
    description: "Plataforma de reforestación para compensar huella de carbono plantando árboles.",
    logo: "/reforestum-tree-logo.jpg",
    website: "https://reforestum.com",
    category: "Reforestación",
  },
  {
    name: "Solar Energy International",
    description: "Educación y entrenamiento en energías renovables y construcción sostenible.",
    logo: "/solar-energy-logo.jpg",
    website: "https://www.solarenergy.org",
    category: "Energía",
  },
  {
    name: "Zero Waste Europe",
    description: "Red europea trabajando hacia la eliminación de residuos mediante diseño circular.",
    logo: "/zero-waste-europe-logo.jpg",
    website: "https://zerowasteeurope.eu",
    category: "Economía Circular",
  },
]

export function PartnersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      )

      // Grid cards stagger animation
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      }

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Colaboramos con organizaciones líderes en sostenibilidad, conservación y educación ambiental para amplificar
            nuestro impacto.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} {...partner} />
          ))}
        </div>

        <div ref={ctaRef} className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">¿Quieres colaborar con nosotros?</p>
          <a
            href="mailto:partners@ecoblog.org"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            Contactar
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
