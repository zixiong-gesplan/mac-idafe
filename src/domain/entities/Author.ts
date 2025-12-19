export interface AuthorProps {
  id: string
  name: string
  bio: string
  avatar?: string
  email: string
}

export class Author {
  private constructor(private props: AuthorProps) {
    this.validate()
  }

  static create(props: AuthorProps): Author {
    return new Author(props)
  }

  private validate(): void {
    if (!this.props.name || this.props.name.length < 2) {
      throw new Error("El nombre del autor debe tener al menos 2 caracteres")
    }

    if (!this.isValidEmail(this.props.email)) {
      throw new Error("Email inválido")
    }
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  get id(): string {
    return this.props.id
  }

  get name(): string {
    return this.props.name
  }

  get bio(): string {
    return this.props.bio
  }

  get avatar(): string | undefined {
    return this.props.avatar
  }

  get email(): string {
    return this.props.email
  }

  toJSON() {
    return {
      id: this.props.id,
      name: this.props.name,
      bio: this.props.bio,
      avatar: this.props.avatar,
      email: this.props.email,
    }
  }
}
