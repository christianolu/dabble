<template>
    <div class="posts">
      <div>
        <Posts v-bind:key="article.id"
          v-for="article in contents"
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
    name: "PostsTablet",
    props: ["contents"],
    components: {
        Posts
    }
}
</script>

<style scoped>
    .posts {
        display: grid;
        grid-template-columns: 99%;
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