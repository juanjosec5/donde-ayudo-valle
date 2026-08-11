import type { Municipio, PuntoAcopio } from '@/types'
import { municipios } from './municipios'
import { buga } from './puntos/buga'

export const puntos: PuntoAcopio[] = [...buga]

export function puntosPorMunicipio(slug: string): PuntoAcopio[] {
  return puntos.filter((p) => p.municipioSlug === slug && p.activo)
}

export function municipiosConPuntos(): { municipio: Municipio; total: number }[] {
  return municipios.map((municipio) => ({
    municipio,
    total: puntos.filter((p) => p.municipioSlug === municipio.slug && p.activo).length,
  }))
}

export { municipios }
