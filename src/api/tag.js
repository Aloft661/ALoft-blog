import request from "@/utils/request";

export function getTags() {
    return request({
        url: "/blog/article/tag",
        method: "GET"
    });
}

export function getTagById(params) {
    return request({
        url: "/blog/article/tag",
        method: "GET",
        params
    });
}
