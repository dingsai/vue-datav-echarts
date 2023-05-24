import Vue from 'vue';
import Axios from 'axios'
import Qs from 'qs'
let qs= Qs;
const http = Axios.create({
    baseURL:'',
    timeout:3000,
    transformRequest: [function (data) {
      // `transformRequest` 允许在向服务器发送前，修改请求数据
      // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法

      // return data
      // 必须要return不然console.log是undefine，而且network中也找不到
      // 但是return data：network中返回值是【object object】，所以需要用qs格式化一下
      // 所以需要return qs.stringify(data)

      return qs.stringify(data)
      // 此时network显示出的内容是
      // username: xiaoming
      // pass: 12345
      // 但是这种形式后台依旧无法识别，所以需要用到headers来自定义格式
    }],
    method:'get',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

//请求拦截器 对所有的axios请求做一个拦截
http.interceptors.request.use(
    config=>{
      // 在发送请求之前做些什么
      return config
    },
    error=>{
      // 对请求错误做些什么
      return Promise.reject(error)
    }
);
   
// 响应拦截器 对响应数据处理
http.interceptors.response.use(
    response=>{
      // 对响应数据做点什么
      if(response.status == 200){
        return response.data
      }
      return response
    },
    error=>{
      // 对响应错误做点什么
      return Promise.reject(error)
    }
)
export default http;