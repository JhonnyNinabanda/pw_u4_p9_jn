<template>
  <div>
    <!-- Menú solo si NO estamos en login -->
    <nav v-if="$route.path !== '/login'" class="tabs">
      <router-link to="/" class="tab" :class="{ active: $route.path === '/' }">
        Consultar
      </router-link>

      <router-link
        to="/consultar-id"
        class="tab"
        :class="{ active: $route.path === '/consultar-id' }"
      >
        Consultar por ID
      </router-link>

      <router-link
        to="/crear"
        class="tab"
        :class="{ active: $route.path === '/crear' }"
      >
        Crear
      </router-link>

      <router-link
        to="/actualizar"
        class="tab"
        :class="{ active: $route.path === '/actualizar' }"
      >
        Actualizar
      </router-link>

      <router-link
        to="/actualizar-parcial"
        class="tab"
        :class="{ active: $route.path === '/actualizar-parcial' }"
      >
        Actualizar Parcial
      </router-link>

      <router-link
        to="/eliminar"
        class="tab"
        :class="{ active: $route.path === '/eliminar' }"
      >
        Eliminar
      </router-link>

      <button class="tab logout" @click="logout">Salir</button>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  background: #1d149b;
  padding: 15px;
}

.tab {
  padding: 10px 16px;
  background: #0774e1;
  color: rgb(17, 17, 17);
  text-decoration: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}

.logout {
  background: #e53935;
  color: white;
}

.active {
  background: #dcdce3;
  font-weight: bold;
}
</style>
