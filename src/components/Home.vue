<template>
  <div id="main">
    <el-container>
      <el-header>Some Customed Design Base on Echarts.js</el-header>
      <el-main>
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="地图类" name="1">
            <div>
              <!-- <router-link>1. 定时跳动的悬浮ToolTip框框</router-link> -->
              <a href="">1. 定时跳动的悬浮ToolTip框框</a>
            </div>
            <div>
              <!-- <router-link>2. 银行领导们超喜欢看的路线动态图- - (内心OS:你觉得够炫够酷就好)</router-link> -->
              <a href="">2. 银行领导们超喜欢看的路线动态图- - (内心OS:你觉得够炫够酷就好)</a>
            </div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
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
#main{
    .el-collapse-item__content{
        text-align: left;
        margin-left: 3em;
    }
}
</style>