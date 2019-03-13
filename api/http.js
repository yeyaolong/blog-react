import axios from 'axios';
import qs from 'qs';

// 创建axios实例
const Axios = axios.create();

Axios.defaults.timeout = 5000; // 超时时间
Axios.defaults.headers.post['X-Request-With'] = 'XMLHttpRequest';
Axios.defaults.headers.get['X-Request-With'] = 'XMLHttpRequest';
Axios.defaults.responseType = 'json';


// POST等传参序列化(添加请求拦截器)
Axios.interceptors.request.use(config => {
    // 在发送请求前做某事
    if (config.method === "post" || config.method === "put" || config.method === "delete") {
        // 序列化
        config.data = qs.stringify(config.data);
    }

    return config;
}, error => {
    // 报错处理
    console.log(error);
});

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(res => {
    let resData = res.data
    if (resData.code === 200) {
        return res
    }
    if (resData.code === 500) {
        // 异常处理
        // ...
        return Promise.reject(res)
    }
    return Promise.reject(res)
}, error => {
    return Promise.reject(error)
});

export default Axios
