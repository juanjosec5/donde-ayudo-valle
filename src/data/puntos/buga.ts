import type { PuntoAcopio } from '@/types'

const PREFIJO = 'EJEMPLO – reemplazar con dato verificado'

export const buga: PuntoAcopio[] = [
  {
    id: 'buga-parroquia-san-pedro',
    nombre: `${PREFIJO} – Parroquia San Pedro`,
    municipioSlug: 'buga',
    direccion: `${PREFIJO} – Cra 14 # 5-32`,
    barrio: 'Centro',
    horario: '8:00 a.m. – 6:00 p.m.',
    contactos: [{ tipo: 'whatsapp', valor: '3000000000' }],
    necesita: [
      { categoria: 'agua', descripcion: 'Agua embotellada, garrafas', urgencia: 'alta' },
      {
        categoria: 'aseo',
        descripcion: 'Jabón, papel higiénico, toallas húmedas',
        urgencia: 'media',
      },
      { categoria: 'salud', descripcion: 'Botiquín, analgésicos, suero oral', urgencia: 'alta' },
    ],
    noNecesita: ['Ropa usada sin lavar'],
    actualizado: '2026-08-11',
    verificadoPor: undefined,
    activo: true,
  },
  {
    id: 'buga-coliseo-municipal',
    nombre: `${PREFIJO} – Coliseo Municipal`,
    municipioSlug: 'buga',
    direccion: `${PREFIJO} – Calle 8 # 20-15`,
    barrio: 'La Merced',
    horario: '7:00 a.m. – 7:00 p.m.',
    contactos: [
      { tipo: 'tel', valor: '3100000000' },
      { tipo: 'whatsapp', valor: '3100000000' },
    ],
    necesita: [
      { categoria: 'bebes', descripcion: 'Pañales talla RN y 1, fórmula infantil', urgencia: 'alta' },
      { categoria: 'alimentos', descripcion: 'Enlatados, arroz, panela', urgencia: 'media' },
      { categoria: 'ropa', descripcion: 'Cobijas y ropa de abrigo', urgencia: 'baja' },
    ],
    actualizado: '2026-08-11',
    verificadoPor: undefined,
    activo: true,
  },
]
