<template>
  <div @click="postPopUp()" class="plusButton">+</div>
</template>

<script>
export default {
  name: "PlusButton",
  methods: {
    postPopUp() {
      this.$emit("plusClicked");
    }
  }
};
</script>

<style scoped>
.plusButton {
  position: fixed;
  right: 40px;
  bottom: 20px;
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
  /* border: solid 1px rgb(70, 70, 255); */
  color: rgb(30, 30, 255);
  font-family: "Times New Roman", Times, serif;
  font-size: 70px;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.plusButton:hover {
  transition: 0.5s;
  opacity: 1;
  background-color: rgb(0, 60, 255);
  color: white;
}
</style>
