# Checklist de mejoras sugeridas

## Quick wins (1-2h)
- Clonar antes de sort en NewsRepositoryJSON.findRecent y en PostRepositoryJSON al ordenar.
- Crear NewsAdapter similar a PostAdapter para DTOs y usarlo en UI.

## Corto plazo (1-2 dias)
- Extender NewsFilters/PostFilters con paginacion y sort; actualizar repos y use-cases para respetarlos.
- Agregar tests de dominio/repos/use-cases con Vitest y fixtures de datos.
- Mover textos de UI a archivo de copys y preparar i18n (es/en).
- Anadir estados loading/error en paginas que consultan datos (app/noticias/page.tsx, app/sobre-nosotros/page.tsx si aplica).

## Medio plazo (1+ semana)
- Sustituir repos JSON por API/DB real con cache y manejo de errores.
- Introducir Result type o DomainError central para propagacion de fallas controladas.
- Anadir instrumentacion basica (logging de errores, tracing simple en use-cases).
- Crear regresion visual para componentes UI (storybook/chromatic) y snapshots de estados vacio/busqueda.
