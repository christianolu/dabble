<template>
  <div class="login">
    <div class="content">
      <div class="header">
        <div class="h3">
          <b>Login</b>
          <span @click="closeLogin()" class="close">&times;</span>
        </div>
      </div>
      <div class="body">
        <div class="inputs">
          <div>
            <input v-model="name" type="text" placeholder="Username" class="usericon">
          </div>
          <div>
            <input v-model="password" type="password" placeholder="Password" class="userpass">
          </div>
        </div>
        <div class="grid">
          <div @click="login()">
            <img src="../assets/sign-in.svg" class="Botton">
          </div>
          <div>
            <img src="../assets/sign-up.svg" class="Botton">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: "login",
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    closeLogin() {
      this.$emit("close-login");
    },
    // login(){
    //   console.log("here")
    //   Axios.post('http://127.0.0.1:5000/login', {
    //     username: this.name,
    //     password: this.password
    //   })
    //   .then(response => {
    //     console.log(response)
    //     this.$root.auth = response.data
    //   })
    //   .catch(({response}) =>{
    //     console.log(response)
    //   })
    // }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.8);
}

.content {
  background-color: #fefefe;
  margin: 10% auto; /* 15% from the top and centered */
  /* padding: 50px; */
  width: 40%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.header {
  padding: 10px;
}

.body {
  padding: 0px 50px 50px 50px;
}

.h3 {
  text-align: center;
  font-size: 20px;
}

.close {
  float: right;
  color: black;
  font-size: 20px;
  cursor: pointer;
}

.inputs {
  margin-top: 30px;
}

input {
  padding: 10px 35px;
  margin-bottom: 30px;
  display: inline-block;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  color: rgb(42, 42, 42);
}

input:focus {
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
}

.usericon {
  background: white url(../assets/username.svg) left no-repeat;
  background-size: 30px;
}

.userpass {
  background: white url(../assets/password.svg) left no-repeat;
  background-size: 30px;
}

.grid {
  grid-template-columns: 50% 50%;
  display: grid;
  height: 50px;
  text-align: center;
}

.Botton {
  padding: 10px 0px 10px 0px;
  /* background-color: rgb(0, 110, 255); */
  /* background-color: rgb(4, 94, 211); */
  text-align: center;
}

.Botton:hover {
  width: 40px;
  height: 40px;
  transition: 0.3s;
}

img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

@media screen and (max-width: 840px) {
  .content {
    width: 70%;
    left: 10%;
  }
}
</style>
