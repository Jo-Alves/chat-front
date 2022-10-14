import { createRouter, createWebHistory } from "vue-router"

import tp_Registration from "../components/templates/tp_registration"
import tp_login from "../components/templates/tp_login"
import tp_home from "../components/templates/tp_home"

const routes = [
    {
        name: "registration",
        path: "/",
        component: tp_Registration
    },
    {
        name: "login",
        path: "/login",
        component: tp_login
    }, {
        name: "home",
        path: "/home",
        component: tp_home
    }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router