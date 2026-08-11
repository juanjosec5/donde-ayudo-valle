# Plan — Puntos de Acopio Valle del Cauca (v1)

> **Para Claude Code:** Implementa este proyecto siguiendo el plan. Empieza por la **Fase 1** completa y déjalo listo para desplegar en Vercel. No inventes direcciones reales: los datos semilla van marcados como `EJEMPLO` hasta que se reemplacen por información verificada.

## Contexto

Terremoto Mw 7.4 (10 ago 2026), Valle del Cauca entre los departamentos más afectados. Este sitio es una **guía comunitaria de puntos de acopio**: dónde se están recibiendo donaciones y **qué se necesita** en cada punto. Solo lectura para el público en v1. Sin backend, sin login, sin base de datos: los datos viven en el repo como módulos TypeScript tipados y se actualizan por PR.

**Objetivo de v1:** algo desplegable hoy, en español, mobile-first, que empiece con Buga y escale a cualquier municipio/corregimiento del Valle agregando un archivo de datos.

## Principios de diseño

- **Mobile-first**, carga mínima, funciona con mala señal (3G). Asume un teléfono viejo con una barra.
- **Español** en toda la interfaz. `<html lang="es">`.
- **Lectura sin fricción**: cero autenticación para consultar.
- **Confiable ante todo**: cada punto muestra cuándo se actualizó y quién lo verificó. Datos vencidos se marcan visualmente.
- **Escalable por datos**: agregar un municipio = agregar un archivo en `src/data/puntos/` y registrarlo. Sin tocar componentes.
- **Sin daño**: no publicar datos personales; banner con números oficiales de emergencia y enlace a Cruz Roja (Restablecimiento del Contacto Familiar) para personas desaparecidas.

## Stack

- **Vue 3 + Vite + TypeScript** (SPA estática).
- **vue-router** (rutas por municipio).
- **CSS plano con variables** (tokens en un solo archivo). Sin framework de UI: dependencias mínimas = build rápido y offline-friendly.
- **Deploy: Vercel** (preset Vite, `vite build`, salida `dist/`).
- Node 18+.

*(No usar Tailwind ni librerías de UI en v1. Prioridad: velocidad y peso mínimo.)*

## Modelo de datos

```ts
// src/types.ts

export type CategoriaItem =
  | 'agua'            // Agua y bebidas
  | 'alimentos'       // Alimentos no perecederos
  | 'aseo'            // Aseo e higiene
  | 'bebes'           // Bebés: pañales, fórmula
  | 'salud'           // Salud y primeros auxilios
  | 'ropa'            // Ropa y abrigo (cobijas)
  | 'limpieza'        // Herramientas y limpieza
  | 'otros';

export type Urgencia = 'alta' | 'media' | 'baja';

export interface Necesidad {
  categoria: CategoriaItem;
  descripcion: string;   // ej. "Agua embotellada, garrafas"
  urgencia: Urgencia;
}

export interface Contacto {
  tipo: 'tel' | 'whatsapp';
  valor: string;         // ej. "3160000000"
}

export interface PuntoAcopio {
  id: string;            // slug único, ej. "buga-parroquia-san-pedro"
  nombre: string;        // ej. "Parroquia San Pedro"
  municipioSlug: string; // ej. "buga"
  direccion: string;
  barrio?: string;
  horario: string;       // ej. "8:00 a.m. – 6:00 p.m."
  contactos: Contacto[];
  mapsUrl?: string;      // enlace Google Maps "cómo llegar"
  necesita: Necesidad[];
  noNecesita?: string[]; // qué NO llevar (reduce donaciones inútiles)
  actualizado: string;   // ISO date, ej. "2026-08-11"
  verificadoPor?: string;// ej. "Voluntariado Buga" — quién confirmó
  activo: boolean;
}

export interface Municipio {
  slug: string;          // "buga"
  nombre: string;        // "Buga (Guadalajara de Buga)"
}
```

### Estructura de datos en el repo

```
src/data/
  municipios.ts          // registro de municipios (el "índice" que escala)
  puntos/
    buga.ts              // export const buga: PuntoAcopio[] = [...]
    cali.ts
    tulua.ts
    ...
  index.ts               // agrega todos los puntos en un solo array + helpers
```

`src/data/index.ts` expone:
- `puntos: PuntoAcopio[]` (todos, concatenados)
- `puntosPorMunicipio(slug): PuntoAcopio[]`
- `municipiosConPuntos(): { municipio: Municipio; total: number }[]`

**Semilla obligatoria:**
- `municipios.ts` con al menos: `buga`, `cali`, `tulua`, `palmira`, `buenaventura`, `cartago`, `sevilla`, `roldanillo`. (Demuestra el patrón de escala; los que no tengan puntos se muestran como "Sin puntos aún".)
- `buga.ts` con **2–3 puntos de EJEMPLO**, cada `nombre` y `direccion` prefijados con `"EJEMPLO – reemplazar con dato verificado"`, `verificadoPor: undefined`, `actualizado` con fecha de hoy. Nunca presentar un ejemplo como verificado.

