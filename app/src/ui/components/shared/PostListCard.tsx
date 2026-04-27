import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { BaseA11yProps } from "./types"

export interface PostListCardProps extends BaseA11yProps {
  slug: string
  title: string
  date?: string
  description?: string
  img?: string
  className?: string
}

export function PostListCard({
  id,
  ariaLabel,
  slug,
  title,
  date,
  description,
  img,
  className,
}: PostListCardProps) {
  return (
    <Link
      id={id}
      aria-label={ariaLabel ?? `Ir a la noticia ${title}`}
      href={`/posts/${slug}`}
      className={cn(
        "group flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:flex-row",
        className,
      )}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-xl md:h-40 md:w-64">
        {img ? (
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-sm text-muted-foreground">
            Sin imagen
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <div className="text-sm text-muted-foreground">
          {date ? new Date(date).toLocaleDateString("es-ES") : "Sin fecha"}
        </div>
        <h2 className="mt-2 text-xl font-semibold text-foreground">{title}</h2>
        {description ? <p className="mt-2 text-muted-foreground">{description}</p> : null}
        <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors group-hover:bg-primary/90">
          Leer noticia →
        </span>
      </div>
    </Link>
  )
}
