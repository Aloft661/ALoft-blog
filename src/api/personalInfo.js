import request from "@/utils/request";

export function getPersonalInfo() {
    return request({
        url: "/blog/personalInfo",
        method: "GET"
    });
}