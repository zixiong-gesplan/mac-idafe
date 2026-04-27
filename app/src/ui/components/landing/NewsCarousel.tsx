"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface NewsPost {
  slug: string
  title: string
  date: string
  description: string
  img?: string
}

interface NewsCarouselProps {
  posts: NewsPost[]
}

export function NewsCarousel({ posts }: NewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoplayIntervalRef = useRef<NodeJS.Timeout>(null)

  const itemsPerView = 2
  const totalSlides = Math.max(1, posts.length - itemsPerView + 1)

  useEffect(() => {
    const startAutoplay = () => {
      autoplayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
      }, 5000) // Cambiar cada 5 segundos
    }

    startAutoplay()

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
      }
    }
  }, [totalSlides])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const visiblePosts = posts.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div className="flex gap-6 transition-transform duration-500 ease-out px-8">
          {visiblePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group relative flex h-80 w-full min-w-full flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md md:min-w-[calc(50%-12px)]"
            >
              {post.img ? (
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-muted text-sm text-muted-foreground">
                  Sin imagen
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-primary-900/85 via-primary-700/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <div className="text-sm text-primary-100">
                  {post.date
                    ? new Date(post.date).toLocaleDateString("es-ES")
                    : "Sin fecha"}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {post.title}
                </h3>
                <span className="mt-4 inline-flex w-fit items-center rounded-full bg-cta-600 px-4 py-2 text-sm font-semibold text-white transition group-hover:shadow-md group-hover:ring-2 group-hover:ring-cta-300/50">
                  Leer mas
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {posts.length > itemsPerView && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Noticia anterior"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-6 rounded-full bg-primary/90 p-2 text-white transition hover:bg-primary md:-translate-x-4"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Siguiente noticia"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-6 rounded-full bg-primary/90 p-2 text-white transition hover:bg-primary md:translate-x-4"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a noticia ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
