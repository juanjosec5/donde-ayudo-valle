<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { puntosPorMunicipio, municipios } from '@/data'
import { avisoVoluntarios } from '@/data/avisoVoluntarios'
import PuntoCard from '@/components/PuntoCard.vue'

const route = useRoute()
const slug = computed(() => route.params.municipioSlug as string)
const municipio = computed(() => municipios.find((m) => m.slug === slug.value))

const puntos = computed(() => puntosPorMunicipio(slug.value))

const busqueda = ref('')
watch(slug, () => {
  busqueda.value = ''
})

const puntosFiltrados = computed(() => {
  const q = busqueda.value.trim().toLowerCase()
  if (!q) return puntos.value
  return puntos.value.filter(
    (p) => p.nombre.toLowerCase().includes(q) || p.direccion.toLowerCase().includes(q),
  )
})
</script>

<template>
  <section>
    <RouterLink to="/" class="volver">← Municipios</RouterLink>
    <h1>{{ municipio?.nombre ?? slug }}</h1>

    <div class="aviso-voluntarios">
      <p class="aviso-titulo">Antes de ir a ayudar</p>
      <ul>
        <li v-for="(linea, i) in avisoVoluntarios" :key="i">{{ linea }}</li>
      </ul>
    </div>

    <label v-if="puntos.length" class="buscador">
      <span class="sr-only">Buscar por nombre o dirección</span>
      <input
        v-model="busqueda"
        type="search"
        placeholder="Buscar por nombre o dirección…"
        aria-label="Buscar por nombre o dirección"
      />
    </label>

    <div v-if="puntosFiltrados.length">
      <PuntoCard v-for="punto in puntosFiltrados" :key="punto.id" :punto="punto" />
    </div>
    <p v-else-if="puntos.length" class="estado-vacio">
      No se encontraron puntos que coincidan con "{{ busqueda }}".
    </p>
    <p v-else class="estado-vacio">
      Aún no hay puntos registrados en este municipio.
      <RouterLink to="/acerca">¿Conoces uno? Ver Cómo aportar</RouterLink>.
    </p>
  </section>
</template>

<style scoped>
.volver {
  display: inline-block;
  color: var(--color-acento);
  text-decoration: none;
  margin-bottom: var(--espacio-sm);
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}

.estado-vacio {
  color: var(--color-texto-tenue);
}

.aviso-voluntarios {
  background: var(--color-acento-suave);
  border-radius: var(--radio);
  padding: var(--espacio-md);
  margin: var(--espacio-md) 0;
}

.aviso-titulo {
  margin: 0 0 var(--espacio-xs);
  font-weight: 700;
  color: var(--color-acento);
}

.aviso-voluntarios ul {
  margin: 0;
  padding-left: 1.1em;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.buscador {
  display: block;
  margin: 0 0 var(--espacio-md);
}

.buscador input {
  width: 100%;
  min-height: 44px;
  padding: 0 var(--espacio-md);
  border-radius: var(--radio);
  border: 1px solid var(--color-borde);
  background: var(--color-superficie);
  color: var(--color-texto);
  font-size: 1rem;
  box-shadow: var(--sombra-sm);
  transition:
    box-shadow 150ms ease,
    border-color 150ms ease;
}

.buscador input:focus {
  outline: none;
  border-color: var(--color-acento);
  box-shadow: 0 0 0 3px var(--color-acento-suave);
}
</style>
