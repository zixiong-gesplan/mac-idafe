"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "../../hooks/useReducedMotion"
import Logo from "../atoms/Logo"

interface HeaderLink {
  label: string
  href: string
}

const navigation: HeaderLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Noticias", href: "/posts" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contacto", href: "/contacto" },
]

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !headerRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const header = headerRef.current
    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      if (!isMobile) {
        gsap.fromTo(
          header,
          {
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            backdropFilter: "blur(0px)",
          },
          {
            boxShadow: "0 8px 20px rgba(15, 23, 42, 0.08)",
            backdropFilter: "blur(10px)",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "top+=200 top",
              scrub: 0.4,
            },
          },
        )
      }

      gsap.fromTo(
        [logoRef.current, ctaRef.current],
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.4 : 0.6,
          stagger: 0.12,
          ease: "power3.out",
        },
      )
    }, header)

    return () => {
      ctx.revert()
    }
  }, [prefersReducedMotion])

  const desktopHeaderClass = scrolled
    ? "md:border-b md:border-primary/10 md:bg-white md:backdrop-blur-md md:shadow-sm md:text-primary"
    : "md:border-b md:border-transparent md:bg-primary md:text-white"
  const desktopMutedTextClass = scrolled ? "md:text-primary/80" : "md:text-white/80"
  const desktopHoverClass = scrolled ? "md:hover:text-primary" : "md:hover:text-cta"

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 z-40 w-full bg-primary text-white shadow-sm transition-colors duration-300 ${
        scrolled ? "border-b border-primary/10 bg-white text-primary" : "border-b border-transparent"
      } ${desktopHeaderClass}`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-4 text-center md:flex-row md:items-center md:text-left">
        <div className="flex w-full items-center justify-between gap-3 md:w-1/4 md:justify-start">
          <Link
            ref={logoRef}
            href="/"
            className="flex items-center gap-3 text-inherit focus-visible-ring"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full">
              <Logo className="text-inherit" />
            </span>
            <span className="text-lg font-semibold tracking-tight">MAC-IDAFE</span>
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-transparent p-2 text-inherit transition hover:text-primary focus-visible-ring md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <nav
          aria-label="Primary navigation"
          className={`flex flex-col items-center gap-3 text-sm font-medium text-inherit md:w-1/2 md:flex-row md:justify-center md:gap-6 ${desktopMutedTextClass} ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-3 py-1 text-inherit transition-colors hover:text-primary focus-visible-ring ${desktopHoverClass}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

        <Link
          ref={ctaRef}
          href="#"
          className={`inline-flex items-center justify-center rounded-full bg-cta-500 px-5 py-2 text-sm font-semibold text-cta-foreground shadow-sm transition hover:bg-cta-900 hover:text-white focus-visible-ring focus-visible:ring-cta-900 md:ml-auto ${
            menuOpen ? "flex" : "hidden md:inline-flex"
          }`}
            onClick={() => setMenuOpen(false)}
          >
            {"\u00danete ahora"}
          </Link>
        </nav>


      </div>
    </header>
  )
}

