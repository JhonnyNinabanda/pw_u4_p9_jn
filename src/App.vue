<template>
  <nav>
    <router-link to="/">Consultar</router-link> |
    <router-link to="/consultar-id">Consultar por ID</router-link> |
    <router-link to="/crear">Crear</router-link> |
    <router-link to="/actualizar">Actualizar</router-link> |
    <router-link to="/actualizar-parcial">Actualizar Parcial</router-link> |
    <router-link to="/eliminar">Eliminar</router-link>
  </nav>

  <hr />

  <router-view />
</template>
