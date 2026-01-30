import { createRouter, createWebHistory } from 'vue-router'

// Importamos las vistas
import ConsultarEstudiantes from '../components/ConsultarEstudiantes.vue'
import ConsultarEstudiantePorId from '../components/ConsultarEstudiantePorId.vue'
import CrearEstudiante from '../components/CrearEstudiante.vue'
import ActualizarEstudiante from '../components/ActualizarEstudiante.vue'
import ActualizacionParcial from '../components/ActualizacionParcial.vue'
import EliminarEstudiante from '../components/EliminarEstudiante.vue'

const routes = [
  {
    path: '/',
    name: 'consultar',
    component: ConsultarEstudiantes
  },
  {
    path: '/consultar-id',
    name: 'consultar-id',
    component: ConsultarEstudiantePorId
  },
  {
    path: '/crear',
    name: 'crear',
    component: CrearEstudiante
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: ActualizarEstudiante
  },
  {
    path: '/actualizar-parcial',
    name: 'actualizar-parcial',
    component: ActualizacionParcial
  },
  {
    path: '/eliminar',
    name: 'eliminar',
    component: EliminarEstudiante
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
