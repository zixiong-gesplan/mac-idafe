"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "../../hooks/useReducedMotion"
import Logo from "../atoms/Logo"
import LogoMAC from "../atoms/LogoMAC"
import LogoINTERREG from "../atoms/LogoINTERREG"

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
        {/* Left: logos + mobile toggle */}
        <div className="flex w-full items-center justify-between gap-3 md:w-1/3 md:justify-start min-w-0">
          <Link
            ref={logoRef}
            href="/"
            className="flex items-center gap-3 text-inherit min-w-0 focus-visible-ring"
          >
            <div className="flex items-center gap-3 min-w-0">
              <LogoMAC scrolled={scrolled} className="h-14 max-w-35 w-auto" />
              <span className="flex h-14 w-14 items-center justify-center rounded-full">
                <Logo scrolled={scrolled} className="h-14 w-auto" />
              </span>
              <LogoINTERREG scrolled={scrolled} className="h-20 max-w-35 w-auto" />

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 683 682" className="w-14 h-14 inline-block">
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

        {/* Center: navigation */}
        <nav
          aria-label="Primary navigation"
          className={`w-full flex-col items-center gap-3 text-sm font-medium text-inherit md:flex md:w-1/3 md:flex-row md:justify-center md:gap-6 md:mt-0 mt-4 ${desktopMutedTextClass} ${
            menuOpen ? "flex" : "hidden"
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

          {/* Mobile CTA placed inside nav for small screens */}
          <Link
            href="#"
            className={`inline-flex items-center justify-center rounded-full bg-cta-500 px-5 py-2 text-sm font-semibold text-cta-foreground shadow-sm transition hover:bg-cta-900 hover:text-white focus-visible-ring focus-visible:ring-cta-900 md:hidden ${
              menuOpen ? "flex" : "hidden"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {"\u00danete ahora"}
          </Link>
        </nav>

        {/* Right: CTA for desktop */}
        <div className="hidden md:flex md:w-1/3 md:justify-end">
          <Link
            ref={ctaRef}
            href="#"
            className={`inline-flex items-center justify-center rounded-full bg-cta-500 px-5 py-2 text-sm font-semibold text-cta-foreground shadow-sm transition hover:bg-brand-green hover:text-white focus-visible-ring focus-visible:ring-cta-900 ${
              "md:inline-flex"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {"\u00danete ahora"}
          </Link>
        </div>
      </div>
    </header>
  )
}

