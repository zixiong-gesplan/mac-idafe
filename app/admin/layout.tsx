"use client"
import { useEffect, useState } from "react"
import type { ReactNode } from "react"

const STORAGE_KEY = "mac-idafe-admin-access"
const ADMIN_CODE = process.env.NEXT_PUBLIC_ADMIN_CODE || ""

function AdminGuard({ children }: { children: ReactNode }) {
  const [authorized, setAuthorized] = useState<boolean>(!ADMIN_CODE)
  const [input, setInput] = useState("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!ADMIN_CODE) return
    const cached = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null
    if (cached && cached === ADMIN_CODE) {
      setAuthorized(true)
    }
  }, [])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!ADMIN_CODE) {
      setAuthorized(true)
      return
    }
    if (input.trim() === ADMIN_CODE) {
      window.localStorage.setItem(STORAGE_KEY, ADMIN_CODE)
      setAuthorized(true)
      setError(null)
    } else {
      setError("Código inválido")
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem(STORAGE_KEY)
    setAuthorized(false)
    setInput("")
  }

  if (authorized) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
          <header className="flex items-center justify-between border-b border-border pb-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Panel de control</p>
              <h1 className="text-2xl font-bold text-foreground">Administración de noticias</h1>
              <p className="text-sm text-muted-foreground">Crear, editar y eliminar noticias en vivo.</p>
            </div>
            {ADMIN_CODE && (
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-muted/60 transition"
              >
                Salir
              </button>
            )}
          </header>
          {children}
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/40">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm"
      >
        <div>
          <p className="text-sm font-semibold text-foreground">Acceso restringido</p>
          <p className="text-sm text-muted-foreground">Introduce el código de acceso para continuar.</p>
        </div>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Código de acceso"
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-4 py-2 text-primary-foreground font-semibold hover:bg-primary/90 transition"
        >
          Entrar
        </button>
      </form>
    </main>
  )
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminGuard>{children}</AdminGuard>
}
