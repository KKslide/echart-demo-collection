// import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './styles/main.moudle.less' // 引入自己的样式- vue-cli3/4的写法需要命名成.moudule的形式

// axios.defaults.baseURL = process.env.NODE_ENV == 'development'
//     ? 'http://127.0.0.1:8080'  // 开发
//     : 'http://134.175.129.219' // 生产
// const service = axios.create({
//     baseURL: process.env.NODE_ENV === 'development'
//         ? 'http://134.175.129.219' // 生产- 线上发布的时候- 腾讯云
//         : 'http://127.0.0.1:8080',  // 开发- 本地开发的时候..
//     timeout: 5000
// })

// 路由守卫
// import routerGuard from './router/routerGuard'
// router.beforeEach(routerGuard)

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UFT-8'
// service.interceptors.request.use( // 把默认的object类型请求转化为post
//     config => { // onFullfilled:
//         if (config === 'post') {
//             config.data = qs.stringify(config.data)
//         }
//     },
//     error => { // onRejected
//         console.log(error);
//         Promise.reject(error)
//     }
// )
// Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
