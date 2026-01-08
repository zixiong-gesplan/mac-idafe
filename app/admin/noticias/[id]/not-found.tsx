import Link from "next/link"

export default function NoticiaNotFound() {
  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Editar noticia</p>
          <h2 className="text-xl font-semibold text-foreground">No se encontro la noticia solicitada</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Verifica el identificador o el slug y vuelve a intentarlo.
          </p>
        </div>
        <Link
          href="/admin/noticias"
          className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
        >
          Volver al listado
        </Link>
      </div>
    </section>
  )
}
