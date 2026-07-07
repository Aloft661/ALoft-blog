import request from "@/utils/request";

export function getArchiveList() {
    return request({
        url: "/blog/article/archive",
        method: "GET"
    });
}
