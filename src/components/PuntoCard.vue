<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import type { PuntoAcopio } from '@/types'
import { relativeTime, esDatoVencido } from '@/utils/relativeTime'
import { municipios } from '@/data'
import { necesidadesGenericas } from '@/data/necesidadesGenericas'
import ListaNecesidades from './ListaNecesidades.vue'

const props = defineProps<{ punto: PuntoAcopio }>()

const abierto = ref(false)
const baseId = useId()
const contentId = `${baseId}-contenido`

const esGenerico = computed(() => props.punto.necesita === necesidadesGenericas)

const vencido = computed(() => esDatoVencido(props.punto.actualizado))

const mapsHref = computed(() => {
  if (props.punto.mapsUrl) return props.punto.mapsUrl
  const nombreMunicipio = municipios.find((m) => m.slug === props.punto.municipioSlug)?.nombre
  const query = [props.punto.direccion, nombreMunicipio, 'Colombia'].filter(Boolean).join(', ')
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
})

function whatsappHref(valor: string) {
  return `https://wa.me/57${valor.replace(/\D/g, '')}`
}

function instagramHref(valor: string) {
  return `https://instagram.com/${valor.replace(/^@/, '')}`
}
</script>

<template>
  <article v-if="punto.activo" class="punto-card">
    <h2 class="titulo-punto">
      <button
        type="button"
        class="encabezado-punto"
        :aria-expanded="abierto"
        :aria-controls="contentId"
        @click="abierto = !abierto"
      >
        <span class="encabezado-texto">
          <span class="eyebrow">
            <span :class="{ vencido }">Actualizado {{ relativeTime(punto.actualizado) }}</span>
            <span v-if="punto.verificadoPor"> · Verificado por {{ punto.verificadoPor }}</span>
            <span v-if="vencido" class="badge-vencido">Sin actualizar — confirma antes de ir</span>
          </span>
          <span class="nombre">{{ punto.nombre }}</span>
          <span v-if="punto.barrio" class="barrio">{{ punto.barrio }}</span>
        </span>
        <span class="caret" aria-hidden="true">{{ abierto ? '▴' : '▾' }}</span>
      </button>
    </h2>

    <a :href="mapsHref" target="_blank" rel="noopener" class="direccion-link">
      {{ punto.direccion }}
      <svg
        class="icono-externo"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>

    <div :id="contentId" class="contenido-colapsable" :class="{ abierto }" role="region">
      <div class="contenido-colapsable-inner">
        <div v-if="punto.contactos.length" class="acciones">
          <template v-for="(c, i) in punto.contactos" :key="i">
            <a v-if="c.tipo === 'whatsapp'" :href="whatsappHref(c.valor)" target="_blank" rel="noopener" class="btn-contacto">
              Contacto
            </a>
            <a v-else-if="c.tipo === 'instagram'" :href="instagramHref(c.valor)" target="_blank" rel="noopener" class="btn-contacto">
              Contacto
            </a>
            <a v-else :href="`tel:${c.valor}`" class="btn-contacto">Llamar</a>
          </template>
        </div>

        <p class="horario">Horario: {{ punto.horario }}</p>

        <p v-if="esGenerico" class="necesita-generico">
          Necesita lo básico (ver la lista general arriba)
        </p>
        <ListaNecesidades v-else :necesidades="punto.necesita" />

        <p v-if="punto.noNecesita?.length" class="no-necesita">
          No llevar: {{ punto.noNecesita.join(', ') }}
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.punto-card {
  background: var(--color-superficie);
  box-shadow: var(--sombra-sm);
  border-radius: var(--radio);
  padding: var(--espacio-md);
  margin-bottom: var(--espacio-md);
}

.titulo-punto {
  margin: 0;
}

.encabezado-punto {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--espacio-sm);
  width: 100%;
  min-height: 44px;
  padding: 0;
  background: none;
  border: none;
  text-align: left;
  color: inherit;
}

.encabezado-texto {
  display: flex;
  flex-direction: column;
}

.eyebrow {
  font-size: 0.75rem;
  color: var(--color-texto-tenue);
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
  align-items: center;
  margin-bottom: 2px;
}

.nombre {
  font-weight: 600;
  font-size: 1.1rem;
}

.barrio {
  margin-top: 2px;
  color: var(--color-texto-tenue);
  font-size: 0.85rem;
}

.direccion-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-height: 32px;
  margin-top: 2px;
  color: var(--color-acento);
  text-decoration: none;
}

.direccion-link:active {
  text-decoration: underline;
}

.icono-externo {
  flex-shrink: 0;
  width: 13px;
  height: 13px;
}

.caret {
  flex-shrink: 0;
  font-size: 1.2rem;
  color: var(--color-texto-tenue);
}

.contenido-colapsable {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 200ms ease;
}

.contenido-colapsable.abierto {
  grid-template-rows: 1fr;
}

.contenido-colapsable-inner {
  overflow: hidden;
}

@media (prefers-reduced-motion: reduce) {
  .contenido-colapsable {
    transition: none;
  }
}

.acciones {
  display: flex;
  flex-wrap: wrap;
  gap: var(--espacio-sm);
  margin: var(--espacio-sm) 0 0;
}

.horario {
  margin: var(--espacio-md) 0 0;
}

.necesita-generico {
  margin: var(--espacio-sm) 0;
  color: var(--color-texto-tenue);
  font-size: 0.9rem;
  font-style: italic;
}

.no-necesita {
  font-size: 0.85rem;
  color: var(--color-texto-tenue);
}

.btn-contacto {
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border-radius: 999px;
  background: var(--color-acento-suave);
  color: var(--color-acento);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  flex: 0 0 auto;
  text-align: center;
}

.btn-contacto:active {
  background: color-mix(in srgb, var(--color-acento) 15%, var(--color-acento-suave));
}

.vencido {
  color: var(--urg-media);
  font-weight: 600;
}

.badge-vencido {
  background: color-mix(in srgb, var(--urg-media) 20%, transparent);
  color: var(--urg-media);
  padding: 2px 8px;
  border-radius: 999px;
  font-weight: 600;
}
</style>
