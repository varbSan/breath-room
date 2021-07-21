import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { auth } from '../firebase/config.js'

// auth guards
function requireAuth(to, from, next) {
  let user = auth.currentUser
  console.log('Current user in auth guard: ', user)
  !user ? next({name: 'Welcome'}) : next()
}

function requireNoAuth(to, from, next) {
  let user = auth.currentUser
  user ? next({name: 'Chatroom'}) : next()
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router