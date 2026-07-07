import { defineStore } from "pinia";
import { ref } from "vue";
import { getPersonalInfo } from "@/api/personalInfo";
import { getBlogReport } from "@/api/report";
import { getCategories } from "@/api/category";
import { getTags } from "@/api/tag";

export const useBlogStore = defineStore("blog", ()=> {
    const personalInfo = ref({});
    const report = ref({});
    const categories = ref([]);
    const tags = ref([]);
    const loader = ref(false);

    const init = async () => {
        if (loader.value) return;

        const [infoRes, reportRes, categoriesRes, tagsRes] = await Promise.all([
            getPersonalInfo(),
            getBlogReport(),
            getCategories(),
            getTags()
        ]);

        personalInfo.value = infoRes || {};
        report.value = reportRes || {};
        categories.value = categoriesRes || [];
        tags.value = tagsRes || [];
        loader.value = true;
    }

    const getCategoryIdBySlug = (slug) => {
        return categories.value.find(item => item.slug === slug)?.id || null;
    }

    const getTagIdBySlug = (slug) => {
        return tags.value.find(item => item.slug === slug)?.id || null;
    }

    return {
        personalInfo,
        report,
        categories,
        tags,
        loader,
        init,
        getCategoryIdBySlug,
        getTagIdBySlug
    };
});