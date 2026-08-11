<script setup lang="ts">
import type { CategoriaItem } from '@/types'

const props = defineProps<{ modelValue: CategoriaItem | null }>()
const emit = defineEmits<{ 'update:modelValue': [value: CategoriaItem | null] }>()

const categorias: { valor: CategoriaItem; etiqueta: string }[] = [
  { valor: 'agua', etiqueta: 'Agua' },
  { valor: 'alimentos', etiqueta: 'Alimentos' },
  { valor: 'aseo', etiqueta: 'Aseo' },
  { valor: 'bebes', etiqueta: 'Bebés' },
  { valor: 'salud', etiqueta: 'Salud' },
  { valor: 'ropa', etiqueta: 'Ropa' },
  { valor: 'limpieza', etiqueta: 'Limpieza' },
  { valor: 'otros', etiqueta: 'Otros' },
]

function toggle(valor: CategoriaItem) {
  emit('update:modelValue', props.modelValue === valor ? null : valor)
}
</script>

<template>
  <div class="categoria-filtro" role="group" aria-label="Filtrar por categoría">
    <button
      v-for="cat in categorias"
      :key="cat.valor"
      type="button"
      class="chip"
      :class="{ activo: modelValue === cat.valor }"
      @click="toggle(cat.valor)"
    >
      {{ cat.etiqueta }}
    </button>
  </div>
</template>

<style scoped>
.categoria-filtro {
  display: flex;
  flex-wrap: wrap;
  gap: var(--espacio-xs);
  margin: var(--espacio-sm) 0 var(--espacio-md);
}

.chip {
  min-height: 36px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid var(--color-borde);
  background: var(--color-superficie);
  color: var(--color-texto);
  font-size: 0.9rem;
}

.chip.activo {
  background: var(--color-acento);
  border-color: var(--color-acento);
  color: var(--color-acento-texto);
}
</style>
