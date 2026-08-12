import type { PuntoAcopio } from '@/types'
import { necesidadesGenericas } from '../necesidadesGenericas'

export const roldanillo: PuntoAcopio[] = [
  {
    id: 'roldanillo-centro-temporal-san-sebastian',
    nombre: 'Centro Temporal de Acopio',
    municipioSlug: 'roldanillo',
    direccion: 'Calle 11B #3-32',
    barrio: 'San Sebastián',
    horario: 'Sin horario definido',
    contactos: [],
    necesita: [...necesidadesGenericas, { categoria: 'otros', descripcion: 'Estufa eléctrica', urgencia: 'media' }],
    actualizado: '2026-08-12T16:06:53.203Z',
    verificadoPor: undefined,
    activo: true,
  },
]
