<script setup lang="ts">
import { computed } from 'vue'
import type { PuntoAcopio } from '@/types'
import { relativeTime, esDatoVencido } from '@/utils/relativeTime'

const props = defineProps<{ punto: PuntoAcopio }>()

const ordenUrgencia: Record<string, number> = { alta: 0, media: 1, baja: 2 }

const necesidadesOrdenadas = computed(() =>
  [...props.punto.necesita].sort((a, b) => ordenUrgencia[a.urgencia] - ordenUrgencia[b.urgencia]),
)

const vencido = computed(() => esDatoVencido(props.punto.actualizado))

function whatsappHref(valor: string) {
  return `https://wa.me/57${valor.replace(/\D/g, '')}`
}
</script>

<template>
  <article v-if="punto.activo" class="punto-card">
    <header>
      <h2>{{ punto.nombre }}</h2>
      <p v-if="punto.barrio" class="barrio">{{ punto.barrio }}</p>
    </header>

    <p class="direccion">{{ punto.direccion }}</p>
    <p class="horario">Horario: {{ punto.horario }}</p>

    <ul class="necesita">
      <li v-for="(n, i) in necesidadesOrdenadas" :key="i" :class="`urgencia-${n.urgencia}`">
        <span class="etiqueta-urgencia">{{ n.urgencia }}</span>
        <span class="descripcion">{{ n.descripcion }}</span>
      </li>
    </ul>

    <p v-if="punto.noNecesita?.length" class="no-necesita">
      No llevar: {{ punto.noNecesita.join(', ') }}
    </p>

    <div class="acciones">
      <a v-if="punto.mapsUrl" :href="punto.mapsUrl" target="_blank" rel="noopener" class="btn">
        Cómo llegar
      </a>
      <template v-for="(c, i) in punto.contactos" :key="i">
        <a v-if="c.tipo === 'whatsapp'" :href="whatsappHref(c.valor)" target="_blank" rel="noopener" class="btn btn-secundario">
          WhatsApp
        </a>
        <a v-else :href="`tel:${c.valor}`" class="btn btn-secundario">Llamar</a>
      </template>
    </div>

    <footer>
      <span :class="{ vencido }">Actualizado {{ relativeTime(punto.actualizado) }}</span>
      <span v-if="punto.verificadoPor"> · Verificado por {{ punto.verificadoPor }}</span>
      <span v-if="vencido" class="badge-vencido">Sin actualizar — confirma antes de ir</span>
    </footer>
  </article>
</template>

<style scoped>
.punto-card {
  background: var(--color-superficie);
  border: 1px solid var(--color-borde);
  border-radius: var(--radio);
  padding: var(--espacio-md);
  margin-bottom: var(--espacio-md);
}

.punto-card header h2 {
  margin: 0;
  font-size: 1.1rem;
}

.barrio {
  margin: 2px 0 0;
  color: var(--color-texto-tenue);
  font-size: 0.85rem;
}

.direccion,
.horario {
  margin: var(--espacio-xs) 0;
}

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
  align-items: baseline;
  gap: 8px;
  padding: 6px 10px;
  border-radius: var(--radio);
  border-left: 4px solid transparent;
}

.necesita li.urgencia-alta {
  background: color-mix(in srgb, var(--urg-alta) 12%, transparent);
  border-left-color: var(--urg-alta);
}

.necesita li.urgencia-media {
  background: color-mix(in srgb, var(--urg-media) 12%, transparent);
  border-left-color: var(--urg-media);
}

.necesita li.urgencia-baja {
  background: color-mix(in srgb, var(--urg-baja) 12%, transparent);
  border-left-color: var(--urg-baja);
}

.etiqueta-urgencia {
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.03em;
  opacity: 0.75;
}

.no-necesita {
  font-size: 0.85rem;
  color: var(--color-texto-tenue);
}

.acciones {
  display: flex;
  flex-wrap: wrap;
  gap: var(--espacio-sm);
  margin: var(--espacio-sm) 0;
}

.btn {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border-radius: var(--radio);
  background: var(--color-acento);
  color: var(--color-acento-texto);
  text-decoration: none;
  font-weight: 600;
  flex: 1 1 auto;
  text-align: center;
}

.btn-secundario {
  background: transparent;
  border: 1px solid var(--color-acento);
  color: var(--color-acento);
}

footer {
  font-size: 0.8rem;
  color: var(--color-texto-tenue);
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  align-items: center;
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
