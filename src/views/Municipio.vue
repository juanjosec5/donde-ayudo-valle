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
</style>
