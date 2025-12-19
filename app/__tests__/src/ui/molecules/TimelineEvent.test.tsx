import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { TimelineEvent } from "@ui/components/molecules/TimelineEvent"

describe("TimelineEvent", () => {
  it("renderiza titulo y fecha", () => {
    const html = renderToString(
      <TimelineEvent
        title="Hito"
        description="Descripcion"
        year="2024"
        index={0}
      />,
    )
    expect(html).toContain("Hito")
    expect(html).toContain("2024")
  })
})
