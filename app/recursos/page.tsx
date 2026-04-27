import type { Metadata } from "next"
import { InfoCard, PageHero, SectionCardGrid } from "@ui/components/shared"

type ResourceItem = {
  title: string
  description: string
  ctaHref: string
  cta: string
}

const didacticResources: ResourceItem[] = [
  {
    title: "Actividades para aula",
    description:
      "Coleccion de dinamicas practicas para trabajar accion climatica y sostenibilidad en primaria y secundaria.",
    ctaHref: "/",
    cta: "Ver actividades",
  },
  {
    title: "Guia para docentes",
    description:
      "Recomendaciones para integrar educacion ambiental en materias existentes sin aumentar la carga docente.",
    ctaHref: "/sobre-nosotros",
    cta: "Leer guia",
  },
  {
    title: "Noticias del proyecto",
    description:
      "Actualizaciones, hitos y aprendizajes de la red MAC-IDAFE_2CAP en Madeira, Azores y Canarias.",
    ctaHref: "/posts",
    cta: "Explorar noticias",
  },
]

const supportResources: ResourceItem[] = [
  {
    title: "Biblioteca digital",
    description:
      "Listado de referencias y contenidos recomendados para ampliar el trabajo en clase y en comunidad.",
    ctaHref: "/noticias",
    cta: "Abrir biblioteca",
  },
  {
    title: "Canales de colaboracion",
    description:
      "Espacios para conectar centros educativos, compartir experiencias y coordinar acciones conjuntas.",
    ctaHref: "/sobre-nosotros",
    cta: "Conectar",
  },
]

export const metadata: Metadata = {
  title: "Recursos - MAC-IDAFE",
  description:
    "Recursos educativos y materiales de apoyo de MAC-IDAFE para impulsar la educacion ambiental en centros escolares.",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(47,136,82,0.14),transparent_55%),linear-gradient(180deg,#f6fff8_0%,#ffffff_35%)]">
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-32 md:pt-36">
        <PageHero
          as="header"
          eyebrow="MAC-IDAFE"
          title="Recursos para educacion ambiental en la Macaronesia"
          description="Esta pagina reune materiales utiles para docentes, alumnado y centros educativos que participan en la red MAC-IDAFE_2CAP."
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <SectionCardGrid title="Recursos didacticos" columns={3}>
          {didacticResources.map((resource) => (
            <InfoCard
              key={resource.title}
              title={resource.title}
              description={resource.description}
              href={resource.ctaHref}
              ctaLabel={resource.cta}
            />
          ))}
        </SectionCardGrid>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6">
        <SectionCardGrid title="Material de apoyo" columns={2}>
          {supportResources.map((resource) => (
            <InfoCard
              key={resource.title}
              title={resource.title}
              description={resource.description}
              href={resource.ctaHref}
              ctaLabel={resource.cta}
            />
          ))}
        </SectionCardGrid>
      </section>
    </div>
  )
}

