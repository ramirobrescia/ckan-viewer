import { createRouter, createWebHistory } from 'vue-router'

import Start from '../components/Start.vue'
import CkanBrowser from '../components/CkanBrowser.vue'

const routes = [
  { path: '/', component: Start },
  {
    path: '/browse', component: CkanBrowser,
    props: route => ({ url: route.query.url })
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router