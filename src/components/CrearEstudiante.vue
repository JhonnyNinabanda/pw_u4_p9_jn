<template>
  <div>
    <h3>Crear Estudiante</h3>

    <input v-model="nombre" placeholder="Nombre" />
    <input v-model="apellido" placeholder="Apellido" />
    <input type="date" v-model="fechaNacimiento" />
    <input v-model="genero" placeholder="Género" />
    <input v-model="provincia" placeholder="Provincia" />

    <button @click="guardar">Guardar</button>

    <p>{{ mensaje }}</p>
  </div>
</template>

<script>
import { guardarFacade } from '../clients/MatriculaClient'

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      genero: '',
      provincia: '',
      mensaje: ''
    }
  },
  methods: {
    async guardar() {
      const body = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
        genero: this.genero,
        provincia: this.provincia
      }

      const resp = await guardarFacade(body)
      this.mensaje = `Estudiante ${resp.nombre} creado correctamente`
    }
  }
}
</script>
