<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { puntosPorMunicipio, municipios } from '@/data'
import PuntoCard from '@/components/PuntoCard.vue'
import CategoriaFiltro from '@/components/CategoriaFiltro.vue'
import type { CategoriaItem } from '@/types'

const route = useRoute()
const slug = computed(() => route.params.municipioSlug as string)
const municipio = computed(() => municipios.find((m) => m.slug === slug.value))

const categoriaActiva = ref<CategoriaItem | null>(null)

const puntos = computed(() => puntosPorMunicipio(slug.value))

const puntosFiltrados = computed(() => {
  if (!categoriaActiva.value) return puntos.value
  return puntos.value.filter((p) => p.necesita.some((n) => n.categoria === categoriaActiva.value))
})
</script>

<template>
  <section>
    <RouterLink to="/" class="volver">← Municipios</RouterLink>
    <h1>{{ municipio?.nombre ?? slug }}</h1>

    <div v-if="municipio?.avisoVoluntarios?.length" class="aviso-voluntarios">
      <p class="aviso-titulo">Antes de ir a ayudar</p>
      <ul>
        <li v-for="(linea, i) in municipio.avisoVoluntarios" :key="i">{{ linea }}</li>
      </ul>
    </div>

    <CategoriaFiltro v-model="categoriaActiva" />

    <div v-if="puntosFiltrados.length">
      <PuntoCard v-for="punto in puntosFiltrados" :key="punto.id" :punto="punto" />
    </div>
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
  background: color-mix(in srgb, var(--urg-media) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--urg-media) 35%, transparent);
  border-radius: var(--radio);
  padding: var(--espacio-md);
  margin: var(--espacio-md) 0;
}

.aviso-titulo {
  margin: 0 0 var(--espacio-xs);
  font-weight: 700;
  color: var(--urg-media);
}

.aviso-voluntarios ul {
  margin: 0;
  padding-left: 1.1em;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
