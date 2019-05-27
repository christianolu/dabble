<template>
  <div class="createpost">
    <div class="body">
      <div>
        <b>Create a Post</b>
        <span @click="closePost()" class="close">&times;</span>
      </div>
      <div>
        <textarea class="postInput" placeholder="What's on Your mind" v-model="content" name="uname"></textarea>
      </div>
      <div>
        <img @click="post()" src="../assets/post.svg" class="icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Createpost",
  props: [],
  data() {
    return {
      content: ''
    }
  },
  methods: {
    closePost() {
      this.$emit("close-post");
    },
    post() {
      this.$emit('post-clicked', this.content)
      this.content = ''
    }
  }
};
</script>

<style scoped>
.createpost {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.8);
}

.body {
  margin: 10% auto;
  margin-bottom: 20px;
  padding: 20px;
  width: 50%;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  height: 270px;
}

.close {
  float: right;
  color: red;
  font-size: 20px;
  cursor: pointer;
}

.postInput {
  width: 100%;
  height: 200px;
  resize: none;
  border: none;
  font-size: 18px;
  /* border: solid 1px rgb(209, 209, 209); */
}

.postInput:focus {
  outline: none;
}

.icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
  float: right;
}

@media screen and (max-width: 840px) {
  .body {
    width: 80%;
    left: 10%;
  }
}
</style>
