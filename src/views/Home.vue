<script setup lang="ts">
import { ref, computed } from 'vue'
import { municipiosConPuntos } from '@/data'
import { FORMULARIO_URL } from '@/data/formularioUrl'
import MunicipioList from '@/components/MunicipioList.vue'

const busqueda = ref('')

const municipiosFiltrados = computed(() => {
  const items = municipiosConPuntos().filter((i) => i.total > 0)
  const q = busqueda.value.trim().toLowerCase()
  if (!q) return items
  return items.filter((i) => i.municipio.nombre.toLowerCase().includes(q))
})
</script>

<template>
  <section>
    <div class="hero-accent" aria-hidden="true"></div>
    <h1>Puntos de acopio — Valle del Cauca</h1>
    <p class="intro">
      Directorio comunitario de dónde se están recibiendo donaciones y qué se necesita en cada
      punto.
    </p>

    <p class="descargo-independencia">
      Proyecto <strong>independiente y voluntario, creado por un ciudadano</strong>. No tiene
      relación con ninguna entidad gubernamental, ONG, fundación u organización sin ánimo de
      lucro.
    </p>

    <a :href="FORMULARIO_URL" target="_blank" rel="noopener" class="link-reportar">
      ¿Conoces un punto de acopio? Repórtalo aquí →
    </a>

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
.hero-accent {
  width: 48px;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--color-acento), var(--color-destaque));
  margin-bottom: var(--espacio-sm);
}

.intro {
  color: var(--color-texto-tenue);
  margin-top: 0;
}

.descargo-independencia {
  background: var(--color-acento-suave);
  border-radius: var(--radio);
  padding: var(--espacio-sm) var(--espacio-md);
  font-size: 0.85rem;
}

.link-reportar {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: var(--espacio-sm);
  color: var(--color-acento);
  font-weight: 600;
  text-decoration: none;
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
