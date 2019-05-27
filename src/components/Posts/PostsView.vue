<template>
    <div>
        <PostsWeb :contents="articles" v-if="screenWidth > 840"/>
        <PostsTablet :contents="articles" v-if="screenWidth < 840 && screenWidth > 600"/>
        <PostsMobile :contents="articles" v-if="screenWidth < 600"/>
    </div>
</template>

<script>
import PostsWeb from "./PostsWeb.vue";
import PostsTablet from './PostsTablet.vue';
import PostsMobile from './PostsMobile.vue';
export default {
    name: "PostsView",
    props: ["articles", "screenWidth"],
    components: {
        PostsWeb,
        PostsTablet,
        PostsMobile,
    }
}
</script>

<style scoped>

</style>
