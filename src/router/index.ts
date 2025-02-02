import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
        path: "/docs",
        name: "Docs",
        meta: {
            title: "Docs",
            group: "navbar",
            // group: "navbar",
        },
        redirect: "/docs/Introduction",
        component: () => import("../views/DocsView.vue"),
        children: [
            {
                path: "/docs/Introduction",
                name: "Introduction",
                meta: {
                    title: "Docs",
                    // group: "navbar",
                },
                component: () => import("../views/docs/Introduction.vue"),
            },
            {
                path: "/docs/Holders",
                name: "Holders",
                meta: {
                    title: "Docs",
                    // group: "navbar",
                },
                component: () => import("../views/docs/Holders.vue"),
            },
            {
                path: "/docs/Owners",
                name: "Owners",
                meta: {
                    title: "Docs",
                    // group: "navbar",
                },
                component: () => import("../views/docs/Owners.vue"),
            },
            {
                path: "/docs/Tokenomics",
                name: "Tokenomics",
                meta: {
                    title: "Docs",
                    // group: "navbar",
                },
                component: () => import("../views/docs/Tokenomics.vue"),
            },
            {
                path: "/docs/Harberger Tax",
                name: "Harberger Tax",
                meta: {
                    title: "Docs",
                    // group: "navbar",
                },
                component: () => import("../views/docs/Harberger Tax.vue"),
            },
            {
                path: "/docs/Liquidity-Management",
                name: "Liquidity Management",
                meta: {
                    title: "Docs",
                    // group: "navbar",
                },
                component: () => import("../views/docs/Liquidity-Management.vue"),
            },
            {
                path: "/docs/AI-agent",
                name: "AI-agent",
                meta: {
                    title: "Docs",
                    // group: "navbar",
                },
                component: () => import("../views/docs/ai-agent.vue"),
            },
            {
                path: "/docs/FAQ",
                name: "FAQ",
                meta: {
                    title: "Docs",
                    // group: "navbar",
                },
                component: () => import("../views/docs/FAQ.vue"),
            },
        ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Überprüfen, ob der Zielort ein Hash enthält
    if (to.hash) {
        // Warten, bis die Komponente geladen ist und dann zum Ziel scrollen
        return {
            el: to.hash,
            behavior: "smooth", // Optional: für sanftes Scrollen
            top: 80,
        };
    }
    return savedPosition || { top: 0 }; // Scrollen zum Anfang der Seite, falls kein Hash vorhanden ist
},
})

export default router
