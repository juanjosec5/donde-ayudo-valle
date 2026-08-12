import type { PuntoAcopio } from '@/types'

export const chia: PuntoAcopio[] = [
  {
    id: 'chia-ght-fundacion-nicolas-jordan',
    nombre: 'GHT + Fundación Nicolás Jordan',
    municipioSlug: 'chia',
    direccion: 'Centro Chía, Local 12 (Redeochico S.A.S)',
    horario: 'Sin horario definido',
    contactos: [],
    necesita: [
      {
        categoria: 'alimentos',
        descripcion: 'Alimentos no perecederos: arroz, pasta, legumbres, atún, enlatados, aceite, entre otros',
        urgencia: 'media',
      },
      {
        categoria: 'aseo',
        descripcion:
          'Artículos de higiene personal: jabón, shampoo, crema dental, desodorante, papel higiénico, toallas higiénicas, entre otros',
        urgencia: 'media',
      },
      {
        categoria: 'salud',
        descripcion:
          'Suministros de primeros auxilios: gasas, vendas, curas, alcohol, suero fisiológico, guantes, entre otros',
        urgencia: 'media',
      },
    ],
    actualizado: '2026-08-12T14:43:57.874Z',
    verificadoPor: undefined,
    activo: true,
  },
]
