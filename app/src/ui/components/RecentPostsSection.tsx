"use client"

import { PostCard } from "./PostCard"
import { AnimatedSection } from "./molecules/Section/Animated"
import type { PostDTO } from "../adapters/PostAdapter"

interface RecentPostsSectionProps {
  posts: PostDTO[]
}

export function RecentPostsSection({ posts }: RecentPostsSectionProps) {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade" className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Artículos Recientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Las últimas publicaciones de nuestro equipo de expertos en sostenibilidad.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="stagger" staggerDelay={0.12}>
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
