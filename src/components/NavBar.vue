<script setup lang="ts"></script>

<template>
  <nav class="nav">
    <div class="nav-inner">
      <RouterLink to="/" class="nav-brand">Donde Ayudo · Valle</RouterLink>
      <div class="nav-links">
        <RouterLink to="/comunidad" class="nav-link">Comunidad</RouterLink>
        <RouterLink to="/acerca" class="nav-link">Acerca / Aportar</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--color-superficie);
  border-bottom: 1px solid var(--color-borde);
}

.nav-inner {
  max-width: var(--ancho-max);
  margin: 0 auto;
  padding: 0 var(--espacio-md);
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--espacio-sm);
}

.nav-brand {
  color: var(--color-texto);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--espacio-lg);
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-link {
  color: var(--color-acento);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}
</style>
