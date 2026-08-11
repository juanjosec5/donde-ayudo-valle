<script setup lang="ts">
import EmergencyBanner from './components/EmergencyBanner.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <EmergencyBanner />
  <main class="container">
    <router-view />
  </main>
  <SiteFooter />
</template>
