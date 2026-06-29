<template>
    <div class="public-layout">
        <header class="site-header">
            <router-link class="site-logo" to="/">ALoft Blog</router-link>

            <nav class="site-nav">
                <router-link
                    v-for="item in navItems"
                    :key="item.path"
                    :to="item.path"
                    class="nav-link"
                >
                    {{ item.label }}
                </router-link>
            </nav>
        </header>

        <main class="site-main">
            <router-view />
        </main>

        <footer class="site-footer">
            ALoft Blog
        </footer>
    </div>
</template>

<script setup>
    const navItems = [
        { label: "首页", path: '/' },
        { label: "博客", path: "/blog" },
        { label: "归档", path: "/archive" },
        { label: "友链", path: "/links" },
        { label: "留言", path: "/message" },
        { label: "关于", path: "/about" },
        { label: "简历", path: "/cv" }
    ];
</script>

<style scoped>
    .public-layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .site-header {
        height: 64px;
        padding: 0 32px;
        border-bottom: 1px solid #e5e7eb;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .site-logo {
        color: #111827;
        font-size: 18px;
        font-weight: 700;
        text-decoration: none;
    }

    .site-nav {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .nav-link {
        color: #4b5563;
        text-decoration: none;
        font-size: 14px;
    }
    .nav-link.router-link-active {
        color: #111827;
        font-weight: 600;
    }

    .site-main {
        flex: 1;
    }

    .site-footer {
        padding: 24px 32px;
        border-top: 1px solid #e5e7eb;
        color: #6b7280;
        text-align: center;
    }
</style>