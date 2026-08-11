import type { PuntoAcopio } from '@/types'

export const buga: PuntoAcopio[] = [
  {
    id: 'buga-gimnasio-casa-estudio',
    nombre: 'Gimnasio Casa Estudio',
    municipioSlug: 'buga',
    direccion: 'Calle 14 #16-29',
    horario: '6:00 a.m. – 4:00 p.m.',
    contactos: [{ tipo: 'instagram', valor: 'casaestudiobuga' }],
    necesita: [
      {
        categoria: 'otros',
        descripcion: 'Donaciones en general — categorías específicas por confirmar',
        urgencia: 'media',
      },
    ],
    actualizado: '2026-08-11',
    verificadoPor: undefined,
    activo: true,
  },
]
