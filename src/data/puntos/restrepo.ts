import type { PuntoAcopio } from '@/types'
import { necesidadesGenericas } from '../necesidadesGenericas'

export const restrepo: PuntoAcopio[] = [
  {
    id: 'restrepo-yopigurt',
    nombre: 'YopiGurt',
    municipioSlug: 'restrepo',
    direccion: 'Calle 11 #41',
    horario: 'Sin horario definido',
    contactos: [
      { tipo: 'tel', valor: '3148746310' },
      { tipo: 'tel', valor: '32163612262' },
    ],
    necesita: necesidadesGenericas,
    actualizado: '2026-08-12T16:05:26.943Z',
    verificadoPor: undefined,
    activo: true,
  },
]
