import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TrainingPage from '../views/TrainingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomePage
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/school',
      name: 'Training',
      component: TrainingPage
    },
  ]
})

export default router
