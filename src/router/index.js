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
                component: () => import("@/views/Blog/index.vue"),
                meta: {
                    banner: {
                        title: "Aloft",
                        desc: "四处逛逛，发现一些新的大陆——特别的想法、新的感触和一段不一样的经历"
                    }
                }
            },
            {
                path: "article/:id",
                name: "Article",
                component: () => import("@/views/Article/index.vue"),
            },
            {
                path: "archive",
                name: "Archive",
                component: () => import("@/views/Archive/index.vue"),
                meta: {
                    banner: {
                        title: "归档",
                        desc: "一路走来，记录下自己的经历、思考和总结"
                    }
                }
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
                component: () => import("@/views/Links/index.vue"),
                meta: {
                    banner: {
                        title: "友链",
                        desc: "分享自己的知识，与他人分享"
                    }
                }
            },
            {
                path: "message",
                name: "Message",
                component: () => import("@/views/Message/index.vue"),
                meta: {
                    banner: {
                        title: "留言",
                        desc: "既然来了，就说些什么吧"
                    }
                }
            },
            {
                path: "about",
                name: "About",
                component: () => import("@/views/About/index.vue"),
                meta: {
                    banner: {
                        title: "关于",
                        desc: "关于我和我的博客"
                    }
                }
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