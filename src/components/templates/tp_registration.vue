<template>
  <div id="registration">
    <div id="container">
      <div class="input-login">
        <input
          type="text"
          placeholder="Seu nome"
          v-model="user.name"
          required
        />
      </div>
      <div class="input-login">
        <input
          type="email"
          placeholder="Seu melhor email"
          v-model="user.email"
          required
        />
      </div>
      <div class="input-login">
        <input
          type="password"
          placeholder="Sua senha"
          v-model="user.password"
          required
        />
      </div>
      <button id="btn-save" @click="save">Salvar</button>
      <p>Já tem cadastro? <router-link to="/login">Entre aqui.</router-link></p>
    </div>
  </div>
</template>
  
<script>
import axios from "../../config/axios";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    save() {
      axios
        .post("/user", this.user)
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.error = error.response.data.error;
          console.log(this.error);
        });
    },
  },
};
</script>
  
  <style>
#registration {
  color: white;
  background-color: rgb(103, 103, 175);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#container {
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

.input-login input::placeholder {
  color: white;
}

#btn-save {
  padding: 10px 15px;
  background: brown;
  color: white;
  outline: none;
  border: none;
  margin: 15px auto 10px;
  display: block;
  cursor: pointer;
}

p {
  text-align: center;
}
a {
  color: white !important;
  text-align: center;
}
</style>