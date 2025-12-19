import { describe, it, expect } from "vitest"
import { Slug } from "@/app/src/domain/value-objects/Slug"


describe("Slug Value Object", () => {
  describe("Creation from string", () => {
    it("should create valid slug", () => {
      // Given & When
      const slug = Slug.create("valid-slug")

      // Then
      expect(slug.value).toBe("valid-slug")
    })

    it("should throw error for invalid characters", () => {
      // When & Then
      expect(() => Slug.create("Invalid_Slug!")).toThrow()
    })

    it("should throw error if too short", () => {
      // When & Then
      expect(() => Slug.create("ab")).toThrow("El slug debe tener al menos 3 caracteres")
    })
  })

  describe("Creation from title", () => {
    it("should convert title to valid slug", () => {
      // Given & When
      const slug = Slug.fromTitle("Climate Change: Understanding the Crisis")

      // Then
      expect(slug.value).toBe("climate-change-understanding-the-crisis")
    })

    it("should remove accents", () => {
      // Given & When
      const slug = Slug.fromTitle("Energía Renovable")

      // Then
      expect(slug.value).toBe("energia-renovable")
    })

    it("should handle special characters", () => {
      // Given & When
      const slug = Slug.fromTitle("Test & Example!")

      // Then
      expect(slug.value).toBe("test-example")
    })

    it("should replace spaces with hyphens", () => {
      // Given & When
      const slug = Slug.fromTitle("Multiple   Spaces   Here")

      // Then
      expect(slug.value).toBe("multiple-spaces-here")
    })
  })
})
