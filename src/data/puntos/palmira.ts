import type { PuntoAcopio } from '@/types'
import { necesidadesGenericas } from '../necesidadesGenericas'

export const palmira: PuntoAcopio[] = [
  {
    id: 'palmira-centro-temporal-zamorano',
    nombre: 'Centro Temporal de Acopio',
    municipioSlug: 'palmira',
    direccion: 'Calle 69 #28A-69',
    barrio: 'Zamorano',
    horario: 'Sin horario definido',
    contactos: [],
    necesita: necesidadesGenericas,
    actualizado: '2026-08-11T19:20:42.261Z',
    verificadoPor: undefined,
    activo: true,
  },
  {
    id: 'palmira-flamingo-pink',
    nombre: 'Flamingo Pink',
    municipioSlug: 'palmira',
    direccion: 'Cra 18 #30-48',
    horario: 'Sin horario definido',
    contactos: [],
    necesita: necesidadesGenericas,
    actualizado: '2026-08-11T19:20:42.261Z',
    verificadoPor: undefined,
    activo: true,
  },
]
