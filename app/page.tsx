import { CategoriesSection } from "@ui/components/molecules/Section/Categories"
import { BenefitsSection } from "@ui/components/landing/BenefitsSection"
import { HeroSection } from "@ui/components/landing/HeroSection"
import { TestimonialsSection } from "@ui/components/landing/TestimonialsSection"
import { ActivitiesSection } from "@ui/components/landing/ActivitiesSection"
import { PartnersSection } from "@ui/components/molecules/Section/Partners"
import { ScrollProgressSections } from "@ui/components/ScrollProgressSections"
import { StatsSection } from "@ui/components/molecules/Section/Stats"
import Link from "next/link"
import Image from "next/image"
import { getMdxPost, getMdxSlugs } from "@/lib/mdx"

export const metadata = {
  title: "MAC-IDAFE - Red de Escuelas por la Accion Climatica de la Macaronesia",
  description:
    "Aprende sobre sostenibilidad, cambio climatico, biodiversidad y practicas ecologicas. Contenido educativo de calidad sobre medio ambiente.",
}

const sections = [
  { id: "hero", title: "Inicio" },
  { id: "stats", title: "Estadisticas" },
  { id: "posts", title: "Noticias" },
  { id: "categories", title: "Categorias" },
  { id: "partners", title: "Partners" },
]

export default async function HomePage() {
  const slugs = await getMdxSlugs()
  const mdxPosts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getMdxPost(slug)
      return {
        slug,
        title: (post.data?.title as string | undefined) ?? slug.replace(/_/g, " "),
        date: (post.data?.date as string | undefined) ?? "",
        description: (post.data?.description as string | undefined) ?? "",
        img: (post.data?.img as string | undefined) ?? undefined,
      }
    }),
  )
  const sortedMdxPosts = mdxPosts.sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0
    const bTime = b.date ? new Date(b.date).getTime() : 0
    return bTime - aTime
  })
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressSections sections={sections} />

      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ActivitiesSection />
      <section id="stats">
        <StatsSection />
      </section>
      <section id="posts" className="px-4 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-foreground">Noticias</h2>
            <p className="mt-2 text-muted-foreground">
              Ultimas novedades y comunicados del proyecto.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {sortedMdxPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl h-80 w-full"
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
                    <div className="absolute inset-0 bg-linear-to-t from-emerald-900/80 via-emerald-900/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <div className="text-sm text-emerald-100">
                      {post.date ? new Date(post.date).toLocaleDateString("es-ES") : "Sin fecha"}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
                      {/* {post.description ? (
                      <p className="mt-2 text-gray-200 line-clamp-2">{post.description}</p>
                      ) : null} */}
                    <span className="mt-4 text-sm font-medium text-yellow-400">Leer noticia →</span>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
      <section id="partners">
        <PartnersSection />
      </section>
    </div>
  )
}

