import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inscreva-se',
      beforeEnter() {location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfJGSf_7QNROf-sR8R3XDqEiQPOIDs65dIsvL6HIzWtPsnyTA/viewform'}
    }
  ]
})

export default router
