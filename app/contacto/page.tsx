import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - MAC-IDAFE",
  description:
    "Canal de contacto para centros educativos, docentes e instituciones interesadas en MAC-IDAFE.",
}

const contactChannels = [
  {
    title: "Correo",
    value: "hola@mac-idafe.org",
    detail: "Respuesta habitual en 24-48 horas laborables.",
  },
  {
    title: "Ubicacion",
    value: "Las Palmas, Canarias",
    detail: "Coordinacion de acciones locales y transnacionales.",
  },
  {
    title: "Colaboraciones",
    value: "Red de centros y entidades",
    detail: "Abrimos convocatorias para actividades y materiales compartidos.",
  },
]

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(47,136,82,0.14),_transparent_55%),linear-gradient(180deg,_#f6fff8_0%,_#ffffff_35%)] px-4 pb-16 pt-32 md:pt-36">
      <section className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">MAC-IDAFE</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-5xl">
          Contacto y colaboracion
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          Si formas parte de un centro educativo, institucion o colectivo y quieres participar en la red,
          escribenos. Te ayudamos a conectar actividades, recursos y acciones climaticas locales.
        </p>
      </section>

      <section className="mx-auto mt-10 grid w-full max-w-6xl gap-6 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          {contactChannels.map((channel) => (
            <article
              key={channel.title}
              className="rounded-3xl border border-primary/10 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">{channel.title}</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{channel.value}</p>
              <p className="mt-2 text-sm text-foreground/70">{channel.detail}</p>
            </article>
          ))}
        </div>

        <article className="md:col-span-3 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-foreground">Envianos un mensaje</h2>
          <p className="mt-2 text-sm text-foreground/70">
            Completa este formulario y te contactaremos para coordinar el siguiente paso.
          </p>

          <form className="mt-6 grid gap-4" action="#" method="post">
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Nombre
              <input
                name="name"
                type="text"
                required
                placeholder="Nombre y apellidos"
                className="rounded-xl border border-primary/20 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-foreground">
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="tu@email.com"
                className="rounded-xl border border-primary/20 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-foreground">
              Centro o entidad
              <input
                name="organization"
                type="text"
                placeholder="Nombre del centro o institucion"
                className="rounded-xl border border-primary/20 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-foreground">
              Mensaje
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Cuentanos como quieres colaborar"
                className="resize-y rounded-xl border border-primary/20 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-cta-500 px-6 py-3 text-sm font-semibold text-cta-foreground transition hover:bg-cta-900 hover:text-white focus-visible-ring focus-visible:ring-cta-900"
            >
              Enviar solicitud
            </button>
          </form>
        </article>
      </section>
    </div>
  )
}

