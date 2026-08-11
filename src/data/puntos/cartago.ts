import type { PuntoAcopio } from '@/types'
import { necesidadesGenericas } from '../necesidadesGenericas'

export const cartago: PuntoAcopio[] = [
  {
    id: 'cartago-clinimascotas',
    nombre: 'Clinimascotas',
    municipioSlug: 'cartago',
    direccion: 'Calle 17 #3N-25, CC Santiago Plaza, Local 44',
    barrio: 'La Independencia',
    horario: 'Sin horario definido',
    contactos: [{ tipo: 'tel', valor: '3105421329' }],
    necesita: necesidadesGenericas,
    actualizado: '2026-08-11T19:20:42.261Z',
    verificadoPor: undefined,
    activo: true,
  },
]
