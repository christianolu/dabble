<template>
  <div>
    <div class="header">
      <div>
        <a href="index.html">
          <img src="../assets/dab.png" class="logo">
        </a>
      </div>
      <div>
        <img src="../assets/white-paper.svg" class="menuIcon">
      </div>
      <div @click="loginPopUp">
        <img src="../assets/sign-in.svg" class="menuIcon">
      </div>
      <div @click="SignupPopUp">
        <img src="../assets/sign-up.svg" class="menuIcon">
      </div>
      <div>
        <input placeholder="Search" class="search">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    loginPopUp() {
      this.$emit("loginClicked");
    },
    SignupPopUp() {
      this.$emit("signupClicked");
    }
  }
};
</script>

<style scoped>
.header {
  grid-template-columns: auto auto auto auto auto;
  background-color: rgb(255, 255, 255);
  position: fixed;
  display: grid;
  top: 0;
  width: 100%;
  height: 50px;
  padding-top: 10px;
  padding-left: 5px;
  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.5);
  border: none;
  /* border-radius: 0px 0px 20px 20px; */
  text-align: center;
}

.menuIcon {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  cursor: pointer;
}

.logo {
  width: 100px;
  height: 50px;
}

.search {
  background: white url(../assets/search.svg) left no-repeat;
  background-size: 30px;
  padding: 10px 30px;
  width: 50%;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
}

.search:focus {
  outline: none;
  border: 1px solid #ccc;
}
</style>
