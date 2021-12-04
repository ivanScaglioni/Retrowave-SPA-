
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes : RouteRecordRaw[] = [
    {
        path:'/',
        name:'main page',
        alias:'/ivan-scaglioni',
        component: ()=> import('@/conponents/index.vue')

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
