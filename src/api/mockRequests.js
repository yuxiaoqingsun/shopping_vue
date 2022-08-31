import axios from 'axios'
import nprogress from 'nprogress'
// 引入进度条样式
import "nprogress/nprogress.css"
console.log(nprogress)
//requests是配置后的axios
const requests = axios.create({
    baseURL:'/mock',
    timeout:5000,
})

// 请求拦截器：在请求发送之前做一些事情
// config是一个配置对象，有个属性header请求头
requests.interceptors.request.use((config)=>{
    // 进度条开始
    nprogress.start()
    return config
})
// 响应拦截器:服务器相应数据回来后做一些事情
requests.interceptors.response.use((res)=>{
    // 进度条结束
    nprogress.done()
    return res.data
},(error)=>{
    // 终止Promise链
    return Promise.reject(new Error('fail'))
})

export default requests