import axios from "axios";

const requset = axios.create({
    baseURL: "/api",
    timeout: 15000
});

requset.interceptors.response.use(
    (response) => {
        const data = response.data;
        if (data?.code === 1) {
            return data.data;
        }

        return Promise.reject(data);
    },
    (error) => {
        Promise.reject(error);
    }
);

export default requset;