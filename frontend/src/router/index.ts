import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;