import { createRouter, createWebHistory } from 'vue-router'

import Start from '../components/Start.vue'
import CKANBrowser from "../components/CKANBrowser.vue";

const routes = [
  { path: '/', component: Start },
  {
    path: '/browse/:url', component: CKANBrowser, props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router