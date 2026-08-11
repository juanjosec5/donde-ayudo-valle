<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { puntosPorMunicipio, municipios } from '@/data'
import { avisoVoluntarios } from '@/data/avisoVoluntarios'
import PuntoCard from '@/components/PuntoCard.vue'

const route = useRoute()
const slug = computed(() => route.params.municipioSlug as string)
const municipio = computed(() => municipios.find((m) => m.slug === slug.value))

const puntos = computed(() => puntosPorMunicipio(slug.value))
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

    <div v-if="puntos.length">
      <PuntoCard v-for="punto in puntos" :key="punto.id" :punto="punto" />
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
  background: color-mix(in srgb, var(--color-acento) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-acento) 30%, transparent);
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
</style>
