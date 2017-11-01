import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/demo/demo'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: HelloWorld
    }]
})