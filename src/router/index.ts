import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import DemoBlock from '../components/DemoBlock/DemoBlock'
import Home from '../pages/Home/Home'
Vue.use(Router)

let routes: RouteConfig[] = [
    {
        name: 'home',
        path: '/',
        component:Home
    },
    {
        name: 'demo',
        path: '/demoPage',
        component:DemoBlock
    }
]
export default new Router({
    routes
})
