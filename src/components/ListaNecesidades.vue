<script setup lang="ts">
import { computed } from 'vue'
import type { Necesidad } from '@/types'

const props = defineProps<{ necesidades: Necesidad[] }>()

const ordenUrgencia: Record<string, number> = { alta: 0, media: 1, baja: 2 }

const necesidadesOrdenadas = computed(() =>
  [...props.necesidades].sort((a, b) => ordenUrgencia[a.urgencia] - ordenUrgencia[b.urgencia]),
)
</script>

<template>
  <ul class="necesita">
    <li v-for="(n, i) in necesidadesOrdenadas" :key="i" :class="{ critico: n.urgencia === 'alta' }">
      <span v-if="n.urgencia === 'alta'" class="etiqueta-critico">Urgente</span>
      <span class="descripcion">{{ n.descripcion }}</span>
    </li>
  </ul>
</template>

<style scoped>
.necesita {
  list-style: none;
  margin: var(--espacio-sm) 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.necesita li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: var(--radio);
  background: var(--color-superficie-activa);
  border-left: 4px solid var(--color-borde);
}

.necesita li.critico {
  background: color-mix(in srgb, var(--urg-alta) 10%, transparent);
  border-left-color: var(--urg-alta);
}

.etiqueta-critico {
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: #fff;
  background: var(--urg-alta);
  padding: 2px 8px;
  border-radius: 999px;
}
</style>
