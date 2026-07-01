<template>
    <div class="public-layout">
        <header class="site-header">
            <div class="header-inner">
                <div class="header-left">
                    <router-link class="site-logo" to="/">ALoft's Blog</router-link>

                    <nav class="site-nav">
                        <router-link 
                            v-for="item in navItems" 
                            :key="item.path" 
                            :to="item.path" 
                            class="nav-link"
                        >
                            <i :class="`iconfont icon-${item.icon}`"></i>
                            {{ item.label }}
                        </router-link>
                    </nav>
                </div>
                <div class="header-right">
                    <button class="theme-toggle" title="">
                        <svg 
                            v-if="isDark"
                            viewBox="0 0 24 24"
                            width="17"
                            height="17"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" data-v-01a429ce="" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-01a429ce="" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-01a429ce=""></line>
                            <line x1="1" y1="12" x2="3" y2="12" data-v-01a429ce=""></line>
                            <line x1="21" y1="12" x2="23" y2="12" data-v-01a429ce=""></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-01a429ce=""></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-01a429ce=""></line>
                        </svg>
                        <svg 
                            v-else
                            viewBox="0 0 24 24"
                            width="17"
                            height="17"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                        </svg>
                    </button>
                    <div class="search-area">
                        <div class="search-box"></div>
                        <button title="搜索" class="iconfont icon-sousuo search-toggle"></button>
                    </div>
                </div>
            </div>
        </header>
        <Banner />

        <main class="site-main">
            <router-view />
        </main>

        <footer class="site-footer">
            ALoft Blog
        </footer>
    </div>
</template>

<script setup>
    import Banner from '../components/Banner.vue';

    const navItems = [
        { label: "首页", path: '/', icon: "zhuye" },
        { label: "博客", path: "/blog", icon: "boke" },
        { label: "归档", path: "/archive", icon: "guidang" },
        { label: "友链", path: "/links", icon: "lianjie" },
        { label: "留言", path: "/message", icon: "liuyan" },
        { label: "关于", path: "/about", icon: "guanyu" },
        { label: "简历", path: "/cv", icon: "subway" }
    ];
    const isDark = true;
</script>

<style scoped>
    .public-layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .site-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: transparent;
        border-bottom: none;
        transition: background .3s, box-shadow .3s;
    }
    .header-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 28px;
        height: 58px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 28px;
    }

    .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .theme-toggle {
        background: none;
        border: none;
        cursor: pointer;
        padding: 6px;
        color: rgba(255, 255, 255, 0.9);
        display: flex;
        align-items: center;
        transition: color 0.2s;
    }
    .search-area {
        display: flex;
        align-items: center;
    }
    .search-box {
        overflow: hidden;
        width: 0;
        transition: width 0.3s ease;
    }
    .search-toggle {
        background: none;
        border: none;
        cursor: pointer;
        padding: 6px;
        color: rgba(255, 255, 255, 0.9);
        display: flex;
        align-items: center;
        transition: color 0.2s;
        font-size: 16px;
    }

    .site-logo {
        font-family: var(--blog-serif);
        font-size: 18px;
        font-weight: 800;
        color: #fff;
        text-decoration: none;
        letter-spacing: 0.5px;
        white-space: nowrap;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        transition: color 0.3s, text-shadow 0.3s;
    }

    .site-nav {
        display: flex;
        align-items: center;
        gap: 2px;
    }

    .nav-link {
        color: rgba(255, 255, 255, .9);
        font-size: 13px;
        text-decoration: none;
        padding: 6px 10px;
        border-radius: 4px;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        text-shadow: 0 1px 3px rgba(0, 0, 0, .2);
        transition: color .2s, background .2s, text-shadow .3s;
    }
    .nav-link:hover {
        color: #fff;
        background: rgba(255, 255, 255, .15);
    }

    .nav-link.router-link-active {
        color: rgba(255, 255, 255, .9);
    }

    .site-main {
        flex: 1;
        width: 100%;
    }

    .site-footer {
        padding: 24px 32px;
        border-top: 1px solid #e5e7eb;
        color: #6b7280;
        text-align: center;
    }
</style>