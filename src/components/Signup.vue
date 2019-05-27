<template>
  <div class="signup">
    <div class="content">
      <div class="header">
        <div class="h3">
          <b>Signup</b>
          <span @click="closeSignup()" class="close">&times;</span>
        </div>
      </div>
      <div class="body">
        <div class="inputs">
          <div>
            <input type="text" placeholder="Username" class="usericon">
          </div>

          <div>
            <input type="text" placeholder="EOS Account" class="usereos">
          </div>

          <div>
            <input type="password" placeholder="Password" class="userpass">
            <input type="password" placeholder="Comfirm password" class="userpass">
          </div>
        </div>
        <div class="grid">
          <div>
            <img src="../assets/sign-up.svg" class="Botton">
          </div>
          <div>
            <img src="../assets/sign-in.svg" class="Botton">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  methods: {
    closeSignup() {
      this.$emit("close-signup");
    }
  }
};
</script>

<style scoped>
.signup {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
}

.content {
  background-color: #fefefe;
  margin: 5% auto; /* 15% from the top and centered */
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
  padding: 15px 40px;
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
  border: 1px solid #ccc;
  outline: none;
}

.usericon {
  background: white url(../assets/username.svg) left no-repeat;
  background-size: 30px;
}

.userpass {
  background: white url(../assets/password.svg) left no-repeat;
  background-size: 30px;
}

.usereos {
  background: white url(../assets/eos.png) left no-repeat;
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
