import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inicio', component: () => import('../views/Home.vue') },
    { path: '/acerca', name: 'acerca', component: () => import('../views/Acerca.vue') },
    { path: '/comunidad', name: 'comunidad', component: () => import('../views/Comunidad.vue') },
    {
      path: '/:municipioSlug',
      name: 'municipio',
      component: () => import('../views/Municipio.vue'),
      props: true,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
