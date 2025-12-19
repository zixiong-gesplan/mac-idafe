import { PostRepositoryJSON } from "@/infrastructure/repositories/PostRepositoryJSON"
import { GetPosts } from "@/application/use-cases/GetPosts"
import { PostAdapter } from "@/ui/adapters/PostAdapter"
import { PartnersSection } from "@/ui/components/PartnersSection"
import { HeroSection } from "@/ui/components/HeroSection"
import { StatsSection } from "@/ui/components/StatsSection"
import { FeaturedPostsSection } from "@/ui/components/FeaturedPostsSection"
import { CategoriesSection } from "@/ui/components/CategoriesSection"
import { RecentPostsSection } from "@/ui/components/RecentPostsSection"
import { ScrollProgressSections } from "@/ui/components/ScrollProgressSections"

export const metadata = {
  title: "EcoBlog - Educación Ambiental para un Futuro Sostenible",
  description:
    "Aprende sobre sostenibilidad, cambio climático, biodiversidad y prácticas ecológicas. Contenido educativo de calidad sobre medio ambiente.",
}

const sections = [
  { id: "hero", title: "Inicio" },
  { id: "stats", title: "Estadísticas" },
  { id: "featured", title: "Destacados" },
  { id: "categories", title: "Categorías" },
  { id: "recent", title: "Recientes" },
  { id: "partners", title: "Partners" },
]

export default async function HomePage() {
  // Dependency Injection
  const postRepository = new PostRepositoryJSON()
  const getPosts = new GetPosts(postRepository)

  // Execute use case
  const posts = await getPosts.execute()
  const featuredPosts = posts.filter((p) => p.isFeatured)
  const recentPosts = posts.slice(0, 6)

  // Adapt to DTOs for UI
  const featuredDTOs = PostAdapter.toDTOList(featuredPosts)
  const recentDTOs = PostAdapter.toDTOList(recentPosts)

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressSections sections={sections} />

      <HeroSection />
      <section id="stats">
        <StatsSection />
      </section>
      <section id="featured">
        <FeaturedPostsSection posts={featuredDTOs} />
      </section>
      <section id="categories">
        <CategoriesSection />
      </section>
      <section id="recent">
        <RecentPostsSection posts={recentDTOs} />
      </section>
      <section id="partners">
        <PartnersSection />
      </section>
    </div>
  )
}
