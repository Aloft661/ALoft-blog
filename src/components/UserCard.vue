<template>
    <div class="userCard-container">
        <div class="userinfo side-card">
            <div class="avatar">
                <img :src="personalInfo.avatar" alt="">
            </div>
            <h3 class="name">{{ personalInfo.nickname }}</h3>
            <p class="tag">{{ personalInfo.tag }}</p>
            <p class="location">
                <i class="iconfont icon-position"></i>
                {{ personalInfo.location }}
            </p>
            <div class="info-stats">
                <div class="stat">
                    <span class="num">{{ report.articleTotalCount }}</span>
                    <span class="label">文章</span>
                </div>
                <div class="stat">
                    <span class="num">{{ report.categoryTotalCount }}</span>
                    <span class="label">分类</span>
                </div>
                <div class="stat">
                    <span class="num">{{ report.tagTotalCount }}</span>
                    <span class="label">标签</span>
                </div>
            </div>
            <div class="social">
                <a :href="personalInfo.github" class="social-link">
                    <svg 
                        data-v-e85d4d4a="" 
                        viewBox="0 0 24 24" 
                        width="18" 
                        height="18" 
                        fill="currentColor"
                    >
                        <path 
                            data-v-e85d4d4a="" 
                            d="M12 .3a12 12 0 00-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.33 3.3 1.23a11.5 11.5 0 016.02 0c2.28-1.56 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18a4.65 4.65 0 011.23 3.22c0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22l-.01 3.29c0 .31.22.69.83.57A12 12 0 0012 .3"
                        >
                        </path>
                    </svg>
                </a>
                <a :href="personalInfo.email" class="social-link">
                    <svg 
                        data-v-e85d4d4a="" 
                        viewBox="0 0 24 24" 
                        width="18" 
                        height="18" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2"
                    >
                        <rect 
                            data-v-e85d4d4a="" 
                            width="20" 
                            height="16" 
                            x="2" 
                            y="4" 
                            rx="2"
                        >
                        </rect>
                        <path 
                            data-v-e85d4d4a="" 
                            d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"
                        >
                        </path>
                    </svg>
                </a>
                <span class="social-link">
                    <i class="iconfont icon-rssdingyue" style="font-size: 18px;"></i>
                </span>
            </div>
        </div>
        <div class="userCard-bottom side-card">
            <h4 class="title">
                <i class="iconfont icon-eye"></i>
                站点统计
            </h4>
            <div class="grid">
                <div class="stat-item">
                    <span class="stat-label">在线访客</span>
                    <span class="stat-num">{{ onlineCount }}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">今日浏览</span>
                    <span class="stat-num">{{ report.viewTodayCount }}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">总浏览量</span>
                    <span class="stat-num">{{ report.viewTotalCount }}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">总访客量</span>
                    <span class="stat-num">{{ report.visitorTotalCount }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, onUnmounted, ref } from "vue";
    import { useBlogStore } from "@/stores/blog";
    import { storeToRefs } from "pinia";
    import { connectOnlineSocket, closeOnlineSocket } from "@/utils/webSocket";

    const blogStore = useBlogStore();
    const { personalInfo, report, categories, tags } = storeToRefs(blogStore);
    const onlineCount = ref(0);

    onMounted(() => {
        connectOnlineSocket((msg) => {
            try {
                const data = JSON.parse(msg);
                onlineCount.value = data;
            } catch (e) {
                onlineCount.value = Number(msg) || 0;
            }
        });
    });
    onUnmounted(() => {
        closeOnlineSocket();
    })
</script>

<style scoped lang="scss">
    .side-card {
        background: var(--blog-card);
        border-radius: 8px;
        box-shadow: 0 2px 12px #0000000a;
        padding: 20px;
        margin-bottom: 16px;
    }

    .userCard-container {
        width: 100%;
    }
    .userinfo {
        text-align: center;
        .avatar {
            img {
                width: 90px;
                height: 90px;
                border-radius: 50%;
                object-fit: cover;
                border: 3px solid var(--blog-border);
                box-shadow: 0 2px 8px #0000000f;
            }
        }
        .name {
            font-size: 17px;
            font-weight: 700;
            margin: 0 0 4px;
            color: var(--blog-text);
        }
        .tag {
            font-size: 12px;
            color: var(--blog-text3);
            margin: 0 0 6px;
        }
        .location {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3px;
            font-size: 12px;
            color: var(--blog-text3);
            margin: 0 0 14px;
        }
        .info-stats {
            display: flex;
            justify-content: center;
            gap: 0;
            padding: 12px 0;
            margin: 0 -20px;
            .stat {
                flex: 1;
                text-align: center;
                cursor: pointer;
                transition: background .15s;
                padding: 4px 0;
                border-radius: 4px;
                .num {
                    display: block;
                    font-size: 18px;
                    font-weight: 700;
                    color: var(--blog-text);
                }
                .label {
                    font-size: 11px;
                    color: var(--blog-text3);
                    text-transform: uppercase;
                    letter-spacing: .5px;
                }
            }
        }
        .social {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: 14px;
            .social-link {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                border: none;
                color: var(--blog-text2);
                cursor: pointer;
                background: none;
                transition: color .15s background .15s;
            }
        }
    }
    .userCard-bottom {
        .title {
            font-size: 14px;
            font-weight: 700;
            color: var(--blog-text);
            margin: 0 0 12px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .grid {
            display: flex;
            flex-direction: column;
            gap: 8px;
            .stat-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 13px;
                color: var(--blog-text2);
                .stat-label {
                    flex: 1;
                }
                .stat-num {
                    font-weight: 600;
                    color: var(--blog-text);
                }
            }
        }
    }
</style>