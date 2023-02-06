import axios, { AxiosPromise } from 'axios'
//引入axios实例类型
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
interface ResData<T> {
  result: T
}
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 8000,
})
let cancalMap = new Map()
console.log('-', '-')
//// 添加请求拦截器
service.interceptors.request.use((config) => {

  //发请求前可以做一些操作
  return config
}, (error) => {
  console.log(error, 'error')
  return Promise.reject(error);
})


//响应拦截器
service.interceptors.response.use((response) => {
  return response.data
}, (error) => {

  return Promise.reject(error)
})



//设置cancelToken
service.defaults.cancelToken = source.token;

export { service, source };
