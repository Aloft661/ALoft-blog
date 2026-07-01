import { createRouter, createWebHistory } from "vue-router";
import PublicLayout from "@/layouts/PublicLayout.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Home/index.vue")
    },
    {
        path: "/",
        component: PublicLayout,
        children: [
            {
                path: "blog",
                name: "Blog",
                component: () => import("@/views/Blog/index.vue")
            },
            {
                path: "article/:id",
                name: "Article",
                component: () => import("@/views/Article/index.vue")
            },
            {
                path: "archive",
                name: "Archive",
                component: () => import("@/views/Archive/index.vue")
            },
            {
                path: "category/:id",
                name: "Category",
                component: () => import("@/views/Category/index.vue")
            },
            {
                path: "tag/:id",
                name: "Tag",
                component: () => import("@/views/Tag/index.vue")
            },
            {
                path: "links",
                name: "Links",
                component: () => import("@/views/Links/index.vue")
            },
            {
                path: "message",
                name: "Message",
                component: () => import("@/views/Message/index.vue")
            },
            {
                path: "about",
                name: "About",
                component: () => import("@/views/About/index.vue")
            },
            {
                path: "cv",
                name: "Cv",
                component: () => import("@/views/Cv/index.vue")
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;