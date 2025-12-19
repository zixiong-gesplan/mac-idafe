# Flujo: cambio frontend

Objetivo: introducir o ajustar UI sin romper estilos o accesibilidad.

Inputs previos:
- Ruta del componente (ej: app/sobre-nosotros/page.tsx)
- Criterio de aceptacion o diseno esperado

Pasos (IA-friendly):
- [ ] Pide a la IA un resumen del componente y dependencias clave.
- [ ] Solicita puntos fragiles: props no usadas, estilos duplicados, side effects en hooks.
- [ ] Describe la modificacion deseada y pide pasos concretos y riesgos.
- [ ] Solicita checklist rapida de accesibilidad (titulos, labels, foco, contraste).
- [ ] Pide propuestas de pruebas: unitarias o de integracion si aplica.

Comandos:
- `rg --files app/sobre-nosotros`
- `rg -n "class|function" app/sobre-nosotros/page.tsx`
- `npm run lint` (ajusta segun scripts del repo)
- `npm test` o `npm run test:unit` si existe

Salida esperada:
- Cambios aplicados con estilos coherentes y sin warnings de lint.
- Revisado contraste y foco al navegar con teclado.
- Nuevos tests o update de snapshots si aplica.
