import type { PuntoAcopio } from '@/types'

export const yumbo: PuntoAcopio[] = [
  {
    id: 'yumbo-prime-padel',
    nombre: 'Prime Padel',
    municipioSlug: 'yumbo',
    direccion: 'Cra 35 #10-267',
    barrio: 'Acopi',
    horario: '7:00 a.m. – 8:00 p.m.',
    contactos: [{ tipo: 'instagram', valor: 'primepadelx' }],
    necesita: [
      { categoria: 'alimentos', descripcion: 'Alimentos no perecederos', urgencia: 'media' },
      { categoria: 'agua', descripcion: 'Agua potable', urgencia: 'alta' },
      { categoria: 'otros', descripcion: 'Carpas', urgencia: 'media' },
      { categoria: 'ropa', descripcion: 'Cobijas', urgencia: 'media' },
      { categoria: 'ropa', descripcion: 'Mantas', urgencia: 'media' },
      { categoria: 'ropa', descripcion: 'Almohadas', urgencia: 'media' },
      { categoria: 'ropa', descripcion: 'Colchonetas', urgencia: 'media' },
      { categoria: 'ropa', descripcion: 'Ropa en perfecto estado y limpia', urgencia: 'media' },
      { categoria: 'aseo', descripcion: 'Productos de higiene personal', urgencia: 'media' },
      { categoria: 'bebes', descripcion: 'Pañales para niños y adultos', urgencia: 'media' },
      { categoria: 'salud', descripcion: 'Kit de primeros auxilios', urgencia: 'media' },
      { categoria: 'construccion', descripcion: 'Herramientas de construcción', urgencia: 'media' },
    ],
    actualizado: '2026-08-12T16:05:26.943Z',
    verificadoPor: undefined,
    activo: true,
  },
]
