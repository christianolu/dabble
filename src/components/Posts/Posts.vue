<template>
  <div class="main">
    <div class="m-content">
      <div class="c-header">
        <div>
          <img src="../../assets/new.png" class="pics">
        </div>
        <div>
          <div class="author">{{author}}</div>
          <div class="time">{{time}}</div>
        </div>
      </div>
      <div class="content">{{content}}</div>

      <div class="p-footer">
        <div>
          <img src="../../assets/like.png" class="icon">
          <sup></sup>
        </div>
        <div>
          <img src="../../assets/comment.svg" class="icon">
        </div>
        <div>
          <img src="icons/edit.svg" class="icon">
        </div>
      </div>

      <hr>
      <div class="commentsec">
        <textarea class="commentinput" placeholder="Comment..."></textarea>
        <img src="../../assets/post.svg" class="icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  props: ["author", "time", "content", "postid", "commenticonclicked"]
};
</script>

<style scoped>
/* .main {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-gap: 15px;
  justify-content: space-between;
  align-items: stretch;
  align-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 20px;
  box-sizing: border-box;
} */

.m-content {
  background-color: white;
  border: solid 1px rgb(209, 209, 209);
  border-radius: 10px 10px 10px 10px;
  word-wrap: break-word;
  height: fit-content;
  text-align: justify;
  width: 100%;
  margin-bottom: 10px;
}

.m-content:hover {
  box-shadow: 2px 2px 5px grey;
}

.c-header {
  display: grid;
  grid-template-columns: 20% 50% 30%;
  /* background-color: rgb(209, 209, 209); */
  border-radius: 20px 20px 0px 0px;
  padding: 10px;
  border-bottom: 1px solid rgb(209, 209, 209);
  font-family: cursive;
}

.pics {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.author {
  font-size: 20px;
}

.time {
  font-size: 12px;
}

.delete {
}

.content {
  padding: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 18px;
  height: 45%;
}

hr {
  border: solid 0.5px rgb(209, 209, 209);
  margin: 0;
}

.commentsec {
  display: grid;
  grid-template-columns: 80% 15%;
  grid-gap: 5%;
  padding: 10px;
}
.commentinput {
  resize: none;
  padding: 10px;
  border-radius: 20px;
  border: solid 0.5px rgb(209, 209, 209);
  height: 20px;
  font-size: 16px;
  /* height: fit-content; */
}
.commentinput:focus {
  outline: none;
  transition: 0.5s;
  opacity: 1;
}

.p-footer {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  text-align: center;
  height: fit-content;
  margin-bottom: 5px;
}

.p-footer > div {
  padding: 5px;
  border-radius: 5px;
}

.p-footer > div:hover {
  background-color: rgb(200, 200, 200);
}
.icon {
  width: 25px;
  height: 25px;
}

.icon:hover {
}
</style>
