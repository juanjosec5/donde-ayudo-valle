import type { Municipio, PuntoAcopio } from '@/types'
import { municipios } from './municipios'
import { buga } from './puntos/buga'
import { cali } from './puntos/cali'
import { zarzal } from './puntos/zarzal'
import { cartago } from './puntos/cartago'
import { palmira } from './puntos/palmira'
import { buenaventura } from './puntos/buenaventura'
import { rozo } from './puntos/rozo'
import { laUnion } from './puntos/laUnion'
import { bogota } from './puntos/bogota'

// "actualizado" se estampa con la fecha/hora real por un hook pre-commit
// (scripts/stamp-actualizado.js) cada vez que se modifica un archivo de
// puntos, así que ya viene correcto en los datos — no se deriva en build.
export const puntos: PuntoAcopio[] = [
  ...buga,
  ...cali,
  ...zarzal,
  ...cartago,
  ...palmira,
  ...buenaventura,
  ...rozo,
  ...laUnion,
  ...bogota,
]

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
