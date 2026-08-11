<script setup lang="ts"></script>

<template>
  <section class="acerca">
    <RouterLink to="/" class="volver">← Inicio</RouterLink>
    <h1>Acerca de este directorio</h1>
    <p>
      Este sitio es una guía comunitaria de puntos de acopio de donaciones tras el terremoto del
      10 de agosto de 2026 en el Valle del Cauca.
    </p>
    <p class="descargo-independencia">
      Este es un proyecto <strong>independiente, creado por un ciudadano</strong>. No tiene
      relación directa con la Alcaldía, la Gobernación, ni ninguna entidad gubernamental. No es
      un canal oficial.
    </p>
    <p>
      La información es aportada y mantenida por voluntarios. Puede cambiar rápido o estar
      desactualizada. <strong>Confirma siempre por teléfono antes de desplazarte</strong> a un
      punto de acopio.
    </p>

    <h2>Números oficiales</h2>
    <ul>
      <li>Emergencias nacionales: <strong>123</strong></li>
      <li>Bomberos: <strong>119</strong></li>
      <li>Cruz Roja: <strong>132</strong></li>
      <li>Defensa Civil: <strong>144</strong></li>
      <li>Movilidad: <strong>127</strong></li>
      <li>
        Personas desaparecidas: Cruz Roja Colombiana – Restablecimiento del Contacto Familiar —
        <a href="mailto:rcf@cruzrojacolombiana.org">rcf@cruzrojacolombiana.org</a>,
        <a href="https://www.cruzrojacolombiana.org" target="_blank" rel="noopener">cruzrojacolombiana.org</a>
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
