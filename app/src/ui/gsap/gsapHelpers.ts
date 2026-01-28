"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface FadeUpOptions {
  duration?: number
  delay?: number
  y?: number
  start?: string
  trigger?: gsap.TweenTarget
  reducedMotion?: boolean
}

interface StaggerInOptions {
  duration?: number
  delay?: number
  y?: number
  start?: string
  stagger?: number
  trigger?: gsap.TweenTarget
  reducedMotion?: boolean
}

interface FloatOptions {
  distance?: number
  duration?: number
  reducedMotion?: boolean
}

export function fadeUp(target: gsap.TweenTarget, options: FadeUpOptions = {}) {
  const {
    duration = 0.7,
    delay = 0,
    y = 32,
    start = "top 85%",
    trigger = target,
    reducedMotion = false,
  } = options

  gsap.registerPlugin(ScrollTrigger)

  if (reducedMotion) {
    gsap.set(target, { opacity: 1, y: 0 })
    return
  }

  gsap.fromTo(
    target,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: trigger as gsap.DOMTarget,
        start,
        toggleActions: "play none none none",
      },
    },
  )
}

export function staggerIn(targets: gsap.TweenTarget, options: StaggerInOptions = {}) {
  const {
    duration = 0.6,
    delay = 0,
    y = 24,
    start = "top 85%",
    stagger = 0.12,
    trigger = targets,
    reducedMotion = false,
  } = options

  gsap.registerPlugin(ScrollTrigger)

  if (reducedMotion) {
    gsap.set(targets, { opacity: 1, y: 0 })
    return
  }

  gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: trigger as gsap.DOMTarget,
        start,
        toggleActions: "play none none none",
      },
    },
  )
}

export function float(target: gsap.TweenTarget, options: FloatOptions = {}) {
  const { distance = 10, duration = 3.2, reducedMotion = false } = options

  if (reducedMotion) {
    gsap.set(target, { y: 0 })
    return
  }

  gsap.to(target, {
    y: distance,
    duration,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  })
}
