<template>
  <div id="login">
    <div id="container">
      <div class="input-login">
        <input type="email" v-model="user.email" placeholder="Seu melhor email" @input="clear" required>
      </div>
      <p v-if="error.email">{{error.email}}</p>
      
      <div class="input-login">
        <input type="password" placeholder="Sua senha" @input="clear" v-model="user.password" required>  
      </div>
      <p v-if="error.password">{{error.password}}</p>
      <button id="btn-login" @click="login">Entrar</button>
      <p>Você não tem cadastro? <router-link to="/">Cadastre-se aqui.</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "../../config/axios"
export default {
data(){
  return {
    error: "",
    user: {
      email: "",
      password: ""
    }
  }
},
methods: {
  login(){
    axios.post("/login", this.user)
    .then(response => {
      localStorage.setItem("tk-auth", response.data.tk)
      this.$router.push("/home")
    })
    .catch(error => {
      this.error = error.response.data.error
    })
  },
  clear(){
    this.error = ""
  }
}
}
</script>

<style>
#login{
  color: white;
  background-color:rgb(103, 103, 175);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#container{
  width: 500px;
  border: 1px solid;
  border-radius: 10px;
  padding: 20px; 
}

.input-login {
  width: 100%;
  border-bottom: 1px solid;
  padding: 5px;
  margin-bottom: 5px;
}

.input-login input {
  padding: 5px;
  background: none;
  outline: none;
  border: none;
  width: 100%;
  color: white;
}

.input-login input::placeholder{
  color: white;
}

#btn-login{
  padding: 10px 15px;
  background: brown;
  color: white;
  outline: none;
  border: none;
  margin: 15px auto 10px;
  display: block;
}

p{ 
  text-align: center;
}
a{
  color: white !important;
  text-align: center;
}
</style>