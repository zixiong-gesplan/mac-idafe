import { TextReveal } from "@ui/components/TextReveal"
import { GradientText } from "@ui/components/GradientText"
import { MagneticButton } from "@ui/components/MagneticButton"
import { AnimatedCounter } from "@ui/components/AnimatedCounter"
import { ScrollStorySection } from "@ui/components/ScrollStorySection"
import { AnimatedSection } from "@ui/components/AnimatedSection"
import { TeamMemberCard } from "@ui/components/TeamMemberCard"
import { TimelineEvent } from "@ui/components/TimelineEvent"
import { ValueCard } from "@ui/components/ValueCard"
import { ParallaxImage } from "@ui/components/ParallaxImage"

export const metadata = {
  title: "Sobre Nosotros - EcoBlog",
  description:
    "Conoce al equipo detrás de EcoBlog, nuestra misión de educación ambiental y cómo trabajamos por un futuro sostenible.",
}

const teamMembers = [
  {
    name: "María García",
    role: "Fundadora y Directora Editorial",
    bio: "Bióloga marina con 15 años de experiencia en conservación. Apasionada por comunicar la ciencia de forma accesible.",
    image: "/professional-woman-environmental-scientist-portrai.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Carlos Ruiz",
    role: "Editor de Cambio Climático",
    bio: "Periodista ambiental y autor de tres libros sobre sostenibilidad. Especialista en políticas climáticas internacionales.",
    image: "/professional-man-journalist-portrait-outdoors.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Ana Torres",
    role: "Especialista en Biodiversidad",
    bio: "Ecóloga con doctorado en conservación de ecosistemas. Ha trabajado en proyectos en 12 países de Latinoamérica.",
    image: "/professional-woman-ecologist-portrait-nature.jpg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Diego Mendoza",
    role: "Director de Tecnología Sostenible",
    bio: "Ingeniero ambiental especializado en energías renovables y tecnologías limpias para el desarrollo sostenible.",
    image: "/professional-man-engineer-renewable-energy-portrai.jpg",
    social: {
      linkedin: "https://linkedin.com",
    },
  },
]

