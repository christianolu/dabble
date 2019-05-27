<template>
    <div class="posts">
      <div>
        <Posts v-bind:key="article.id"
          v-for="article in first"
          :author="article.author"
          :time="article.time"
          :content="article.content"
        />
      </div>
      <div>
        <Posts v-bind:key="article.id"
          v-for="article in second"
          :author="article.author"
          :time="article.time"
          :content="article.content"
        />
      </div>
      <div>
        <Posts v-bind:key="article.id"
          v-for="article in third"
          :author="article.author"
          :time="article.time"
          :content="article.content"
        />
      </div>
    </div>
</template>

<script>
import Posts from './Posts.vue';

export default {
    name: "PostsWeb",
    props: ["contents"],
    components: {
        Posts
    },
    computed: {
      first() {
        return this.contents.filter((article, index) => index % 3 == 0);
      },
      second() {
        return this.contents.filter((article, index) => index % 3 == 1);
      },
      third() {
        return this.contents.filter((article, index) => index % 3 == 2);
      }
    }
}
</script>

<style scoped>
    .posts {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 1%;
    justify-content: space-between;
    align-items: stretch;
    align-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 20px;
    margin-top: 80px;
    box-sizing: border-box;
    }
</style>
