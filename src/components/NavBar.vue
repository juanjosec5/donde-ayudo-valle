<script setup lang="ts">
import { ref } from 'vue'

const menuAbierto = ref(false)
</script>

<template>
  <nav class="nav">
    <div class="nav-inner">
      <RouterLink to="/" class="nav-brand" @click="menuAbierto = false">
        Donde Ayudo · Valle
      </RouterLink>

      <button
        type="button"
        class="nav-toggle"
        :aria-expanded="menuAbierto"
        aria-controls="nav-menu"
        aria-label="Menú"
        @click="menuAbierto = !menuAbierto"
      >
        <span aria-hidden="true">{{ menuAbierto ? '✕' : '☰' }}</span>
      </button>

      <div id="nav-menu" class="nav-menu-wrapper" :class="{ abierto: menuAbierto }">
        <div class="nav-links">
          <RouterLink to="/comunidad" class="nav-link" @click="menuAbierto = false">
            Comunidad
          </RouterLink>
          <RouterLink to="/acerca" class="nav-link" @click="menuAbierto = false">
            Acerca / Aportar
          </RouterLink>
        </div>
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
  position: relative;
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

.nav-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin: 0 calc(var(--espacio-sm) * -1);
  background: none;
  border: none;
  color: var(--color-texto);
  font-size: 1.3rem;
}

.nav-menu-wrapper {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: grid;
  grid-template-rows: 0fr;
  background: var(--color-superficie);
  border-bottom: 1px solid var(--color-borde);
  box-shadow: var(--sombra-md);
  transition: grid-template-rows 200ms ease;
}

.nav-menu-wrapper.abierto {
  grid-template-rows: 1fr;
}

@media (prefers-reduced-motion: reduce) {
  .nav-menu-wrapper {
    transition: none;
  }
}

.nav-links {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 var(--espacio-md);
}

.nav-link {
  min-height: 44px;
  padding: 0;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--color-borde);
  color: var(--color-acento);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.nav-link:first-child {
  border-top: none;
}

@media (min-width: 640px) {
  .nav-toggle {
    display: none;
  }

  .nav-menu-wrapper {
    display: contents;
  }

  .nav-links {
    overflow: visible;
    flex-direction: row;
    align-items: center;
    gap: var(--espacio-lg);
    padding: 0;
  }

  .nav-link {
    min-height: auto;
    border-top: none;
  }
}
</style>
