import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: Main
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;