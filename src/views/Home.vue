<script setup lang="ts">
import { ref, computed } from 'vue'
import { municipiosConPuntos } from '@/data'
import MunicipioList from '@/components/MunicipioList.vue'

const busqueda = ref('')

const municipiosFiltrados = computed(() => {
  const items = municipiosConPuntos()
  const q = busqueda.value.trim().toLowerCase()
  if (!q) return items
  return items.filter((i) => i.municipio.nombre.toLowerCase().includes(q))
})
</script>

<template>
  <section>
    <h1>Puntos de acopio — Valle del Cauca</h1>
    <p class="intro">
      Directorio comunitario de dónde se están recibiendo donaciones y qué se necesita en cada
      punto.
    </p>

    <label class="buscador">
      <span class="sr-only">Buscar municipio</span>
      <input
        v-model="busqueda"
        type="search"
        placeholder="Buscar municipio…"
        aria-label="Buscar municipio"
      />
    </label>

    <MunicipioList :items="municipiosFiltrados" />
  </section>
</template>

<style scoped>
.intro {
  color: var(--color-texto-tenue);
  margin-top: 0;
}

.buscador {
  display: block;
  margin: var(--espacio-md) 0;
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
}
</style>
