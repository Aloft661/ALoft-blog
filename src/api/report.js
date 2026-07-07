import request from "@/utils/request";

export function getBlogReport() {
    return request({
        url: "/blog/report",
        method: "GET"
    });
}