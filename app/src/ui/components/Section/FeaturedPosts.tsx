"use client"

import { PostCard } from "../PostCard"
import { AnimatedSection } from "./Animated"
import { AnimatedText } from "../Text/Animated"
import type { PostDTO } from "../../adapters/PostAdapter"

interface FeaturedPostsSectionProps {
  posts: PostDTO[]
}

export function FeaturedPostsSection({ posts }: FeaturedPostsSectionProps) {
  if (posts.length === 0) return null

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade" className="mb-10">
          <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Artículos Destacados
          </AnimatedText>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Contenido seleccionado por nuestro equipo editorial para inspirar el cambio ambiental.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="stagger" staggerDelay={0.15}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
