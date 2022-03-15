import Vue from "vue"
import VueRouter from "vue-router"
import Home from '@/pages/Home.vue'
import About from '@/components/About.vue'
import Contact from '@/pages/Contact.vue'
import Projects from '@/pages/projects/AllProjects.vue'
import VueDo from '@/pages/projects/vue-do/App.vue'
import GiphyGif from '@/pages/projects/giphy/App.vue'
import ClockApp from '@/pages/projects/clock/App.vue'
//import CountrySize from '@/pages/projects/country_size/App.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/projects/',
            name: 'projects',
            component: Projects
        },
        {
            path: '/demo/vue-do',
            name: 'vue-do',
            component: VueDo
        },
        {
            path: '/demo/giphy_gif',
            name: 'giphy_gif',
            component: GiphyGif
        },
        {
            path: '/demo/clock',
            name: 'clock',
            component: ClockApp
        },
    ]
})