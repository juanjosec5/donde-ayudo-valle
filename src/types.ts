export type CategoriaItem =
  | 'agua' // Agua y bebidas
  | 'alimentos' // Alimentos no perecederos
  | 'aseo' // Aseo e higiene
  | 'bebes' // Bébés: pañales, fórmula
  | 'salud' // Salud y primeros auxilios
  | 'ropa' // Ropa y abrigo (cobijas)
  | 'limpieza' // Herramientas y limpieza
  | 'otros'

export type Urgencia = 'alta' | 'media' | 'baja'

export interface Necesidad {
  categoria: CategoriaItem
  descripcion: string // ej. "Agua embotellada, garrafas"
  urgencia: Urgencia
}

export interface Contacto {
  tipo: 'tel' | 'whatsapp' | 'instagram'
  valor: string // ej. "3160000000" (tel/whatsapp) o "casaestudiobuga" (instagram, sin @)
}

export interface PuntoAcopio {
  id: string // slug único, ej. "buga-parroquia-san-pedro"
  nombre: string // ej. "Parroquia San Pedro"
  municipioSlug: string // ej. "buga"
  direccion: string
  barrio?: string
  horario: string // ej. "8:00 a.m. – 6:00 p.m."
  contactos: Contacto[]
  mapsUrl?: string // enlace Google Maps "cómo llegar"
  necesita: Necesidad[]
  noNecesita?: string[] // qué NO llevar (reduce donaciones inútiles)
  actualizado: string // ISO date, ej. "2026-08-11"
  verificadoPor?: string // ej. "Voluntariado Buga" — quién confirmó
  activo: boolean
}

export interface Municipio {
  slug: string // "buga"
  nombre: string // "Buga (Guadalajara de Buga)"
}
