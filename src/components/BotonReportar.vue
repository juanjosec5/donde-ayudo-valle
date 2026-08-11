<script setup lang="ts">
import { FORMULARIO_URL } from '@/data/formularioUrl'
</script>

<template>
  <a :href="FORMULARIO_URL" target="_blank" rel="noopener" class="boton-reportar">
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
    Reportar punto
  </a>
</template>

<style scoped>
.boton-reportar {
  position: fixed;
  right: var(--espacio-md);
  bottom: calc(var(--espacio-md) + env(safe-area-inset-bottom, 0px));
  z-index: 30;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  background: var(--color-acento);
  color: var(--color-acento-texto);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: var(--sombra-md);
}

.boton-reportar:active {
  box-shadow: var(--sombra-sm);
}

.boton-reportar svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
</style>
