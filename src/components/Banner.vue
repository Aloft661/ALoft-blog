<template>
    <div class="banner" :style="{ backgroundImage: `url(${bgImage})` }">
        <div class="overlay"></div>
        <div class="fade"></div>
        <div class="content">
            <h1 class="title"></h1>
            <p class="desc">四处逛逛，发现一些新的大陆——特别的想法、新的感触和一段不一样的经历</p>
        </div>
    </div>
</template>

<script setup>
    import bgcImg from "@/assets/images/bgc.webp";

    import { computed } from "vue";
    import { useRoute } from "vue-router";

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
        meta: {
            type: String,
            default: ""
        }
    });

    const bgImage = computed(() => {
        if (props.coverImage) {
            return props.coverImage;
        }
        return bgcImg
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
        background: rgba(0, 0, 0, .35);
        z-index: 1;
    }
    .fade {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 80px;
        background: linear-gradient(to bottom, transparent, #181818);
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
        font-size: 34px;
        font-weight: 800;
        margin: 0 0 10px;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        letter-spacing: 1px;
    }
    .desc {
        font-size: 16px;
        margin: 0;
        opacity: .9;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        line-height: 1.6;
    }
</style>