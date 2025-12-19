# Flujo: caso de uso

Objetivo: crear o ajustar un caso de uso en app/src/application/use-cases con puertos claros.

Inputs previos:
- Nombre del caso de uso y puertos implicados (ej: PostRepository, NewsRepository).
- Reglas de negocio esperadas y errores a manejar.

Pasos (IA-friendly):
- [ ] Pide a la IA que describa el caso de uso actual y sus puertos.
- [ ] Solicita mapa de adapters impactados y capas que tocan persistencia o HTTP.
- [ ] Pide lista de errores y mensajes a propagar (timeout, datos invalidos, sin resultados).
- [ ] Pide sugerencias de pruebas unitarias y de contrato de puertos.
- [ ] Redacta nota de cambio para PR: comportamiento nuevo y riesgos.

Comandos:
- `rg "class .*" app/src/application/use-cases`
- `rg "interface .*Repository" app/src/application/ports`
- `npm test -- --watch=false` o comando de pruebas que use el repo

Salida esperada:
- Caso de uso actualizado con manejo de errores alineado.
- Tests de unidad o contrato agregados/ajustados.
- Nota breve lista para PR.
