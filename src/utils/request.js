//封装axios拦截器
import axios from "axios";
import { Message } from "element-ui";
import getUserTempId from "@utils/getUserTempId";
//引入进度条
import NProgress from "nprogress";
//引入样式
import "nprogress/nprogress.css";

const userTempId = getUserTempId();

const instance = axios.create({
  baseURL: "/api",  //设置公共的基础路径
  headers: {},
})

//设置请求拦截器,再发送请求之前可以发送一些公共参数，就不用再每个组件中发送了
instance.interceptors.request.use(
  (config) => {
    //config请求的配置对象
    //将来发送请求。（请求地址，参数，方式等）都会在config中找
    /* if (token) {
      config.headers.token = token;
    } */
    //进度条
    NProgress.start();
    //设置公共ID 的请求头
    config.headers.userTempId = userTempId;
    return config;
  }
);

// 设置响应拦截器
instance.interceptors.response.use(
  // 响应成功，响应状态码为2xx
  (response) => {
    // 响应成功，就代表请求结果有响应结果，但是不代表功能成功
    // API文档里面 code 成功是 200 失败是 201
    //这个拦截器的功能就是返回一个具体为成功还是失败的数据，先在这判断好，然后返回出去
    /*
      response的数据结构 ：
        {
          header:{},
          status:{},
          request:{},
          data:{
            code: 200
              message: "成功"
              data:{
              nickName:"Administrator",
              name:"Admin",
              token: 90aa16f24d04c7d882051412f9ec45b"
              }
              ok: true
          }
        }
     */
    // console.log("response ：", response);
    if (response.data.code === 200) {
      //进度条
      NProgress.done();
      //放回成功的相应数据
      return response.data.data;   //这里没有返回值，默认返回就是一个成功的promise
    };
    const { message } = response.data
    // 功能失败了 ：-->返回一个失败的promise
    NProgress.done();     //进度条
    Message.error(message); //错误弹窗提示
    return Promise.reject(message);
  },
  //响应失败：相依该状态吗不是2xx
  (err) => {
    NProgress.done();     //进度条
    // console.dir(err);
    const message = err.message || "网络错误";
    Message.error(message);//错误弹窗提示
    return Promise.reject(message);
  }
)
export default instance;
