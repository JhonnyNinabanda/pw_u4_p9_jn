<template>
  <div>
    <h3>Eliminar Estudiante</h3>

    <input type="number" v-model="id" placeholder="ID" />
    <button @click="eliminar">Eliminar</button>
  </div>
</template>

<script>
import { eliminarFacade } from '../clients/MatriculaClient.js'

export default {
  data() {
    return {
      id: null
    }
  },
  methods: {
    async eliminar() {
      await eliminarFacade(this.id)
      alert("Estudiante eliminado")
    }
  }
}
</script>
