import { createApp } from 'vue'
import App from './App.vue'

import router from "@/config/router"
import "font-awesome/css/font-awesome.css"
import "@/config/axios"


createApp(App).use(router).mount('#app')
