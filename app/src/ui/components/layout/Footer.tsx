import Link from "next/link"

interface FooterLink {
  label: string
  href: string
}

const footerLinks: FooterLink[] = [
  { label: "Privacidad", href: "#" },
  { label: "Terminos", href: "#" },
  { label: "Soporte", href: "#" },
  { label: "Redes", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 text-center md:grid-cols-3 md:text-left">
        <nav aria-label="Footer links" className="flex flex-wrap justify-center gap-3 text-sm text-foreground/70 md:justify-start">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-1 transition-colors hover:text-primary focus-visible-ring"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-foreground/70">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Contacto</p>
          <p className="mt-2 text-xs text-foreground/60">hola@mac-idafe.org</p>
          <p className="text-xs text-foreground/60">Las Palmas, Canarias</p>
        </div>
        <p className="text-xs text-foreground/60">
          Construyendo una red sostenible para la educacion ambiental.
        </p>
      </div>
    </footer>
  )
}
