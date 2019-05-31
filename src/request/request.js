import router from '@/router'
import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'

// axios配置
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // axios 基础地址
  withCredentials: true,
  timeout: 5000 // 请求超时时间
})
// response 拦截器------------------------------------------------------------
service.interceptors.response.use(
  response => {
    // 这里写所有请求完成后都要执行的操作

    return response
  },
  error => {
    return Promise.reject(error)
  }
)
//

// request 拦截器-------------------------------------------------------------
service.interceptors.request.use(
  config => {
    // 这里写所有请求之前都要执行的操作
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// ---------------------------------------------------------------------------
export default service
