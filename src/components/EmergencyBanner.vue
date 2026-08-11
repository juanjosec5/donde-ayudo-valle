<script setup lang="ts"></script>

<template>
  <div class="emergency-banner" role="alert">
    <p class="linea-emergencia"><strong>Emergencias: 123</strong></p>
    <p class="descargo">
      Directorio comunitario, no oficial. La información puede cambiar rápido.
      <strong>Confirma por teléfono antes de desplazarte</strong> y sigue las indicaciones de las
      autoridades.
    </p>
  </div>
</template>

<style scoped>
.emergency-banner {
  background: var(--color-emergencia-fondo);
  color: var(--color-emergencia-texto);
  padding: var(--espacio-sm) var(--espacio-md);
  border-bottom: 3px solid var(--color-emergencia-borde);
  text-align: center;
}

.linea-emergencia {
  margin: 0 0 4px;
}

.descargo {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.9;
}
</style>
