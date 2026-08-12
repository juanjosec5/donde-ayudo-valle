import type { PuntoAcopio } from '@/types'
import { necesidadesGenericas } from '../necesidadesGenericas'

export const medellin: PuntoAcopio[] = [
  {
    id: 'medellin-the-house-project',
    nombre: 'The House Project — Hotel Santa Ana',
    municipioSlug: 'medellin',
    direccion: 'Calle 15 Sur #48-34 (al lado de la estación de metro Aguacatala)',
    horario: 'Sin horario definido',
    contactos: [],
    necesita: necesidadesGenericas,
    actualizado: '2026-08-12T00:43:11.450Z',
    verificadoPor: 'Manuela Estrada',
    activo: true,
  },
  {
    id: 'medellin-moon-aerolinea',
    nombre: 'Punto de Recepción Moon Aerolínea (Aeropuerto Olaya Herrera)',
    municipioSlug: 'medellin',
    direccion: 'Aeropuerto Olaya Herrera, Área de carga de Moon Aerolínea',
    horario: '7:00 a.m. – 5:00 p.m.',
    contactos: [],
    necesita: [
      { categoria: 'alimentos', descripcion: 'Arroz, pasta, lentejas, frijoles y avena', urgencia: 'media' },
      { categoria: 'alimentos', descripcion: 'Atún, sardinas y otros enlatados', urgencia: 'media' },
      { categoria: 'alimentos', descripcion: 'Aceite, azúcar, sal y café', urgencia: 'media' },
      { categoria: 'alimentos', descripcion: 'Galletas, barras de cereal y frutos secos', urgencia: 'media' },
      { categoria: 'agua', descripcion: 'Agua embotellada', urgencia: 'alta' },
      { categoria: 'aseo', descripcion: 'Jabón, papel higiénico, crema dental y cepillos', urgencia: 'media' },
      { categoria: 'aseo', descripcion: 'Champú, desodorante y toallas de baño', urgencia: 'media' },
      { categoria: 'aseo', descripcion: 'Toallas higiénicas y pañales para niños y adultos', urgencia: 'media' },
      {
        categoria: 'salud',
        descripcion:
          'Kit médico: gasas, vendas, alcohol, suero fisiológico, curitas, guantes, tapabocas, analgésicos y demás elementos de primeros auxilios',
        urgencia: 'media',
      },
    ],
    actualizado: '2026-08-12T00:43:11.450Z',
    verificadoPor: undefined,
    activo: true,
  },
]
