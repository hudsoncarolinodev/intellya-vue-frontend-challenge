import { createRouter, createWebHistory } from 'vue-router'
import UsersList from '../views/Users/UsersList.vue'
import UserDetails from '../views/Users/UserDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Listagem de Usuários',
      component: UsersList
    },
    {
      path: '/user-details/:id',
      name: 'Detalhes do Usuário',
      component: UserDetails
    }
  ]
})

export default router
