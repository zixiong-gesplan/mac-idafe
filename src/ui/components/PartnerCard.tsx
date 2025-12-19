interface PartnerCardProps {
  name: string
  description: string
  logo: string
  website: string
  category: string
}

export function PartnerCard({ name, description, logo, website, category }: PartnerCardProps) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-4 p-6 rounded-lg border border-border bg-card card-hover focus-ring transition-all"
    >
      <div className="w-full aspect-square max-w-32 flex items-center justify-center bg-muted/50 rounded-lg overflow-hidden">
        <img src={logo || "/placeholder.svg"} alt={`Logo de ${name}`} className="w-full h-full object-contain p-4" />
      </div>

      <div className="flex-1 text-center w-full">
        <div className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-2">
          {category}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="flex items-center gap-2 text-sm text-primary font-medium">
        Visitar sitio web
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  )
}
