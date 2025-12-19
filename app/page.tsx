import { GetPosts } from "./src/application/use-cases/GetPosts"
import { PostRepositoryJSON } from "./src/infrastructure/repositories/PostRepositoryJSON"
import { PostAdapter } from "./src/ui/adapters/PostAdapter"
import { CategoriesSection } from "./src/ui/components/CategoriesSection"
import { FeaturedPostsSection } from "./src/ui/components/FeaturedPostsSection"
import { HeroSection } from "./src/ui/components/HeroSection"
import { PartnersSection } from "./src/ui/components/PartnersSection"
import { RecentPostsSection } from "./src/ui/components/RecentPostsSection"
import { ScrollProgressSections } from "./src/ui/components/ScrollProgressSections"
import { StatsSection } from "./src/ui/components/StatsSection"


export const metadata = {
  title: "MAC-IDAFE - Red Macaronesia de centros escolares par ala educación ambiental",
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
