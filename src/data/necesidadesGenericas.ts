import type { Necesidad } from '@/types'

// Lista base de ítems para puntos que reciben de todo. Se tomó como
// referencia lo solicitado en el punto de Cali (Plazoleta Jairo Varela).
export const necesidadesGenericas: Necesidad[] = [
  { categoria: 'agua', descripcion: 'Agua potable', urgencia: 'alta' },
  { categoria: 'agua', descripcion: 'Bebidas hidratantes', urgencia: 'alta' },
  { categoria: 'alimentos', descripcion: 'Comida preparada y alimentos no perecederos', urgencia: 'media' },
  { categoria: 'alimentos', descripcion: 'Dulces', urgencia: 'media' },
  { categoria: 'ropa', descripcion: 'Colchonetas', urgencia: 'media' },
  { categoria: 'ropa', descripcion: 'Sábanas', urgencia: 'media' },
  { categoria: 'ropa', descripcion: 'Cobijas', urgencia: 'media' },
  { categoria: 'ropa', descripcion: 'Ropa para adultos y niños', urgencia: 'media' },
  { categoria: 'salud', descripcion: 'Alcohol antiséptico', urgencia: 'media' },
  { categoria: 'salud', descripcion: 'Vendas', urgencia: 'media' },
  { categoria: 'salud', descripcion: 'Gasas', urgencia: 'media' },
  { categoria: 'salud', descripcion: 'Tapabocas', urgencia: 'media' },
  { categoria: 'construccion', descripcion: 'Picas (herramienta)', urgencia: 'media' },
  { categoria: 'construccion', descripcion: 'Guantes de construcción', urgencia: 'media' },
  { categoria: 'limpieza', descripcion: 'Bolsas grandes y costales', urgencia: 'media' },
  { categoria: 'construccion', descripcion: 'Linternas', urgencia: 'media' },
  { categoria: 'construccion', descripcion: 'Baterías / pilas', urgencia: 'media' },
  { categoria: 'construccion', descripcion: 'Cascos de protección', urgencia: 'media' },
  { categoria: 'construccion', descripcion: 'Gafas de protección', urgencia: 'media' },
]
