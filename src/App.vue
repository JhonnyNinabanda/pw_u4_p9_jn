<template>
  <div>
    <nav class="tabs">
      <router-link to="/" class="tab" exact-active-class="active">
        Consultar
      </router-link>

      <router-link to="/consultar-id" class="tab" exact-active-class="active">
        Consultar por ID
      </router-link>

      <router-link to="/crear" class="tab" exact-active-class="active">
        Crear
      </router-link>

      <router-link to="/actualizar" class="tab" exact-active-class="active">
        Actualizar
      </router-link>

      <router-link to="/actualizar-parcial" class="tab" exact-active-class="active">
        Actualizar Parcial
      </router-link>

      <router-link to="/eliminar" class="tab" exact-active-class="active">
        Eliminar
      </router-link>
    </nav>

    <router-view />
  </div>
</template>

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
  
}


.active {
  background: #dcdce3;
  font-weight: bold;
}
</style>


