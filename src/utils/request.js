/*
封装axios拦截器
 */
import axios from "axios";

const instance = axios.create({
  baseURL: "/api",//公共路径 /api表示当前服务器地址
  headers: {
    // token:"xxx" 登录接口不需要token
  },
});

// 设置请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  }
);
// 设置响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 200) {
      return res.data.data;
    }
    //功能失败 返回失败的promise
    return Promise.reject(res.data.message)
  },
  (err) => {
    console.log(err);
    // const message = err.message || "网络错误，请重试";
    // return Promise.reject(message);
  },
);
export default instance;
