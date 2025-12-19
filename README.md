# 🌍 EcoBlog - Plataforma de Educación Ambiental

Plataforma de blogging educativa sobre sostenibilidad, cambio climático, biodiversidad y buenas prácticas ecológicas, construida con **arquitectura hexagonal** y las mejores prácticas de desarrollo.

## 🏗️ Arquitectura

Este proyecto implementa **Clean Architecture (Arquitectura Hexagonal)** con separación clara de responsabilidades:

```
src/
├── domain/              # ⭐ Capa de Dominio (Núcleo del negocio)
│   ├── entities/        # Entidades: Post, Author, Category
│   ├── value-objects/   # Value Objects: Slug
│   └── types/           # Tipos de dominio
│
├── application/         # 🎯 Capa de Aplicación (Casos de uso)
│   ├── use-cases/       # GetPosts, GetPostBySlug, SearchPosts
│   └── ports/           # Interfaces (PostRepository)
│
├── infrastructure/      # 🔌 Capa de Infraestructura (Adaptadores)
│   ├── repositories/    # Implementaciones (PostRepositoryJSON)
│   └── data/            # Datos (posts.json)
│
└── ui/                  # 🎨 Capa de Presentación (UI)
    ├── components/      # Componentes React
    └── adapters/        # Adaptadores UI (PostAdapter)
```

### Flujo de Dependencias

```
UI → Application → Domain ← Infrastructure
```

- **Dominio**: Independiente, no conoce capas externas
- **Aplicación**: Define contratos (ports), usa dominio
- **Infraestructura**: Implementa ports, depende de dominio
- **UI**: Usa casos de uso, presenta información

## 🧪 Estrategia de Testing

### ¿Qué testear?

✅ **SÍ testear:**

1. **Reglas de negocio (Dominio)**
   - Validaciones de entidades
   - Lógica de negocio
   - Value Objects

2. **Casos de uso (Aplicación)**
   - Flujo de la lógica
   - Interacción con repositorios
   - Filtrado y ordenamiento

3. **Comportamiento crítico**
   - Publicación de posts
   - Búsqueda y filtros
   - Navegación

❌ **NO testear:**

- Detalles de implementación de UI
- Estilos CSS
- Configuración de frameworks
- Third-party libraries

### Ejecutar Tests

```bash
# Unit tests
npm test

# Watch mode
npm test -- --watch

# Coverage
npm test:coverage

# UI interactiva
npm test:ui
```

### Tipos de Tests

```typescript
// Unit Test (Dominio)
describe('Post Entity', () => {
  it('should validate minimum content length', () => {
    expect(() => Post.create({ content: 'short' }))
      .toThrow('El contenido debe tener al menos 100 caracteres')
  })
})

// Integration Test (Casos de uso)
describe('GetPosts Use Case', () => {
  it('should return only published posts', async () => {
    const posts = await useCase.execute()
    expect(posts.every(p => p.isPublished())).toBe(true)
  })
})
```

## 🎨 Design System Eco-Friendly

### Principios de Diseño

1. **Performance = Sostenibilidad**
   - Fuentes del sistema (sin descargas)
   - Imágenes optimizadas
   - CSS nativo + Tailwind
   - Sin dependencias pesadas

2. **Accesibilidad (WCAG)**
   - Contraste adecuado (4.5:1 mínimo)
   - Navegación por teclado
   - HTML semántico
   - Screen reader friendly

3. **CSS Moderno**
   - CSS Variables para theming
   - `prefers-color-scheme` para modo oscuro
   - Flexbox y Grid para layouts
   - Container queries preparadas

### Paleta de Colores

```css
/* Verde principal (sostenibilidad) */
--color-primary: #16a34a (light) / #22c55e (dark)

/* Neutrales minimalistas */
--color-background: #ffffff / #0a0a0a
--color-foreground: #0a0a0a / #fafafa
```

## 🚀 Stack Técnico

| Tecnología | Justificación |
|------------|---------------|
| **Next.js 16** | Server Components, App Router, SEO nativo |
| **TypeScript** | Type safety, mejor DX |
| **Tailwind CSS** | Utility-first, performance, CSS moderno |
| **Vitest** | Testing rápido, compatible TS |
| **React 19** | Último estándar, mejor performance |

### ¿Por qué este stack?

- **Eco-friendly**: Server Components = menos JavaScript en cliente
- **Performance**: Fuentes del sistema, CSS optimizado
- **Mantenibilidad**: Arquitectura hexagonal, tipado estricto
- **Escalabilidad**: Fácil agregar features sin romper existentes

## 📦 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción
npm run build
npm start

# Testing
npm test
```

## 🔮 Futuras Mejoras

### Funcionalidades
- [ ] Sistema de comentarios
- [ ] Autenticación de usuarios
- [ ] Panel de administración
- [ ] RSS Feed
- [ ] Newsletter
- [ ] Internacionalización (i18n)

### Técnicas
- [ ] Server Actions para formularios
- [ ] Optimistic UI updates
- [ ] Infinite scroll
- [ ] Full-text search con Algolia/MeiliSearch
- [ ] Analytics de sostenibilidad (CO2 por visita)

### Testing
- [ ] E2E tests con Playwright
- [ ] Visual regression tests
- [ ] Performance budgets
- [ ] Accessibility automated tests

## 📚 Recursos de Aprendizaje

- [Clean Architecture - Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)
- [Next.js Documentation](https://nextjs.org/docs)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Nota**: Este proyecto es educativo y demuestra buenas prácticas de arquitectura, testing y sostenibilidad digital.
