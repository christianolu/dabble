import Vue from 'vue'
import Router from 'vue-router';
import Home from './views/home.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/home',
            component: Home
        }
    ]
})

export default router;