<template>
  <div class = "Login">
    <h2>Login</h2>
    <input v-model="usuario" type="text" placeholder = "Usuario"> 
    <input v-model="password"  type="password" placeholder = "Contraseña"> 
    <button @click="Login">Entrar</button>
    <p v-if="error" class="error-msg">
        {{ error }}
    </p>
  </div>

</template>

<script>
import { login } from '@/clients/MatriculaClient.js';
export default {
    data(){
        return{
            usuario:'',
            password:'',
            error: null,
        };
    },
    methods: {
        async Login() {
        try {
            await login(this.usuario, this.password);
            this.$router.push('/about');
        } catch (err) {
            this.error = "Usuario o contraseña incorrectos";
        }
        }
    }
};
</script>

<style scoped>
.Login{
    width: 300px;
    margin: 100px;
    padding: 20px;
    border: 1px solid red;
    border-radius: 8px;
    text-align: center;
    background: greenyellow;
}

input {
    width: 80%;
    margin-bottom: 10px;
    padding: 8px;
}

button{
    width: 80%;
    padding: 8px;
    cursor: pointer;
}
</style>