<script setup lang="ts">
import { comunidadApps } from '@/data/comunidadApps'
</script>

<template>
  <section>
    <RouterLink to="/" class="volver">← Inicio</RouterLink>
    <h1>Otras iniciativas de la comunidad</h1>
    <p class="intro">
      Amigos cercanos y otros desarrolladores crearon estas herramientas por su cuenta para
      apoyar la respuesta a la emergencia. Explóralas y compártelas — cada iniciativa suma.
    </p>

    <ul class="lista-apps">
      <li v-for="app in comunidadApps" :key="app.url" class="app-card">
        <h2 class="app-nombre">{{ app.nombre }}</h2>
        <p class="app-descripcion">{{ app.descripcion }}</p>
        <a :href="app.url" target="_blank" rel="noopener" class="app-link">
          Abrir sitio
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.volver {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--color-acento);
  text-decoration: none;
  margin-bottom: var(--espacio-sm);
}

.intro {
  color: var(--color-texto-tenue);
}

.lista-apps {
  list-style: none;
  margin: var(--espacio-md) 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--espacio-md);
}

.app-card {
  background: var(--color-superficie);
  box-shadow: var(--sombra-sm);
  border-radius: var(--radio);
  padding: var(--espacio-md);
}

.app-nombre {
  margin: 0 0 var(--espacio-xs);
  font-size: 1.05rem;
}

.app-descripcion {
  margin: 0 0 var(--espacio-sm);
  color: var(--color-texto-tenue);
}

.app-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  background: var(--color-acento-suave);
  color: var(--color-acento);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.app-link:active {
  background: color-mix(in srgb, var(--color-acento) 15%, var(--color-acento-suave));
}

.app-link svg {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}
</style>
