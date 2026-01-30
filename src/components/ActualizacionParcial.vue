<template>
  <div>
    <h3>Actualización Parcial</h3>

    <input type="number" v-model="id" placeholder="ID" />
    <input v-model="provincia" placeholder="Provincia" />

    <button @click="actualizarParcial">Actualizar Parcial</button>
  </div>
</template>

<script>
import { actualizarParcialFacade } from '../clients/MatriculaClient.js'

export default {
  data() {
    return {
      id: null,
      provincia: ''
    }
  },
  methods: {
    async actualizarParcial() {
      const body = {
        provincia: this.provincia
      }
      await actualizarParcialFacade(this.id, body)
      alert("Actualización parcial exitosa")
    }
  }
}
</script>

<style>

</style>
