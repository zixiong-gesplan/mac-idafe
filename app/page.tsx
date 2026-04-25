import { BenefitsSection } from "@ui/components/landing/BenefitsSection"
import { HeroSection } from "@ui/components/landing/HeroSection"
import { TestimonialsSection } from "@ui/components/landing/TestimonialsSection"
import { ActivitiesSection } from "@ui/components/landing/ActivitiesSection"
import { PartnersSection } from "@ui/components/molecules/Section/Partners"
import { ScrollProgressSections } from "@ui/components/ScrollProgressSections"
import { StatsSection } from "@ui/components/molecules/Section/Stats"
import { NewsCarousel } from "@ui/components/landing/NewsCarousel"
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
  }).slice(0, 5)
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
      <section id="posts" className="bg-primary-100/40 px-4 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-primary-900">Noticias</h2>
            <p className="mt-2 text-muted-foreground">
              Ultimas novedades y comunicados del proyecto.
            </p>
          </div>
          <NewsCarousel posts={sortedMdxPosts} />
        </div>
      </section>
      <section id="partners">
        <PartnersSection />
      </section>
    </div>
  )
}
