import request from "@/utils/request";

export function visitor(data) {
    return request({
        url: "/blog/visitor/record",
        method: "POST",
        data
    });
}