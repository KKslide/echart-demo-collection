// 本地嵌入时⬇
// import Vue from 'vue'
// import Router from 'vue-router'

import Home from '../components/Home.vue'

import MapCom from '../components/MapCom.vue'
import map01 from '../components/mapCom/Map01.vue'

export default new VueRouter({ // ⬅cdn方式引入时
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        // 地图类型
        {
            path: "/map",
            name: "map",
            component: MapCom,
            children: [
                {
                    path: "/item",
                    name: "map_item",
                    component: map01
                }
            ]
        }
    ],
});

