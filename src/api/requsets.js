import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const requests = axios.create({
  // 配置对象
  // 基础路径，发送请求时，路径会出现api
  baseURL: '/api',
  // 超时时间
  timeout: 5000
})

// 请求拦截器：在发送请求之前做些什么
requests.interceptors.request.use(config => {
  // if (store.state.detail.uuid_token) {
  //   config.headers.userTmpId = store.state.detail.uuid_token
  // }

  if (store.state.user.token) {
    config.headers.token = store.state.user.token
  }
  nprogress.start()
  return config
})

// 响应拦截器：在发送请求之后做些什么
requests.interceptors.response.use(
  response => {
    nprogress.done()
    return response.data
  },
  error => {
    // 响应失败时的回调函数
    return Promise.reject(new Error('请求失败'))
  }
)
export default requests
