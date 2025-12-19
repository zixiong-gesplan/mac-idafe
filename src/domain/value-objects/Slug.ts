export class Slug {
  private readonly _value: string

  private constructor(value: string) {
    this._value = this.normalize(value)
    this.validate()
  }

  static create(value: string): Slug {
    return new Slug(value)
  }

  static fromTitle(title: string): Slug {
    const normalized = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
      .trim()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Remove duplicate hyphens

    return new Slug(normalized)
  }

  private normalize(value: string): string {
    return value.toLowerCase().trim()
  }

  private validate(): void {
    if (!this._value || this._value.length < 3) {
      throw new Error("El slug debe tener al menos 3 caracteres")
    }

    if (!/^[a-z0-9-]+$/.test(this._value)) {
      throw new Error("El slug solo puede contener letras minúsculas, números y guiones")
    }

    if (this._value.startsWith("-") || this._value.endsWith("-")) {
      throw new Error("El slug no puede empezar ni terminar con guión")
    }
  }

  get value(): string {
    return this._value
  }

  equals(other: Slug): boolean {
    return this._value === other._value
  }

  toString(): string {
    return this._value
  }
}
