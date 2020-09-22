// 本地嵌入时⬇
// import Vue from 'vue'
// import Router from 'vue-router'

import Home from '../components/Home.vue'
import Content from '../components/Content.vue'

// export default new Router({ // ⬅本地嵌入时
export default new VueRouter({ // ⬅cdn方式引入时
    routes: [
        {
            path: '/',
            name: 'home', 
            component: Home,
        }
    ],
});

