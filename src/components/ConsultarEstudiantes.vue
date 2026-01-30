<template>
  <div>
    <h3>Lista de Estudiantes</h3>
    <button @click="consultar">Consultar</button>

    <ul>
      <li v-for="(est, index) in estudiantes" :key="index">
        {{ est.nombre }} {{ est.apellido }}
      </li>
    </ul>
  </div>
</template>

<script>
import { consultarFacade } from '../clients/MatriculaClient.js'

export default {
  data() {
    return {
      estudiantes: []
    }
  },
  methods: {
    async consultar() {
      const resp = await consultarFacade()
      this.estudiantes = resp
    }
  }
}
</script>
