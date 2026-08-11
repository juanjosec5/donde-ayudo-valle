<script setup lang="ts"></script>

<template>
  <section class="acerca">
    <RouterLink to="/" class="volver">← Inicio</RouterLink>
    <h1>Acerca de este directorio</h1>
    <p>
      Este sitio es una guía comunitaria de puntos de acopio de donaciones tras el terremoto del
      10 de agosto de 2026 en el Valle del Cauca. No es un canal oficial.
    </p>
    <p>
      La información es aportada y mantenida por voluntarios. Puede cambiar rápido o estar
      desactualizada. <strong>Confirma siempre por teléfono antes de desplazarte</strong> a un
      punto de acopio.
    </p>

    <h2>Números oficiales</h2>
    <ul>
      <li>Emergencias nacionales: <strong>123</strong></li>
      <li>
        Personas desaparecidas: Cruz Roja Colombiana – Restablecimiento del Contacto Familiar
        <!-- TODO: confirmar enlace oficial de Cruz Roja Colombiana (RFL) antes de publicar -->
        (<a href="#TODO-cruzroja-rfl" target="_blank" rel="noopener">enlace pendiente de confirmar</a>)
      </li>
    </ul>

    <h2>¿Cómo aportar o corregir un punto?</h2>
    <p>
      Los datos viven en el código del sitio, no en una base de datos. Para agregar o actualizar
      un punto de acopio:
    </p>
    <ol>
      <li>Edita o crea el archivo <code>src/data/puntos/&lt;municipio&gt;.ts</code>.</li>
      <li>Si es un municipio nuevo, agrégalo también en <code>src/data/municipios.ts</code>.</li>
      <li>Abre un Pull Request con el cambio.</li>
    </ol>
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

.acerca h2 {
  margin-top: var(--espacio-lg);
}

.acerca code {
  background: var(--color-superficie);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
