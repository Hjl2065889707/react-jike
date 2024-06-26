import axios from 'axios'

//1.根域名配置
//2.超时时间配置
const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})

// 添加请求拦截器-请求发送之前进行拦截，可以对请求进行处理
request.interceptors.request.use((config)=> {
    return config
}, (error)=> {
    return Promise.reject(error)
})

// 添加响应拦截器-在响应返回客户端之前进行拦截，可以对响应进行处理
request.interceptors.response.use((response)=> {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
}, (error)=> {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
})

export { request }