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
    actualizado: '2026-08-12T18:37:44.147Z',
    verificadoPor: undefined,
    activo: true,
  },
  {
    id: 'cartago-centro-comercial-las-palmas',
    nombre: 'Centro Comercial Las Palmas',
    municipioSlug: 'cartago',
    direccion: 'Calle 1 #4-115',
    horario: '7:00 a.m. – 7:00 p.m.',
    contactos: [],
    necesita: [
      { categoria: 'agua', descripcion: 'Agua potable', urgencia: 'alta' },
      { categoria: 'agua', descripcion: 'Bebidas hidratantes', urgencia: 'media' },
      { categoria: 'ropa', descripcion: 'Colchonetas', urgencia: 'media' },
      { categoria: 'ropa', descripcion: 'Cobijas', urgencia: 'media' },
      { categoria: 'ropa', descripcion: 'Ropa para adultos y niños', urgencia: 'media' },
      { categoria: 'salud', descripcion: 'Alcohol antiséptico', urgencia: 'media' },
      { categoria: 'salud', descripcion: 'Vendas', urgencia: 'media' },
      { categoria: 'salud', descripcion: 'Gasas', urgencia: 'media' },
      { categoria: 'salud', descripcion: 'Tapabocas', urgencia: 'media' },
      { categoria: 'aseo', descripcion: 'Elementos de aseo', urgencia: 'media' },
    ],
    actualizado: '2026-08-12T18:37:44.147Z',
    verificadoPor: undefined,
    activo: true,
  },
]
