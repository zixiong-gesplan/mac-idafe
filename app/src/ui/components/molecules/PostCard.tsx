import React from "react"
import Link from "next/link"
import { PostDTO } from "../../adapters/PostAdapter"

interface PostCardProps {
  post: PostDTO
}

export function PostCard({ post }: PostCardProps) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="bg-card rounded-lg border border-border overflow-hidden card-hover focus-ring">
      <Link href={`/posts/${post.slug}`} className="block p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2 link-animated transition-fast">{post.title}</h2>
            {post.featured && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                ⭐ Destacado
              </span>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map((category) => (
            <span
              key={category.slug}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border transition-smooth hover-lift"
              style={{
                backgroundColor: category.color ? `${category.color}15` : undefined,
                borderColor: category.color || "var(--border)",
                color: category.color || "var(--foreground)",
              }}
            >
              {category.icon && <span>{category.icon}</span>}
              {category.name}
            </span>
          ))}
        </div>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 line-clamp-3 text-balance">{post.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {post.author.avatar && (
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-6 h-6 rounded-full"
                />
              )}
              <span>{post.author.name}</span>
            </div>
            <span>•</span>
            <time dateTime={post.publishedAt}>{publishedDate}</time>
          </div>
          <span>{post.readingTimeMinutes} min lectura</span>
        </div>
      </Link>
    </article>
  )
}
