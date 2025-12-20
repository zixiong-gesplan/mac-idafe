import React from "react"
import { renderToString } from "react-dom/server"
import { describe, expect, it, vi } from "vitest"
import { List } from "@ui/components/utils"

const Item = ({ item }: { item: { label: string }; index: number }) => <span>{item.label}</span>

describe("List", () => {
  it("renderiza cada elemento usando el componente Render", () => {
    const data = [{ label: "uno" }, { label: "dos" }]

    const html = renderToString(<List data={data} Render={Item} />)

    expect(html).toContain('role="list"')
    expect(html).toContain("uno")
    expect(html).toContain("dos")
  })

  it("usa getKey para asignar keys estables", () => {
    const data = [{ label: "a" }, { label: "b" }]
    const getKey = vi.fn((item: { label: string }) => item.label)

    renderToString(<List data={data} Render={Item} getKey={getKey} />)

    expect(getKey).toHaveBeenCalledTimes(2)
    expect(getKey).toHaveBeenCalledWith({ label: "a" }, 0)
    expect(getKey).toHaveBeenCalledWith({ label: "b" }, 1)
  })

  it("no renderiza nada cuando data esta vacio", () => {
    const html = renderToString(<List data={[]} Render={Item} />)

    expect(html).toBe("")
  })
})
