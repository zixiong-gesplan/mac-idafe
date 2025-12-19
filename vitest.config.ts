import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@application": path.resolve(__dirname, "./app/src/application"),
      "@domain": path.resolve(__dirname, "./app/src/domain"),
      "@infrastructure": path.resolve(__dirname, "./app/src/infrastructure"),
      "@ui": path.resolve(__dirname, "./app/src/ui"),
    },
  },
})
