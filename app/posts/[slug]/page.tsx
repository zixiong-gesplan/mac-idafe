import { notFound } from "next/navigation"
import Link from "next/link"
import { PostRepositoryJSON } from "@infrastructure/repositories/PostRepositoryJSON"
import { GetPostBySlug } from "@application/use-cases/GetPostBySlug"
import { PostAdapter } from "@ui/adapters/PostAdapter"
import { ReadingProgress } from "@ui/components/ReadingProgress"

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params
  const postRepository = new PostRepositoryJSON()
  const getPostBySlug = new GetPostBySlug(postRepository)
  const post = await getPostBySlug.execute(slug)

  if (!post) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: `${post.title} | EcoBlog`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params

  // Dependency Injection
  const postRepository = new PostRepositoryJSON()
  const getPostBySlug = new GetPostBySlug(postRepository)

  // Execute use case
  const post = await getPostBySlug.execute(slug)

  if (!post) {
    notFound()
  }

  // Adapt to DTO for UI
  const postDTO = PostAdapter.toDTO(post)

  const publishedDate = new Date(postDTO.publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />

      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors link-animated focus-ring"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Article */}
      {/* Add fade-in animation to article */}
      <article className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
        {/* Header */}
        <header className="mb-8">
          {postDTO.featured && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              ⭐ Artículo Destacado
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{postDTO.title}</h1>

          <p className="text-xl text-muted-foreground mb-6 text-pretty">{postDTO.excerpt}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              {postDTO.author.avatar && (
                <img
                  src={postDTO.author.avatar || "/placeholder.svg"}
                  alt={postDTO.author.name}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <div className="font-medium text-foreground">{postDTO.author.name}</div>
                <div className="text-sm text-muted-foreground">{postDTO.author.bio}</div>
              </div>
            </div>
            <span className="text-muted-foreground">•</span>
            <time dateTime={postDTO.publishedAt} className="text-muted-foreground">
              {publishedDate}
            </time>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{postDTO.readingTimeMinutes} min lectura</span>
          </div>

          {/* Categories & Tags */}
          {/* Add hover effects to category links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {postDTO.categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border transition-smooth hover-lift focus-ring"
                style={{
                  backgroundColor: category.color ? `${category.color}15` : undefined,
                  borderColor: category.color || "var(--border)",
                  color: category.color || "var(--foreground)",
                }}
              >
                {category.icon && <span>{category.icon}</span>}
                {category.name}
              </Link>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-foreground prose-ol:text-foreground">
          <div
            dangerouslySetInnerHTML={{
              __html: postDTO.content.replace(/\n/g, "<br />"),
            }}
          />
        </div>

        {/* Tags */}
        {postDTO.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Etiquetas:</h3>
            {/* Add hover effects to tags */}
            <div className="flex flex-wrap gap-2">
              {postDTO.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground transition-smooth hover-scale"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
