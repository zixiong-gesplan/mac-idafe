import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Footer } from "@ui/components/layout/Footer"

describe("Footer", () => {
  it("renders footer links and legal text", () => {
    render(<Footer />)

    expect(screen.getByRole("link", { name: "Privacidad" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Terminos" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Soporte" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Redes" })).toBeInTheDocument()
    expect(screen.getByText("Construyendo una red sostenible para la educacion ambiental.")).toBeInTheDocument()
  })
})
