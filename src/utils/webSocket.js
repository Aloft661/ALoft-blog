let socket = null;

export function connectOnlineSocket(onMessage) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        return socket;
    }

    const protocol = location.protocol === "https:" ? "wss" : "ws";
    const url = `${protocol}://${location.host}/api/ws/online`;

    socket = new WebSocket(url);

    socket.onmessage = (e) => {
        onMessage?.(e.data);
    }

    socket.onerror = (err) => {
        console.error("online websocket error", err);
    }

    socket.onclose = () => {
        socket = null;
    }

    return socket;
}

export function closeOnlineSocket() {
    socket?.close();
    socket = null;
}