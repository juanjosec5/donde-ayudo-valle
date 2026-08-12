export interface ComunidadApp {
  nombre: string
  descripcion: string
  url: string
}

// Otras iniciativas construidas por la comunidad (no forman parte de este
// sitio). Título/descripción tomados del contenido real de cada página.
export const comunidadApps: ComunidadApp[] = [
  {
    nombre: 'Red de Apoyo Colombia',
    descripcion:
      'Conecta voluntarios con fundaciones verificadas para atender necesidades urgentes, con contacto directo por WhatsApp sin intermediarios.',
    url: 'https://reddeapoyocolombia.com/',
  },
  {
    nombre: 'Puntos Críticos del Terremoto en Cali',
    descripcion: 'Mapa de puntos críticos y zonas afectadas por el terremoto en Cali.',
    url: 'https://terremoto-cali-puntos-criticos.netlify.app/',
  },
  {
    nombre: 'Mapa de Emergencia · Cali',
    descripcion:
      'Mapa colaborativo para reportar ubicaciones con necesidades urgentes, personal requerido y actualizaciones en tiempo real.',
    url: 'https://mapa-emergencia.artefactofilms.workers.dev',
  },
  {
    nombre: 'Cali Ayuda — Coordinación de Emergencias',
    descripcion:
      'Plataforma para publicar y consultar reportes de necesidades humanitarias, recursos disponibles y puntos de acopio.',
    url: 'https://cali-ayuda-kappa.vercel.app/reports',
  },
]
