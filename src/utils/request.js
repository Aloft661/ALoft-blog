import axios from "axios";

const request = axios.create({
    baseURL: "/api",
    timeout: 15000
});

request.interceptors.response.use(
    (response) => {
        const data = response.data;
        if (data?.code === 1) {
            return data.data;
        }

        return Promise.reject(data);
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default request;
