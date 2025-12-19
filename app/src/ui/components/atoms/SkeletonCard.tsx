import React from "react"
export function SkeletonCard() {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden p-6">
      {/* Title */}
      <div className="skeleton skeleton-title" aria-hidden="true" />

      {/* Categories */}
      <div className="flex gap-2 mb-4">
        <div className="skeleton h-6 w-20" aria-hidden="true" />
        <div className="skeleton h-6 w-24" aria-hidden="true" />
      </div>

      {/* Excerpt */}
      <div className="space-y-2 mb-4">
        <div className="skeleton skeleton-text" aria-hidden="true" />
        <div className="skeleton skeleton-text" aria-hidden="true" />
        <div className="skeleton skeleton-text w-3/4" aria-hidden="true" />
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3">
        <div className="skeleton skeleton-avatar" aria-hidden="true" />
        <div className="skeleton h-4 w-32" aria-hidden="true" />
      </div>

      <span className="sr-only">Cargando artículo...</span>
    </div>
  )
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }, (_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
