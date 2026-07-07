<template>
    <div class="archive-page">
        <div class="archive-content">
            <div class="archive-left">
                <div class="content">
                    <slot name="header"></slot>
                    <slot name="content"></slot>
                </div>
            </div>
            <div class="archive-right">
                <UserCard />
            </div>
        </div>
    </div>
</template>

<script setup>
    import UserCard from "@/components/UserCard.vue";
</script>

<style scoped lang="scss">
    .archive-page {
        width: 100%;
        .archive-content {
            display: flex;
            gap: 24px;
            align-items: flex-start;
            .archive-left {
                flex: 1;
                min-width: 0;
                .content {
                    background: var(--blog-card);
                    border-radius: 8px;
                    box-shadow: 0 2px 12px #0000000a;
                    border: 1px solid var(--blog-border-light);
                    padding: 24px 28px;
                }
            }
            .archive-right {
                width: 280px;
                flex-shrink: 0;
                position: sticky;
                top: 74px;
            }
        }
    }
</style>
