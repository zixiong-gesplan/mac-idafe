# Flujo: discovery del repo

Objetivo: tener vista rapida de rutas, scripts y convenciones para onboarding.

Inputs previos:
- Ninguno.

Pasos (IA-friendly):
- [ ] Pide a la IA un resumen del README y scripts de package.json.
- [ ] Solicita mapa de carpetas clave (app/src/application, app/sobre-nosotros).
- [ ] Pide identificar puertos y adapters principales.
- [ ] Pide lista corta de comandos de trabajo diario (lint, test, dev server).
- [ ] Pide detectar areas sin cobertura o sin docs.

Comandos:
- `rg --files app/src/application`
- `rg --files app/sobre-nosotros`
- `npm run` para ver scripts
- `ls docs` si existe

Salida esperada:
- Resumen de arquitectura y capas.
- Lista de scripts basicos para ejecutar.
- Puntos sin docs ni tests anotados.
