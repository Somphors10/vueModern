import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Services from '../components/Services.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    router: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/',
            name: 'about',
            component: AboutView
        },
        {
            path: '/',
            name: 'services',
            component: Services
        }
    ]
})

export default router