<script setup lang="ts">
import EmergencyBanner from './components/EmergencyBanner.vue'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import BotonReportar from './components/BotonReportar.vue'
</script>

<template>
  <EmergencyBanner />
  <NavBar />
  <main class="container">
    <router-view />
  </main>
  <SiteFooter />
  <BotonReportar />
</template>
