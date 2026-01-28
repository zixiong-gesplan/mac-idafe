import Link from "next/link"
import Image from "next/image"
import { getMdxPost, getMdxSlugs } from "@/lib/mdx"

type PostPreview = {
  slug: string
  title: string
  date: string
  description: string
  img?: string
}

function normalizePost(slug: string, data: Record<string, unknown>): PostPreview {
  return {
    slug,
    title: (data.title as string | undefined) ?? slug.replace(/_/g, " "),
    date: (data.date as string | undefined) ?? "",
    description: (data.description as string | undefined) ?? "",
    img: (data.img as string | undefined) ?? undefined,
  }
}

export default async function PostsPage() {
  const slugs = await getMdxSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getMdxPost(slug)
      return normalizePost(slug, post.data ?? {})
    }),
  )

  const sortedPosts = posts.sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0
    const bTime = b.date ? new Date(b.date).getTime() : 0
    return bTime - aTime
  })

  return (
    <main className="min-h-screen bg-background px-4 py-12 mt-20">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
            Noticias
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Ultimas novedades y comunicados del proyecto.
          </p>
        </header>

        <div className="grid gap-6">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg md:flex-row"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-xl md:h-40 md:w-64">
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
              </div>

              <div className="flex flex-1 flex-col">
                <div className="text-sm text-muted-foreground">
                  {post.date ? new Date(post.date).toLocaleDateString("es-ES") : "Sin fecha"}
                </div>
                <h2 className="mt-2 text-xl font-semibold text-foreground">{post.title}</h2>
                {post.description ? (
                  <p className="mt-2 text-muted-foreground">{post.description}</p>
                ) : null}
                <span className="mt-4 text-sm font-medium text-primary">
                  Leer noticia →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
