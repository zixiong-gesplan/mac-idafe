"use client"
import { useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"

const STORAGE_KEY = "mac-idafe-admin-auth"
const FALLBACK_USER = "admin"
const FALLBACK_PASSWORD = "admin123"
const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER || FALLBACK_USER
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || FALLBACK_PASSWORD

function AdminGuard({ children }: { children: ReactNode }) {
  const [authorized, setAuthorized] = useState(false)
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  const authToken = useMemo(() => btoa(`${ADMIN_USER}:${ADMIN_PASSWORD}`), [])

  useEffect(() => {
    const cached = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null
    if (cached && cached === authToken) {
      setAuthorized(true)
    }
  }, [authToken])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (user === ADMIN_USER && password === ADMIN_PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, authToken)
      setAuthorized(true)
      setError(null)
      return
    }
    setError("Usuario o contraseña incorrectos")
  }

  const handleLogout = () => {
    window.localStorage.removeItem(STORAGE_KEY)
    setAuthorized(false)
    setUser("")
    setPassword("")
  }

  if (authorized) {
    return (
      <div className="min-h-screen from-background to-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
          <header className="flex items-center justify-between border-b border-border pb-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">Panel de control</p>
              <h1 className="text-2xl font-bold text-foreground">Administración de noticias</h1>
              <p className="text-sm text-muted-foreground">Crear, editar y eliminar noticias en vivo.</p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:bg-muted/60 transition"
            >
              Salir
            </button>
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
          <p className="text-sm text-muted-foreground">Introduce usuario y contraseña para continuar.</p>
        </div>
        <div className="grid gap-3">
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Usuario"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
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
