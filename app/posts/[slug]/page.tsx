import { getMdxPost, getMdxSlugs } from "@/lib/mdx"
import { PostClient } from "./PostClient"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <PostClient slug={slug} />
}

export async function generateStaticParams() {
  const slugs = await getMdxSlugs()
  return slugs.map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getMdxPost(slug)
  const title = (post.data?.title as string | undefined) ?? slug.replace(/_/g, " ")
  const description =
    (post.data?.excerpt as string | undefined) ?? `Tiempo de lectura: ${post.readingTimeMinutes} min`

  return {
    title,
    description,
  }
}
