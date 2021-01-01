import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: '',
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        // console.log('请求成功');
        return config
    }, err => {
        // console.log('请求失败');
    })

    instance.interceptors.response.use(res => {
        // console.log('响应成功');
        return res.data
    }, err => {
        // console.log('响应失败');
    })

    return instance(config)
}
