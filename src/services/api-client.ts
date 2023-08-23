import axios from "axios"

export interface FetchResponse<T>{
    count: number;
    results: T[] 
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e9b98d8bf4124cc69a1a8943262210d1'
    }
})