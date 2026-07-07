<template>
    <div class="banner" :style="{ backgroundImage: `url(${bgImage})` }">
        <div class="overlay"></div>
        <div class="fade"></div>
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <p class="desc">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
    import bgcImg from "@/assets/images/bgc.webp";
    import { computed } from "vue";

    const props = defineProps({
        // 文章封面
        coverImage: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: ""
        },
        desc: {
            type: String,
            default: ""
        }
    });

    const bgImage = computed(() => {
        if (props.coverImage) {
            return props.coverImage;
        }
        return bgcImg
    });

    const title = computed(() => {
        if (props.title) {
            return props.title;
        }
        return "ALoft";
    })
</script>

<style scoped>
    .banner {
        position: relative;
        width: 100%;
        height: 40vh;
        min-height: 280px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .overlay {
        position: absolute;
        inset: 0;
        background: #00000059;
        z-index: 1;
    }
    .fade {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 80px;
        background: linear-gradient(to bottom, transparent, var(--blog-bg));
        z-index: 2;
        pointer-events: none;
    }
    .content {
        position: relative;
        z-index: 3;
        color: #fff;
        text-align: center;
        padding: 0 24px;
        max-width: 600px;
    }
    .title {
        font-family: var(--blog-serif);
        font-size: 30px;
        font-weight: 800;
        margin: 0 0 10px;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        line-height: 1.35;
    }
    .desc {
        font-size: 14px;
        margin: 0;
        opacity: .85;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 4px 5px;
    }
</style>