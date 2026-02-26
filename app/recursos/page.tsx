import type { Metadata } from "next"
import Link from "next/link"

interface ResourceItem {
  title: string
  description: string
  href: string
  cta: string
}

const didacticResources: ResourceItem[] = [
  {
    title: "Actividades para aula",
    description:
      "Coleccion de dinamicas practicas para trabajar accion climatica y sostenibilidad en primaria y secundaria.",
    href: "/",
    cta: "Ver actividades",
  },
  {
    title: "Guia para docentes",
    description:
      "Recomendaciones para integrar educacion ambiental en materias existentes sin aumentar la carga docente.",
    href: "/sobre-nosotros",
    cta: "Leer guia",
  },
  {
    title: "Noticias del proyecto",
    description:
      "Actualizaciones, hitos y aprendizajes de la red MAC-IDAFE_2CAP en Madeira, Azores y Canarias.",
    href: "/posts",
    cta: "Explorar noticias",
  },
]

const supportResources: ResourceItem[] = [
  {
    title: "Biblioteca digital",
    description:
      "Listado de referencias y contenidos recomendados para ampliar el trabajo en clase y en comunidad.",
    href: "/noticias",
    cta: "Abrir biblioteca",
  },
  {
    title: "Canales de colaboracion",
    description:
      "Espacios para conectar centros educativos, compartir experiencias y coordinar acciones conjuntas.",
    href: "/sobre-nosotros",
    cta: "Conectar",
  },
]

export const metadata: Metadata = {
  title: "Recursos - MAC-IDAFE",
  description:
    "Recursos educativos y materiales de apoyo de MAC-IDAFE para impulsar la educacion ambiental en centros escolares.",
}

function ResourceCard({ title, description, href, cta }: ResourceItem) {
  return (
    <article className="group rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/70">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center rounded-full bg-cta-500 px-4 py-2 text-sm font-semibold text-cta-foreground transition hover:bg-cta-900 hover:text-white focus-visible-ring focus-visible:ring-cta-900"
      >
        {cta}
      </Link>
    </article>
  )
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(47,136,82,0.14),_transparent_55%),linear-gradient(180deg,_#f6fff8_0%,_#ffffff_35%)]">
      <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-32 md:pt-36">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">MAC-IDAFE</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-5xl">
          Recursos para educacion ambiental en la Macaronesia
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          Esta pagina reune materiales utiles para docentes, alumnado y centros educativos que participan en la red
          MAC-IDAFE_2CAP.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Recursos didacticos</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {didacticResources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">Material de apoyo</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {supportResources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </section>
    </div>
  )
}

