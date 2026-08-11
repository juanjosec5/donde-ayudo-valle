import { gitLastModified } from 'virtual:git-last-modified'
import type { Municipio, PuntoAcopio } from '@/types'
import { municipios } from './municipios'
import { buga } from './puntos/buga'

// "actualizado" refleja la fecha del último commit que tocó el archivo del
// municipio; si no hay historial de git disponible (build sin clone completo),
// se usa la fecha declarada manualmente en el punto como respaldo.
export const puntos: PuntoAcopio[] = [...buga].map((p) => ({
  ...p,
  actualizado: gitLastModified[p.municipioSlug] ?? p.actualizado,
}))

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
