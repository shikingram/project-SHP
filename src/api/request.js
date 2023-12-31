// 对axios进行二次封装

import axios from 'axios'

// 进度条
import nprogress from 'nprogress'
// 进度条样式
import "nprogress/nprogress.css"

const requests = axios.create({
    baseURL:"api",
    timeout:5000,
})

// 请求拦截器
requests.interceptors.request.use((config)=>{
    nprogress.start()
    return config;
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data
},(err)=>{
    return Promise.reject(new Error('faile'))
})

export default requests;