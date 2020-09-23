<template>
    <div id="main">
        <el-container>
            <el-header>Some Customed Design Base on Echarts.js</el-header>
            <el-main>
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="地图类" name="1">
                        <div>
                            <router-link :to="{name:'map_item'}">1. 定时跳动的悬浮ToolTip框框</router-link>
                        </div>
                        <div>
                            <router-link :to="{name:'map_item'}">2. 常规中国地图- 显示各个省份</router-link>
                        </div>
                        <div>
                            <router-link :to="{name:'map_item'}">3. 银行领导们超喜欢看的路线动态图- - (我OS:你觉得够炫够酷就好)</router-link>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="线图和柱图" name="2">
                        <div><a href="">1. 一直滚啊滚啊的线图</a></div>
                        <div><a href="">2. 线性图+柱状图的组合</a></div>
                        <div><a href="">3. 三维立体的柱状图</a></div>
                        <div><a href="https://gallery.echartsjs.com/editor.html?c=xdWfZIwsNU">4. 地图上的柱状图</a></div>
                        <div><a href="">5. 正极和负极的柱状图(线图也是一样)</a></div>
                    </el-collapse-item>
                    <el-collapse-item title="饼图" name="3">
                        <div><a href="">1. 玫瑰饼图</a></div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4" v-if="false">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                </el-collapse>
            </el-main>
            <el-footer>Created By Lykang</el-footer>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: "1",
        };
    },
};
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
    min-height: calc(100vh - 120px);
}
#main {
    .el-collapse-item__content {
        text-align: left;
        margin-left: 3em;
    }
}
</style>