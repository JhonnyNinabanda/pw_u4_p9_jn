<template>
  <div class="login-container">
    <h3>Iniciar Sesión</h3>

    <input v-model="username" placeholder="Usuario" />
    <input v-model="password" type="password" placeholder="Contraseña" />

    <button @click="login">Ingresar</button>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import { loginFacade } from "../clients/AuthClient";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const resp = await loginFacade({
          username: this.username,
          password: this.password
        });

        localStorage.setItem("token", resp.accessToken);
        localStorage.setItem("role", resp.role);

        this.$router.push("/");
      } catch (e) {
        this.error = "Usuario o contraseña incorrectos";
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 350px;
  margin: 100px auto;
  padding: 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}

button {
  width: 100%;
  padding: 10px;
  background: #3b0aee;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
