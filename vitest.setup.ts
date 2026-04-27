import React from "react"
import { afterEach, vi } from "vitest"
import { cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"

afterEach(() => {
  cleanup()
})

vi.mock("next/link", () => {
  return {
    default: ({
      href,
      children,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) =>
      React.createElement("a", { href, ...props }, children),
  }
})

vi.mock("next/image", () => {
  return {
    default: ({
      src,
      alt,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }) =>
      React.createElement("img", { src, alt, ...props }),
  }
})
