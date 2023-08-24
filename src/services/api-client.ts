import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T>{
    count: number;
    next: string | null;
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e9b98d8bf4124cc69a1a8943262210d1'
    }
})

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data)
    }
}

export default APIClient;