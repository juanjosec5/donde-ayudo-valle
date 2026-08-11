import type { Municipio } from '@/types'

export const municipios: Municipio[] = [
  { slug: 'buga', nombre: 'Buga (Guadalajara de Buga)' },
  {
    slug: 'cali',
    nombre: 'Cali',
    avisoVoluntarios: [
      'Vestimenta: zapatos cerrados, pantalón largo, manga larga, cachucha, tapabocas y gafas de protección — lleva las tuyas si tienes.',
      'No te lleves herramientas ni insumos a casa: déjalos para otros voluntarios.',
      'No vayas solo a mirar, curiosear o pasear mascotas.',
      'Ve con disposición de ayudar: recoge la basura del suelo y deja el lugar limpio y ordenado.',
    ],
  },
  { slug: 'tulua', nombre: 'Tuluá' },
  { slug: 'palmira', nombre: 'Palmira' },
  { slug: 'buenaventura', nombre: 'Buenaventura' },
  { slug: 'cartago', nombre: 'Cartago' },
  { slug: 'sevilla', nombre: 'Sevilla' },
  { slug: 'roldanillo', nombre: 'Roldanillo' },
  { slug: 'zarzal', nombre: 'Zarzal' },
]
