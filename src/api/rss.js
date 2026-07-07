import request from "@/utils/request";

export function checkRss() {
    return request({
        url: "/blog/rssSubscription/check",
        method: "GET",
        headers: {
            "X-Visitor-Token": localStorage.getItem("visitorToken") || "",
            "X-Visitor-Fingerprint": localStorage.getItem("visitorFingerprint") || ""
        }
    });
}

export function addRss(data) {
    return request({
        url: "/blog/rssSubscription",
        method: "POST",
        data,
        headers: {
            "X-Visitor-Token": localStorage.getItem("visitorToken") || "",
            "X-Visitor-Fingerprint": localStorage.getItem("visitorFingerprint") || ""
        }
    });
}

export function cancelRss() {
    return request({
        url: "/blog/rssSubscription/unsubscribe",
        method: "PUT",
        headers: {
            "X-Visitor-Token": localStorage.getItem("visitorToken") || "",
            "X-Visitor-Fingerprint": localStorage.getItem("visitorFingerprint") || ""
        }
    })
}