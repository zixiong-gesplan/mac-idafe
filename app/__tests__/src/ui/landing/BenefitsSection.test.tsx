import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { BenefitsSection } from "@ui/components/landing/BenefitsSection"

describe("BenefitsSection", () => {
  it("renders the section heading and benefit cards", () => {
    render(<BenefitsSection />)

    expect(screen.getByText("Why families choose us")).toBeInTheDocument()
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(4)
    expect(screen.getByText("Creative Learning")).toBeInTheDocument()
  })
})
