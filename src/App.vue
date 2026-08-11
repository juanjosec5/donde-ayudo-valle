<script setup lang="ts">
import EmergencyBanner from './components/EmergencyBanner.vue'
</script>

<template>
  <EmergencyBanner />
  <main class="container">
    <router-view />
  </main>
</template>
