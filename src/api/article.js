import requset from "@/utils/request";

export function getArticlePage(params) {
    return requset({
        url: "/blog/article/page",
        method: "GET",
        params
    });
}

export function getArticleDetail(id) {
    return requset({
        url: `/blog/article/${id}`,
        method: "GET",
    });
}