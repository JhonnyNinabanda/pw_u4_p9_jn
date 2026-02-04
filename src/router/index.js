import { createRouter, createWebHistory } from 'vue-router'

// Vistas
import Login from '../components/Login.vue'
import ConsultarEstudiantes from '../components/ConsultarEstudiantes.vue'
import ConsultarEstudiantePorId from '../components/ConsultarEstudiantePorId.vue'
import CrearEstudiante from '../components/CrearEstudiante.vue'
import ActualizarEstudiante from '../components/ActualizarEstudiante.vue'
import ActualizacionParcial from '../components/ActualizacionParcial.vue'
import EliminarEstudiante from '../components/EliminarEstudiante.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'consultar',
    component: ConsultarEstudiantes,
    meta: { requiresAuth: true }
  },
  {
    path: '/consultar-id',
    component: ConsultarEstudiantePorId,
    meta: { requiresAuth: true }
  },
  {
    path: '/crear',
    component: CrearEstudiante,
    meta: { requiresAuth: true }
  },
  {
    path: '/actualizar',
    component: ActualizarEstudiante,
    meta: { requiresAuth: true }
  },
  {
    path: '/actualizar-parcial',
    component: ActualizacionParcial,
    meta: { requiresAuth: true }
  },
  {
    path: '/eliminar',
    component: EliminarEstudiante,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 GUARD DE AUTENTICACIÓN
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token")

  if (to.meta.requiresAuth && !token) {
    next("/login")
  } else {
    next()
  }
})

export default router
