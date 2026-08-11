import type { PuntoAcopio } from '@/types'
import { necesidadesGenericas } from '../necesidadesGenericas'

export const buenaventura: PuntoAcopio[] = [
  {
    id: 'buenaventura-cielo-ice',
    nombre: 'Cielo Ice',
    municipioSlug: 'buenaventura',
    direccion: 'Calle 1 (Calle Primera)',
    barrio: 'Centro',
    horario: 'Sin horario definido',
    contactos: [],
    necesita: necesidadesGenericas,
    actualizado: '2026-08-11T22:29:15.847Z',
    verificadoPor: undefined,
    activo: true,
  },
  {
    id: 'buenaventura-oficina-atencion-al-ciudadano',
    nombre: 'Oficina de Atención al Ciudadano',
    municipioSlug: 'buenaventura',
    direccion: 'Edificio CAD, Calle 2 Cra. 3 (diagonal a la Alcaldía Distrital)',
    barrio: 'Centro',
    horario: 'Sin horario definido',
    contactos: [],
    necesita: necesidadesGenericas,
    actualizado: '2026-08-11T22:29:15.847Z',
    verificadoPor: undefined,
    activo: true,
  },
  {
    id: 'buenaventura-centro-temporal-calle-27',
    nombre: 'Centro Temporal de Acopio',
    municipioSlug: 'buenaventura',
    direccion: 'Calle 27 #31-37',
    horario: 'Sin horario definido',
    contactos: [],
    necesita: necesidadesGenericas,
    actualizado: '2026-08-11T22:29:15.847Z',
    verificadoPor: undefined,
    activo: true,
  },
]
