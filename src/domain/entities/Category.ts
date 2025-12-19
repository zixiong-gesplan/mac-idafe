export interface CategoryProps {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
  color?: string
}

export class Category {
  private constructor(private props: CategoryProps) {
    this.validate()
  }

  static create(props: CategoryProps): Category {
    return new Category(props)
  }

  private validate(): void {
    if (!this.props.name || this.props.name.length < 2) {
      throw new Error("El nombre de la categoría debe tener al menos 2 caracteres")
    }

    if (!this.props.slug || !/^[a-z0-9-]+$/.test(this.props.slug)) {
      throw new Error("El slug debe contener solo letras minúsculas, números y guiones")
    }
  }

  get id(): string {
    return this.props.id
  }

  get name(): string {
    return this.props.name
  }

  get slug(): string {
    return this.props.slug
  }

  get description(): string {
    return this.props.description
  }

  get icon(): string | undefined {
    return this.props.icon
  }

  get color(): string | undefined {
    return this.props.color
  }

  toJSON() {
    return {
      id: this.props.id,
      name: this.props.name,
      slug: this.props.slug,
      description: this.props.description,
      icon: this.props.icon,
      color: this.props.color,
    }
  }
}
