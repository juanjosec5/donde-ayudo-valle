<script setup lang="ts">
import type { Municipio } from '@/types'

defineProps<{
  items: { municipio: Municipio; total: number }[]
}>()
</script>

<template>
  <ul class="municipio-list">
    <li v-for="item in items" :key="item.municipio.slug">
      <RouterLink :to="`/${item.municipio.slug}`" class="municipio-item">
        <span class="nombre">{{ item.municipio.nombre }}</span>
        <span class="contador" :class="{ vacio: item.total === 0 }">
          {{ item.total === 0 ? 'Sin puntos aún' : `${item.total} punto${item.total === 1 ? '' : 's'}` }}
        </span>
      </RouterLink>
    </li>
  </ul>
  <p v-if="items.length === 0" class="estado-vacio">No se encontraron municipios.</p>
</template>

<style scoped>
.municipio-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--espacio-sm);
}

.municipio-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--espacio-sm);
  padding: var(--espacio-md);
  min-height: 44px;
  background: var(--color-superficie);
  border: 1px solid var(--color-borde);
  border-radius: var(--radio);
  color: var(--color-texto);
  text-decoration: none;
}

.municipio-item:active {
  background: var(--color-superficie-activa);
}

.nombre {
  font-weight: 600;
}

.contador {
  font-size: 0.85rem;
  color: var(--color-acento);
  white-space: nowrap;
}

.contador.vacio {
  color: var(--color-texto-tenue);
}

.estado-vacio {
  color: var(--color-texto-tenue);
}
</style>