const timelineEvents = [
  {
    year: "2019",
    title: "El Inicio del Sueño Verde",
    description:
      "EcoBlog nace como un pequeño proyecto personal de María García, con solo 5 artículos sobre conservación marina.",
  },
  {
    year: "2020",
    title: "Crecimiento Orgánico",
    description: "Alcanzamos 10,000 lectores mensuales. Se une Carlos Ruiz como primer colaborador oficial del equipo.",
  },
  {
    year: "2021",
    title: "Expansión del Equipo",
    description: "Formamos un equipo de 4 expertos. Lanzamos nuestra primera serie educativa sobre cambio climático.",
  },
  {
    year: "2022",
    title: "Reconocimiento Internacional",
    description:
      "Premio al Mejor Blog de Educación Ambiental. Colaboraciones con WWF y Greenpeace para contenido exclusivo.",
  },
  {
    year: "2023",
    title: "Impacto Global",
    description:
      "Superamos 1 millón de lectores. Lanzamos programa de educación para escuelas en 5 países hispanohablantes.",
  },
  {
    year: "2024",
    title: "Nueva Era Digital",
    description:
      "Rediseño completo con tecnología eco-friendly. Compromiso carbono neutral y servidor alimentado por renovables.",
  },
]

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
    title: "Transparencia",
    description:
      "Citamos todas nuestras fuentes y mantenemos independencia editorial. La verdad científica guía nuestro trabajo.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
    title: "Educación",
    description: "Creemos que el conocimiento es poder. Simplificamos conceptos complejos sin perder rigor científico.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "Pasión",
    description:
      "Amamos nuestro planeta y esa pasión se refleja en cada artículo. Escribimos desde el corazón y la experiencia.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Comunidad",
    description:
      "Construimos una comunidad global de personas comprometidas con el medio ambiente. Juntos somos más fuertes.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Acción",
    description:
      "No solo informamos, inspiramos a actuar. Cada artículo incluye pasos concretos para generar cambio real.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    title: "Sostenibilidad",
    description:
      "Practicamos lo que predicamos. Nuestro sitio usa servidores verdes y minimizamos nuestra huella digital.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage src="/aerial-view-green-forest-with-river-sustainable-na.jpg" alt="Bosque verde vista aérea" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection animation="fade">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Nuestra Historia
            </span>
          </AnimatedSection>

          <TextReveal
            text="Educando para un Futuro"
            as="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
            revealType="words"
          />

          <div className="mb-8">
            <GradientText text="Más Sostenible" as="span" className="text-4xl md:text-6xl lg:text-7xl font-bold" />
          </div>

          <AnimatedSection animation="fade">
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              Somos un equipo de científicos, periodistas y apasionados del medio ambiente comprometidos con
              democratizar el conocimiento ambiental.
            </p>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <ScrollStorySection className="py-24 bg-card/50" revealDirection="up">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <TextReveal
                text="Nuestra Misión"
                as="h2"
                className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                revealType="words"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En EcoBlog creemos que la educación ambiental es la herramienta más poderosa para transformar nuestra
                  relación con el planeta. Nuestro objetivo es hacer que la ciencia del medio ambiente sea accesible,
                  interesante y, sobre todo,
                  <strong className="text-foreground"> accionable</strong>.
                </p>
                <p>
                  Cada día, millones de personas buscan entender cómo sus acciones impactan el medio ambiente. Nosotros
                  respondemos esas preguntas con información verificada, libre de alarmismo innecesario pero sin
                  minimizar la urgencia de la acción climática.
                </p>
                <p>
                  No vendemos miedo, <strong className="text-foreground">vendemos esperanza informada</strong>. Porque
                  creemos que cuando las personas entienden los problemas, también pueden ser parte de las soluciones.
                </p>
              </div>
            </div>
            <div className="relative">
              <ParallaxImage
                src="/team-planting-trees-environmental-volunteers.jpg"
                alt="Equipo plantando árboles"
                className="rounded-2xl overflow-hidden aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </ScrollStorySection>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter value={1200000} suffix="+" label="Lectores anuales" />
            <AnimatedCounter value={850} suffix="+" label="Artículos publicados" />
            <AnimatedCounter value={25} suffix="" label="Países alcanzados" />
            <AnimatedCounter value={50} suffix="+" label="Escuelas aliadas" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal
              text="Nuestros Valores"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              revealType="words"
            />
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Los principios que guían cada decisión editorial y cada interacción con nuestra comunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal
              text="Nuestra Historia"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              revealType="words"
            />
            <p className="max-w-2xl mx-auto text-muted-foreground">
              De un pequeño blog a una plataforma de educación ambiental con impacto global.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto space-y-12">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                year={event.year}
                title={event.title}
                description={event.description}
                index={index}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal
              text="Conoce al Equipo"
              as="h2"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              revealType="words"
            />
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Expertos apasionados que trabajan cada día para traerte el mejor contenido ambiental.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollStorySection className="py-24 bg-primary/5" revealDirection="up">
        <div className="container mx-auto px-4 text-center">
          <TextReveal
            text="Únete a la Comunidad"
            as="h2"
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            revealType="words"
          />
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Suscríbete a nuestro newsletter y recibe cada semana las mejores noticias, artículos educativos y consejos
            prácticos para vivir de forma más sostenible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton
              as="a"
              href="/noticias"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Explorar Noticias
            </MagneticButton>
            <MagneticButton
              as="a"
              href="mailto:contacto@ecoblog.com"
              className="px-8 py-4 bg-card text-foreground border border-border rounded-full font-medium hover:bg-card/80 transition-colors"
            >
              Contactar
            </MagneticButton>
          </div>
        </div>
      </ScrollStorySection>
    </main>
  )
}
