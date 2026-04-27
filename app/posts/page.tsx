import { PageHero, PostListCard, SectionCardGrid } from "@ui/components/shared"
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
    <main className="mt-20 min-h-screen bg-background px-4 py-12">
      <div className="mx-auto w-full max-w-5xl">
        <PageHero
          as="header"
          title="Noticias"
          description="Ultimas novedades y comunicados del proyecto."
          className="mb-10"
        />

        <SectionCardGrid columns={1} gridClassName="gap-6">
          {sortedPosts.map((post) => (
            <PostListCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              description={post.description}
              img={post.img}
            />
          ))}
        </SectionCardGrid>
      </div>
    </main>
  )
}
