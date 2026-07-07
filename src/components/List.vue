<template>
    <div class="list-container">
        <div class="list-item" v-for="item in records" :key="item.id">
            <div class="list-img">
                <img :src="item.coverImage" alt="">
            </div>
            <div class="list-content">
                <div class="list-category">
                    <div class="type">
                        <i class="iconfont icon-folder"></i>
                        {{ item.categoryName }}
                    </div>
                    <div class="date">
                        {{ item.publishTime }}
                    </div>
                </div>
                <div class="list-title">
                    <h3>{{ item.title }}</h3>
                </div>
                <div class="list-desc">
                    <p>{{ item.summary }}</p>
                </div>
                <div class="list-data">
                    <div class="scan">
                        <i class="iconfont icon-eye"></i>
                        {{ item.viewCount }}
                    </div>
                    <div class="comment">
                        <i class="iconfont icon-pinglun"></i>
                        {{ item.commentCount }}
                    </div>
                    <div class="like">
                        <i class="iconfont icon-dianzan"></i>
                        {{ item.likeCount }}
                    </div>
                    <div class="word">
                        <i class="iconfont icon-guidang"></i>
                        {{ item.wordCount + " 字"  }}
                    </div>
                    <div class="time">
                        <i class="iconfont icon-time"></i>
                        {{ item.readingTime + " 分钟" }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";

    const props = defineProps({
        articles: {
            type: [Object, Array],
            default: () => ({})
        }
    });

    const records = computed(() => {
        if (Array.isArray(props.articles)) {
            return props.articles;
        }

        return props.articles?.records ?? [];
    });
</script>

<style scoped lang="scss">
    .list-container {
        width: 100%;
    }
    .list-item {
        background: var(--blog-card);
        display: flex;
        gap: 0;
        border-radius: 8px;
        border: 1px solid var(--blog-border);
        margin-bottom: 16px;
        overflow: hidden;
        cursor: pointer;
    }
    .list-img {
        flex-shrink: 0;
        width: 230px;
        min-height: 170px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform .3s;
        }
    }
    .list-content {
        flex: 1;
        min-width: 0;
        padding: 16px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        .list-category {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
            color: #909399;
            .type {
                color: #606266;
                font-weight: 500;
            }
        }
        .list-data {
            display: flex;
            gap: 14px;
            font-size: 12px;
            color: #909399;
            margin-top: auto;
        }
    }
    i {
        font-size: 12px;
        margin-right: 2px;
    }
</style>
