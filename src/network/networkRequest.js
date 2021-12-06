import axios from 'axios'
import { API_URL } from '../config/config'

export function request(url,data,method='POST',params) {
    return axios({
        method: method,
        url: API_URL+ url,
        data: data,
        params: params,
    }) 

}

