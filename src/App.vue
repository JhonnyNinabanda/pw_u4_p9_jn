<template>
  <div id="app">
    <nav v-if="$route.path !== '/login'">
      <router-link to="/about">Inicio / Todos</router-link> |
      <router-link to="/consultarId">Buscar por ID</router-link> |
      <router-link to="/crear">Nuevo Estudiante</router-link> |
      <router-link to="/actualizar">Actualizar Todo</router-link> |
      <router-link to="/actualizarParcial">Edición Parcial</router-link> |
      <router-link to="/eliminar">Borrar</router-link> |
      <a href="#" @click="logout">Salir</a>
    </nav>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('estaAutenticado');
      this.$router.push('/login');      // Volvemos al login
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

.main-container {
  padding: 20px;
  border: 1px solid #eee;
  margin: 0 20px;
  border-radius: 8px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px; /* Separa un poco más los enlaces */
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>