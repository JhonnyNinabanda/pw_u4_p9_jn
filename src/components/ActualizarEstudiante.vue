<template>
  <div>
    <h3>Actualizar Estudiante</h3>

    <input type="number" v-model="id" placeholder="ID" />
    <input v-model="nombre" placeholder="Nombre" />
    <input v-model="apellido" placeholder="Apellido" />

    <button @click="actualizar">Actualizar</button>
  </div>
</template>

<script>
import { actualizarFacade } from '../clients/MatriculaClient.js'

export default {
  data() {
    return {
      id: null,
      nombre: '',
      apellido: ''
    }
  },
  methods: {
    async actualizar() {
      const body = {
        nombre: this.nombre,
        apellido: this.apellido
      }
      await actualizarFacade(this.id, body)
      alert("Actualizado correctamente")
    }
  }
}
</script>
