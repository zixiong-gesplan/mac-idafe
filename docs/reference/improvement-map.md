# Mapa de mejoras de codigo

Contexto: Next.js app con capas domain/application/infrastructure/ui y datos JSON cargados en memoria.

## Frontend (app/)
- app/noticias/page.tsx: estados usan any[]; tipar con News[] y mover carga de datos a un hook. Agregar estados loading/error y usar Boundary tambien para esos casos. Textos muestran mojibake en placeholder y mensajes; normalizar a UTF-8 o mover a i18n. Evitar recalculos en filtros (memo o derive en useMemo).
- app/noticias/components/Boundary.tsx: boundary solo controla condicion; se puede extender con prop de loading/variant y tests de render (estado vacio, resultado, loading).
- app/sobre-nosotros/page.tsx: revisar jerarquia de headings y meta (titulo/description), dividir secciones en componentes reutilizables y asegurar foco/rol en cards. Mantener coherencia de estilos con tokens.
- UI global: mover copys a archivo central, revisar contraste y estados de foco, anadir skeletons para peticiones asincronas.

## Aplicacion
- app/src/application/use-cases/GetNews.ts: sin manejo de errores ni paginacion; devolver Result o lanzar DomainError cuando el repo falle. Extender NewsFilters con page/limit/sort y mapear en repos. Exponer tipos de retorno inmutables (read-only arrays o DTOs).
- app/src/application/ports: Post/News filters sin paginacion ni criterios de orden; documentar errores esperados (not found, invalid filter) y agregar contratos de excepciones o Result.
- Adaptadores: existe PostAdapter pero falta un NewsAdapter para alinear DTOs entre capas y evitar uso de any en UI.

## Dominio
- app/src/domain/entities/News.ts y Post.ts: validaciones basicas y errores genericos; crear tipos DomainError/ValidationError y centralizar mensajes. Agregar invariantes: tags en lower-case, slug normalizado, publishedAt no futuro, featured/breaking coherente con fechas. Permitir factory segura para hidratar desde JSON.
- Mensajes con mojibake en validaciones ("titulo", "categoria") deben corregirse y pasar por i18n.
- Value objects: Slug existe; evaluar value objects para Category, Tag y Email para evitar strings libres.

## Infraestructura
- app/src/infrastructure/repositories/NewsRepositoryJSON.ts: findRecent usa sort sobre this.news y muta orden global; clonar antes de ordenar. Validar shape del JSON antes de crear dominio y loguear errores de parseo. Considerar cache o fuente HTTP real con fallback local.
- app/src/infrastructure/repositories/PostRepositoryJSON.ts: idem, validar datos y no mutar coleccion al ordenar. Incluir filtros por autor/fecha y paginacion. Normalizar tags a lower-case al cargar.
- Datos: revisar consistencia de campos (colores hex, slugs en lower-case) y mover seeds a carpeta dedicada con tipado.

## Testing y calidad
- No hay pruebas visibles de dominio/repos/use-cases; agregar suites con Vitest para validaciones de News/Post, filtros en repos JSON y casos de uso (GetNews, etc).
- Agregar pruebas de UI (React Testing Library) para estados vacio/resultado/busqueda.
- Ejecutar lint/tsc en CI y agregar chequeo de encoding para evitar mojibake.
