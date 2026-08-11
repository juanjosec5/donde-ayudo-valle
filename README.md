# Puntos de Acopio — Valle del Cauca

Directorio comunitario de puntos de acopio de donaciones tras el terremoto del 10 de agosto de
2026 en el Valle del Cauca. Muestra dónde se están recibiendo donaciones y qué se necesita en
cada punto. Solo lectura, sin backend ni base de datos: los datos viven en el repo como módulos
TypeScript y se actualizan por Pull Request.

## Pendiente antes de publicar

- **Enlace de Cruz Roja Colombiana (RFL)**: el banner de emergencia y la página `/acerca`
  tienen un enlace placeholder (`#TODO-cruzroja-rfl`). Reemplázalo por el enlace oficial de
  Restablecimiento del Contacto Familiar antes de publicar el sitio.
- **Datos de Buga**: `src/data/puntos/buga.ts` contiene puntos de **EJEMPLO** (nombre y
  dirección prefijados). Reemplázalos por información verificada antes de publicar.

## Desarrollo local

Requiere Node 18+.

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

```bash
npm run build    # type-check (vue-tsc) + build de producción en dist/
npm run preview  # sirve el build de producción localmente
```

## Cómo agregar o actualizar un punto de acopio

1. Edita o crea `src/data/puntos/<municipio>.ts` (mira `buga.ts` como referencia) siguiendo el
   tipo `PuntoAcopio` en `src/types.ts`.
2. Si es un municipio nuevo, agrégalo a `src/data/municipios.ts` y súmalo en
   `src/data/index.ts`.
3. Abre un Pull Request con el cambio. No se toca ningún componente para agregar datos.

## Deploy en Vercel

El proyecto usa el preset de Vite por defecto, sin configuración adicional.

1. Sube el repo a GitHub (u otro proveedor soportado por Vercel).
2. En Vercel: **New Project** → importa el repo.
3. Framework Preset: **Vite** (detectado automáticamente).
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

También puedes desplegar desde la CLI:

```bash
npm i -g vercel
vercel
```
