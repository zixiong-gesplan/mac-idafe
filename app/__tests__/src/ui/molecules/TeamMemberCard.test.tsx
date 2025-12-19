import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { TeamMemberCard } from "@ui/components/molecules/TeamMemberCard"

const member = {
  name: "Equipo",
  role: "Rol",
  bio: "Bio",
  image: "/foto.png",
  social: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
}

describe("TeamMemberCard", () => {
  it("muestra nombre y rol", () => {
    const html = renderToString(<TeamMemberCard member={member} index={0} />)
    expect(html).toContain("Equipo")
    expect(html).toContain("Rol")
  })
})
