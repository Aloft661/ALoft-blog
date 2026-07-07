import request from "@/utils/request";

export function getArticlePage(params) {
    return request({
        url: "/blog/article/page",
        method: "GET",
        params
    });
}

export function getArticleDetail(id) {
    return request({
        url: `/blog/article/${id}`,
        method: "GET",
    });
}