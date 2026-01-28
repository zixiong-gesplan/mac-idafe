import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { HeroSection } from "@ui/components/landing/HeroSection"

describe("HeroSection", () => {
  it("renders title, subtitle, and CTA", () => {
    render(<HeroSection />)

    expect(screen.getByText("Learning is fun")).toBeInTheDocument()
    expect(screen.getByText("at Sunshine Academy")).toBeInTheDocument()
    expect(screen.getByText("Small groups, big ideas, and playful discovery.")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Schedule a Visit" })).toBeInTheDocument()
  })
})
