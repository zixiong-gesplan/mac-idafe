import React, { ComponentType, Key } from "react"

type RenderProps<T> = {
  item: T
  index: number
}

type ListProps<T> = {
  data: T[]
  Render: ComponentType<RenderProps<T>>
  getKey?: (item: T, index: number) => Key
  as?: "div" | "section" | "ul" | "ol"
}

export function List<T>({ data, Render, getKey, as: Component = "div" }: ListProps<T>) {
  if (data.length === 0) {
    return null
  }

  return (
    <Component role="list">
      {data.map((item, index) => (
        <Render key={getKey ? getKey(item, index) : index} item={item} index={index} />
      ))}
    </Component>
  )
}
