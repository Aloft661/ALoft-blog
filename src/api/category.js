import request from "@/utils/request";

export function getCategories() {
    return request({
        url: "/blog/articleCategory",
        method: "GET"
    });
}