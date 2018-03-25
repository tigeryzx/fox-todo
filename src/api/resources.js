import axios from 'axios'
import apiConfig from './config'
import { Loading } from 'element-ui'

// http://blog.csdn.net/fantian001/article/details/70193938?locationNum=5&fps=1

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const ResourceStore = axios.create({
    baseURL: apiConfig.baseApiUrl,
    timeout: 5000
})

var loadingInstance = null;

//添加一个请求拦截器
ResourceStore.interceptors.request.use(function (config) {
    //在请求发送之前做一些事
    loadingInstance = Loading.service({
        fullscreen: true,
        text: '系统处理中...'
    });
    return config;
}, function (error) {
    //当出现请求错误时做一些事
    return Promise.reject(error);
});

//添加一个返回拦截器
ResourceStore.interceptors.response.use(function (response) {
    loadingInstance.close();
    //对返回的数据进行一些处理
    return response;
}, function (error) {
    return Promise.reject(error);
});

ResourceStore.getApi = function (url, payload) {
    url = apiConfig.baseApiUrl + url;
    return ResourceStore.get(url, payload);
};

export default ResourceStore