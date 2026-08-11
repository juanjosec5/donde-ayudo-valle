# Puntos de Acopio — Valle del Cauca

Directorio comunitario de puntos de acopio de donaciones tras el terremoto del 10 de agosto de
2026 en el Valle del Cauca. Muestra dónde se están recibiendo donaciones y qué se necesita en
cada punto. Solo lectura, sin backend ni base de datos: los datos viven en el repo como módulos
TypeScript y se actualizan por Pull Request.

## Estado de los datos

Solo hay un punto verificado en `src/data/puntos/buga.ts` (Gimnasio Casa Estudio). Otros
municipios/puntos se agregan a medida que se confirman direcciones — no publicar puntos sin
verificar.

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

El "Actualizado hace…" que se muestra en cada tarjeta se calcula automáticamente a partir de
la fecha del último commit que tocó el archivo `src/data/puntos/<municipio>.ts` (no hay que
editar el campo `actualizado` a mano). Para que esto funcione en Vercel, activa **Deep Clone**
en la configuración de Git del proyecto (o define la variable de entorno `VERCEL_DEEP_CLONE=1`):
por defecto Vercel hace un clone superficial (`--depth=10`) que puede no alcanzar el commit
real si el archivo lleva más de 10 commits sin tocarse. Si el historial de git no está
disponible, se usa como respaldo la fecha declarada en el propio punto.

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
