<template>
  <div>
    <h3>Consultar Estudiante por ID</h3>

    <input type="number" v-model="id" placeholder="Ingrese ID" />
    <button @click="consultarPorId">Consultar</button>

    <div v-if="estudiante">
      <p><b>Nombre:</b> {{ estudiante.nombre }}</p>
      <p><b>Apellido:</b> {{ estudiante.apellido }}</p>
    </div>
  </div>
</template>

<script>
import { consultarPorIdFacade } from '../clients/MatriculaClient.js'

export default {
  data() {
    return {
      id: null,
      estudiante: null
    }
  },
  methods: {
    async consultarPorId() {
      this.estudiante = await consultarPorIdFacade(this.id)
    }
  }
}
</script>
