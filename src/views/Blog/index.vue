<template>
    <section class="blog-container">
        <h1>博客</h1>
    </section>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import { getArticlePage } from "@/api/article";

    const articles = ref([]);
    
    const fetchAricles = async () => {
        try {
            const data = await getArticlePage({
                page: 1,
                pageSize: 10
            });
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    }

    onMounted(() => {
        fetchAricles();
    });
</script>

<style scoped>
    .blog-container {
        max-width: 1080px;
        margin: 0 auto;
        padding: 48px 24px;
    }
</style>