import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from "vue-router"
// import CounterVue from '@views/Counter.vue'
import CounterVue from './views/Counter..vue';
import NotFound from "./views/NotFound.vue"

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
        
        path:"/",
        redirect:"/counter"
    },
    {
        path:"/counter",
        component:CounterVue,
        name:"Counter"

  
    },
    {
        path:"/:pathMath(.*)*",
        name:"Notfound",
        component:NotFound
    }
    ]
})
createApp(App).use(router).mount('#app')
