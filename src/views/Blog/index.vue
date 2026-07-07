<template>
    <section class="blog-container">
        <div class="blog-content">
            <div class="blog-left">
                <List :articles="articles" />
            </div>
            <div class="blog-right">
                <UserCard />
            </div>
        </div>
    </section>
</template>

<script setup>
    import List from "@/components/List.vue";
    import UserCard from "@/components/UserCard.vue";

    import { onMounted, ref } from "vue";
    import { getArticlePage } from "@/api/article";

    const articles = ref({});
    
    const fetchAricles = async () => {
        try {
            const data = await getArticlePage({
                page: 1,
                pageSize: 10
            });
            articles.value = data;
        } catch (e) {
            console.log(e);
        }
    }

    onMounted(() => {
        fetchAricles();
    });
</script>

<style scoped lang="scss">
    .blog-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 32px 28px;
    }
    .blog-content {
        display: flex;
        align-items: flex-start;
        width: 100%;
        gap: 24px;
        .blog-left {
            flex: 1;
            min-width: 0;
        }
        .blog-right {
            width: 280px;
            flex-shrink: 0;
            position: sticky;
            top: 74px;
        }
    }
</style>