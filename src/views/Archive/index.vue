<template>
    <section class="archive-container">
        <ArchiveCard>
            <template #header>
                <div class="content-header">
                    <i class="iconfont icon-guidang"></i>
                    <span>共 {{ total }} 篇文章</span>
                </div>
            </template>

            <template #content>
                <div class="timeline">
                    <div class="year-group" v-for="yearGroup in archiveList" :key="yearGroup.year">
                        <h2 class="year-label">
                            <span class="year-dot"></span>
                            {{ yearGroup.year }} 年
                        </h2>
                        <div class="month-group" v-for="monthGroup in yearGroup.months"
                            :key="`${yearGroup.year} - ${monthGroup.month}`">
                            <div class="month-label">{{ monthGroup.month }} 月</div>
                            <ul class="year-list">
                                <li class="archive-item" v-for="article in monthGroup.articles" :key="article.id">
                                    <span class="item-dot"></span>
                                    <span class="item-date">{{ article.publishTime }}</span>
                                    <span class="item-title">{{ article.title }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </template>
        </ArchiveCard>
    </section>
</template>

<script setup>
    import ArchiveCard from "@/components/ArchiveCard.vue";

    import { getArchiveList } from "@/api/archive";
    import { onMounted, ref } from "vue";

    const total = ref(0);
    const archiveList = ref([]);

    const formatArchive = (list) => {
        const yearMap = new Map();

        list.forEach(item => {
            if (!yearMap.has(item.year)) {
                yearMap.set(item.year, {
                    year: item.year,
                    months: []
                });
            }

            yearMap.get(item.year).months.push({
                month: item.month,
                articles: item.articles ?? []
            });
        });
        return Array.from(yearMap.values()).sort((a, b) => b.year - a.year);
    }
    const fetchArchiveList = async () => {
        try {
            const data = await getArchiveList();

            total.value = data.reduce((sum, item) => {
                return sum + (item.articles?.length ?? 0);
            }, 0);
            archiveList.value = formatArchive(data);
        } catch (e) {
            console.log(e);
        }
    }

    onMounted(() => {
        fetchArchiveList();
    });
</script>

<style scoped lang="scss">
    .archive-container {
        width: 1200px;
        margin: 0 auto;
        padding: 32px 28px;

        .content-header {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--blog-text3);
            margin-bottom: 20px;
            padding-bottom: 14px;
            border-bottom: 1px solid var(--blog-border-light);
        }

        .timeline {
            position: relative;
            padding-left: 20px;
            border-left: 2px solid var(--blog-border-light);

            .year-label {
                font-family: var(--blog-serif);
                font-size: 20px;
                font-weight: 700;
                color: var(--blog-text);
                margin: 0 0 12px;
                display: flex;
                align-items: center;
                gap: 8px;
                position: relative;

                .year-dot {
                    position: absolute;
                    left: -27px;
                    width: 12px;
                    height: 12px;
                    background: var(--blog-border-light);
                    border-radius: 50%;
                    border: 2px solid var(--blog-card);
                }
            }

            .year-list {
                list-style: none;
                padding: 0;
                margin: 0;

                .archive-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    position: relative;
                    transition: background .15s;
                    border-radius: 6px;
                    padding: 8px 0 8px 4px;

                    .item-dot {
                        position: absolute;
                        left: -24px;
                        width: 6px;
                        height: 6px;
                        background: var(--blog-text);
                        border-radius: 50%;
                    }

                    .item-date {
                        flex-shrink: 0;
                        font-size: 13px;
                        color: var(--blog-text2);
                        font-family: var(--blog-serif);
                        font-variant-numeric: tabular-nums;
                        min-width: 48px;
                    }

                    .item-title {
                        font-size: 14px;
                        color: var(--blog-text2);
                        transition: color .15s;
                    }
                }
            }
            .year-group:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>
