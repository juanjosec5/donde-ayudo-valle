<script setup lang="ts"></script>

<template>
  <footer class="site-footer">
    <p class="titulo">Otras líneas de emergencia</p>
    <ul class="lineas-numeros">
      <li>Bomberos: 119</li>
      <li>Cruz Roja: 132</li>
      <li>Defensa Civil: 144</li>
      <li>Movilidad: 127</li>
    </ul>
    <p class="rfl">
      ¿Persona desaparecida? Cruz Roja Colombiana – Restablecimiento del Contacto Familiar:
      <a href="mailto:rcf@cruzrojacolombiana.org">rcf@cruzrojacolombiana.org</a>
      ·
      <a href="https://www.cruzrojacolombiana.org" target="_blank" rel="noopener">cruzrojacolombiana.org</a>
    </p>
  </footer>
</template>

<style scoped>
.site-footer {
  max-width: var(--ancho-max);
  margin: var(--espacio-lg) auto 0;
  padding: var(--espacio-md);
  border-top: 1px solid var(--color-borde);
  text-align: center;
  color: var(--color-texto-tenue);
  font-size: 0.85rem;
}

.titulo {
  font-weight: 600;
  color: var(--color-texto);
  margin: 0 0 var(--espacio-xs);
}

.lineas-numeros {
  list-style: none;
  margin: 0 0 var(--espacio-sm);
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.rfl a {
  color: var(--color-acento);
}
</style>
