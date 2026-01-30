<template>
  <div class="container">
    <h3>Consultar Estudiante por ID</h3>

    <input type="number" v-model="id" placeholder="Ingrese ID" />
    <button @click="consultarPorId">Consultar</button>

    <table v-if="estudiante">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Provincia</th>
          <th>Género</th>
          <th>Fecha Nacimiento</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.provincia }}</td>
          <td>{{ estudiante.genero }}</td>
          <td>{{ estudiante.fechaNacimiento?.substring(0, 10) }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else-if="buscado">No se encontró el estudiante</p>
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

<style>
input {
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
