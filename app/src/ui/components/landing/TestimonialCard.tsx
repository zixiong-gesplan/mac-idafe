interface TestimonialCardProps {
  quote: string
  name: string
  role?: string
  avatarSrc: string
}

export function TestimonialCard({ quote, name, role, avatarSrc }: TestimonialCardProps) {
  return (
    <article className="testimonial-card flex h-full flex-col gap-4 rounded-3xl border border-primary/10 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm italic text-foreground/80">“{quote}”</p>
      <div className="mt-auto flex items-center gap-3">
        <img src={avatarSrc} alt={`Portrait of ${name}`} className="h-12 w-12 rounded-full object-cover" />
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          {role ? <p className="text-xs text-foreground/60">{role}</p> : null}
        </div>
      </div>
    </article>
  )
}
