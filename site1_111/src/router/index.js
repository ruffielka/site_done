import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PsychologyPage from '../views/PsychologyPage.vue'
import MassagePage from '../views/MassagePage.vue'
import PricePage from '../views/PricePage.vue'
import ContactsPage from '../views/ContactsPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/psychology', name: 'psychology', component: PsychologyPage },
  { path: '/massage', name: 'massage', component: MassagePage },
  { path: '/price', name: 'price', component: PricePage },
  { path: '/contacts', name: 'contacts', component: ContactsPage },
  { path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router