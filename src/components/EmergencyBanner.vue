<script setup lang="ts"></script>

<template>
  <div class="emergency-banner" role="alert">
    <p class="lineas-numeros">
      <strong>Emergencias: 123</strong> · Bomberos: 119 · Cruz Roja: 132 · Defensa Civil: 144 ·
      Movilidad: 127
    </p>
    <p class="linea-emergencia">
      ¿Persona desaparecida? Cruz Roja Colombiana – Restablecimiento del Contacto Familiar:
      <a href="https://wa.me/573212139525" target="_blank" rel="noopener">WhatsApp</a>
      ·
      <a href="mailto:rcf@cruzrojacolombiana.org">rcf@cruzrojacolombiana.org</a>
      ·
      <a href="https://www.cruzrojacolombiana.org" target="_blank" rel="noopener">cruzrojacolombiana.org</a>
    </p>
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
}

.lineas-numeros,
.linea-emergencia {
  margin: 0 0 4px;
}

.linea-emergencia a {
  color: inherit;
  text-decoration: underline;
}

.descargo {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.9;
}
</style>
