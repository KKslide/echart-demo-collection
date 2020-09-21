// 本地嵌入时⬇
// import Vue from 'vue'
// import Router from 'vue-router'

import Content from '../components/Content.vue'

// export default new Router({ // ⬅本地嵌入时
export default new VueRouter({ // ⬅cdn方式引入时
    routes: [
        {
            path: '/',
            name: 'bigscreen', // 大屏路由- 此处可修改
            component: Content,
        }
    ],
    // scrollBehavior(to, from, savedPosition) { // 每次路由跳转时,页面回到顶部
    //     return {
    //         x: 0,
    //         y: 0
    //     }
    // }
});

