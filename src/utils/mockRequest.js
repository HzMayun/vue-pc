// 封装axios拦截器  这个拦截器用来发送 mock请求，就baseURL: "/mock"改了一下
// ，其他不变
import axios from "axios";
import { Message } from "element-ui";
//引入进度条
import NProgress from "nprogress";
//引入样式
import "nprogress/nprogress.css";

const instance = axios.create({
  baseURL: "/mock",
});

//设置请求拦截器
instance.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  }
);
//设置拦截请求器
instance.interceptors.response.use(
  (response) => {
    // 进度条结束
    NProgress.done();
    if (response.data.code === 200) {
      return response.data.data;
    }
    const { message } = response.data;
    Message.error(message); //提示错误
    return Promise.reject(message);
  },
  (error) => {
    // 进度条结束
    NProgress.done();
    const message = error.message || "网络错误";
    Message.error(message); //提示错误
    return Promise.reject(message)
  }
)
export default instance;
