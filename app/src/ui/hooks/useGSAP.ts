"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "./useReducedMotion"

/**
 * Hook for fade-in animation on scroll
 */
export function useFadeInOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (prefersReducedMotion || !ref.current) return

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill()
      })
    }
  }, [])

  return ref
}

/**
 * Hook for staggered children animation on scroll
 */
export function useStaggerOnScroll<T extends HTMLElement>(staggerDelay = 0.1) {
  const ref = useRef<T>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (prefersReducedMotion || !ref.current) return

    const children = ref.current.children

    gsap.fromTo(
      children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: staggerDelay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill()
      })
    }
  }, [staggerDelay])

  return ref
}

/**
 * Hook for parallax effect
 */
export function useParallax<T extends HTMLElement>(speed = 0.3) {
  const ref = useRef<T>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (prefersReducedMotion || !ref.current) return

    gsap.to(ref.current, {
      y: () => window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill()
      })
    }
  }, [speed])

  return ref
}

/**
 * Hook for counting up animation
 */
export function useCountUp(endValue: number, duration = 2, suffix = "") {
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (prefersReducedMotion || !ref.current || hasAnimated) {
      if (ref.current) ref.current.textContent = `${endValue}${suffix}`
      return
    }

    const counter = { value: 0 }

    gsap.to(counter, {
      value: endValue,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
        onEnter: () => setHasAnimated(true),
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(counter.value)}${suffix}`
        }
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill()
      })
    }
  }, [endValue, duration, suffix, hasAnimated])

  return { ref }
}

/**
 * Hook for text reveal animation
 */
export function useTextReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (prefersReducedMotion || !ref.current) return

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 30,
        clipPath: "inset(100% 0% 0% 0%)",
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill()
      })
    }
  }, [])

  return ref
}

/**
 * Hook for magnetic button effect
 */
export function useMagneticEffect<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return

    const element = ref.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      })
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [strength])

  return ref
}
