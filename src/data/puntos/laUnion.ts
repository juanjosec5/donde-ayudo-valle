import type { PuntoAcopio } from '@/types'
import { necesidadesGenericas } from '../necesidadesGenericas'

export const laUnion: PuntoAcopio[] = [
  {
    id: 'la-union-coliseo-angelino-garzon',
    nombre: 'Coliseo Angelino Garzón',
    municipioSlug: 'la-union',
    direccion: 'Calle 12',
    horario: 'Sin horario definido',
    contactos: [],
    necesita: necesidadesGenericas,
    actualizado: '2026-08-11',
    verificadoPor: undefined,
    activo: true,
  },
]
