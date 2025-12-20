"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Boundary } from "../utils"

interface NewsSearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export function NewsSearchBar({ onSearch, placeholder = "Buscar noticias..." }: NewsSearchBarProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !containerRef.current) return

    if (isFocused) {
      gsap.to(containerRef.current, {
        scale: 1.02,
        boxShadow: "0 0 0 3px var(--primary-20)",
        duration: 0.2,
        ease: "power2.out",
      })
    } else {
      gsap.to(containerRef.current, {
        scale: 1,
        boxShadow: "none",
        duration: 0.2,
        ease: "power2.out",
      })
    }
  }, [isFocused])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div ref={containerRef} className="relative flex items-center bg-muted rounded-xl overflow-hidden transition-all">
        <span className="pl-4 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
        />
        <Boundary
          when={query.length > 0}
          fallback={null}
        >
          <button
            type="button"
            onClick={() => {
              setQuery("")
              onSearch("")
            }}
            className="pr-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </Boundary>
      </div>
    </form>
  )
}
