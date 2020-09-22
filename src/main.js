// import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './styles/main.moudle.less' // 引入自己的样式- vue-cli3/4的写法需要命名成.moudule的形式

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
