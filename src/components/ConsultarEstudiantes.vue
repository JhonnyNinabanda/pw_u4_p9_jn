<template>
  <div class="container">
  <h3>Lista de Estudiantes</h3>

  <button @click="consultar">Consultar</button>

  <table v-if="estudiantes.length > 0">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Provincia</th>
        <th>Género</th>
        <th>Fecha Nacimiento</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(est, index) in estudiantes" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ est.nombre }}</td>
        <td>{{ est.apellido }}</td>
        <td>{{ est.provincia }}</td>
        <td>{{ est.genero }}</td>
        <td>{{ est.fechaNacimiento }}</td>
      </tr>
    </tbody>
  </table>

  <p v-else>No hay estudiantes para mostrar</p>
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

<style>
.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 25px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h3 {
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
}

button {
  margin-bottom: 15px;
  padding: 10px 15px;
  background-color: #3b0aee;
  color: white;
  border: none;
  border-radius: 8px;

}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

thead {
  background-color: #6476d2;
  color: white;
}

th, td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

p {
  text-align: center;
  margin-top: 15px;
  color: #100f0f;
}
</style>