## Rutas y pantallas

- `/` — **Inicio**
  - Banner de emergencia (fijo arriba): "Emergencias: **123**. ¿Persona desaparecida? → Cruz Roja Colombiana (Restablecimiento del Contacto Familiar)." con enlaces.
  - Aviso: "Información comunitaria. Confirma por teléfono antes de desplazarte."
  - Buscador (filtra por nombre de municipio).
  - Lista de municipios con contador de puntos activos. Tap → `/:municipioSlug`.
- `/:municipioSlug` — **Puntos de un municipio**
  - Título del municipio.
  - Filtro por categoría de ítem (chips: Agua, Alimentos, Aseo, Bebés, Salud, Ropa, Limpieza, Otros).
  - Lista de tarjetas `PuntoCard`.
  - Estado vacío: "Aún no hay puntos registrados en este municipio. ¿Conoces uno? Ver *Cómo aportar*."
- `/acerca` — **Acerca / Cómo aportar**
  - Qué es el sitio, descargo de responsabilidad, números oficiales.
  - Cómo agregar/actualizar un punto (editar `src/data/puntos/<municipio>.ts` y abrir PR).

## Componentes

- `EmergencyBanner.vue` — banner fijo con 123 + enlace Cruz Roja RFL.
- `MunicipioList.vue` — lista de municipios con contadores.
- `PuntoCard.vue` — una tarjeta de punto de acopio:
  - Nombre, barrio, dirección, horario.
  - Chips de **qué necesita** ordenados por urgencia (alta primero, con color).
  - "No llevar: …" si aplica.
  - Botones: **Cómo llegar** (mapsUrl), **Llamar/WhatsApp** (`tel:` / `https://wa.me/57…`).
  - Pie: "Actualizado hace X · Verificado por Y". Si `actualizado` > 48h → badge ámbar "Sin actualizar — confirma antes de ir". Si `!activo` → no se renderiza.
- `CategoriaFiltro.vue` — chips de filtro.
- `RelativeTime.ts` (util) — "hace X horas/días" en español.

## Estilo (tokens)

`src/styles/tokens.css` con variables: colores de fondo/texto alto contraste, un color de acento, y colores de urgencia (`--urg-alta`, `--urg-media`, `--urg-baja`). Reglas base: tap targets ≥ 44px, tipografía legible ~16px+, contenedor máx ~640px centrado, todo fluido. Sin animaciones pesadas.

## Fases

### Fase 1 — Hoy (bloqueante, desplegar)
- [ ] Scaffold Vite Vue 3 + TS + vue-router.
- [ ] `types.ts`, `municipios.ts`, `puntos/buga.ts` (ejemplos marcados), `data/index.ts` con helpers.
- [ ] Rutas `/`, `/:municipioSlug`, `/acerca`.
- [ ] Componentes listados arriba.
- [ ] `EmergencyBanner` + descargo de responsabilidad + `lang="es"`.
- [ ] Estilos tokens, mobile-first, contraste.
- [ ] Build limpio (`vite build`), sin warnings de tipos.
- [ ] Instrucciones de deploy a Vercel en el README.

### Fase 2 — Enseguida (no bloqueante)
- [ ] PWA con `vite-plugin-pwa` (instalable + cache offline del último estado consultado).
- [ ] Filtro global por categoría desde el inicio ("mostrar todos los puntos que piden Agua").
- [ ] Formulario de aporte (Google Form o Netlify Forms) con cola de moderación → sigue siendo edición curada, no escritura pública directa.
- [ ] Coordinar con un grupo local/voluntariado para que los datos se mantengan al día (una guía queda obsoleta en horas si nadie la actualiza).

## Contenido fijo del banner / descargo

- Emergencias nacionales: **123**.
- Personas desaparecidas: **Cruz Roja Colombiana – Restablecimiento del Contacto Familiar (RFL)**. (Enlazar; no crear base de datos propia de desaparecidos.)
- Texto: "Este es un directorio comunitario, no oficial. La información puede cambiar rápido. **Confirma por teléfono antes de desplazarte** y sigue las indicaciones de las autoridades."

## Criterios de aceptación v1

1. Carga en móvil en < 2s con 3G simulada; peso JS inicial pequeño.
2. Agregar un municipio nuevo con puntos = crear un archivo en `puntos/` + una línea en `municipios.ts`, sin tocar componentes.
3. Todo el texto de interfaz en español.
4. Ningún dato de ejemplo aparece como verificado.
5. Puntos con `actualizado` > 48h muestran advertencia visible.
6. Banner de emergencia visible en todas las rutas.
7. Despliega en Vercel sin configuración extra más allá del preset Vite.