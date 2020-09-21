<template>
  <div id="lineCom"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "lineCom",
  data() {
    return { chartEle: null };
  },
  methods: {
    getChart() {
      this.chartEle = echarts.init(document.getElementById("lineCom"));

      let option = (option = {
        title: {
          text: "基站退服预测历史记录",
          left: "center",
          top: "10px",
          textStyle: {
            color: "#000",
            fontSize: 18,
            fontWeight: "normal",
          },
        },
        legend: {
          bottom: 10,
          left: "center",
          data: ["香料香精", "粘度调节类", "防腐类", "防晒类", "防晒剂"],
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },

        xAxis: [
          {
            gridIndex: 0,
            show: false,
            type: "category",
            boundaryGap: false,
            data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
          },
          {
            gridIndex: 1,
            show: false,
            type: "category",
            boundaryGap: false,
            data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
          },
          {
            gridIndex: 2,
            show: false,
            type: "category",
            boundaryGap: false,
            data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
          },
          {
            gridIndex: 3,
            show: false,
            type: "category",
            boundaryGap: false,
            data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
          },
          {
            gridIndex: 4,
            type: "category",
            boundaryGap: false,
            data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
          },
        ],
        yAxis: [
          {
            gridIndex: 0,
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            splitNumber: 1,
            name: "AUC",
            nameLocation: "center",
            nameRotate: 360,
          },
          {
            gridIndex: 1,
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            splitNumber: 1,
            name: "精确率",
            nameLocation: "center",
            nameRotate: 360,
          },
          {
            gridIndex: 2,
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            splitNumber: 1,
            name: "召回率",
            nameLocation: "center",
            nameRotate: 360,
          },
          {
            gridIndex: 3,
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            splitNumber: 1,
            name: "预测警告",
            nameLocation: "center",
            nameRotate: 360,
          },
          {
            gridIndex: 4,
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            splitNumber: 1,
            name: "真实告警",
            nameLocation: "center",
            nameRotate: 360,
          },
        ],
        grid: [
          {
            top: "17%",
            height: "15%",
          },
          {
            top: "32%",
            height: "15%",
          },
          {
            top: "47%",
            height: "15%",
          },
          {
            top: "62%",
            height: "15%",
          },
          {
            bottom: "8%",
            height: "15%",
          },
        ],
        series: [
          {
            type: "line",
            data: [ 0, 41.1, 30.4, 65.1, 53.3, 53.3, 53.3, 41.1, 30.4, 65.1, 53.3, 41.1, 30.4, 65.1, 53.3, 53.3, 53.3, 41.1, 30.4, 65.1, 53.3, 0, ],
            xAxisIndex: 0,
            yAxisIndex: 0,
            smooth: true,
            areaStyle: {},
          },
          {
            type: "line",
            data: [
              0,
              74.1,
              67.2,
              79.5,
              46.4,
              46.4,
              46.4,
              74.1,
              67.2,
              79.5,
              46.4,
              74.1,
              67.2,
              79.5,
              46.4,
              46.4,
              46.4,
              74.1,
              67.2,
              79.5,
              46.4,
              0,
            ],
            xAxisIndex: 1,
            yAxisIndex: 1,
            smooth: true,
            areaStyle: {},
          },
          {
            type: "line",
            data: [
              0,
              24.1,
              7.2,
              15.5,
              42.4,
              42.4,
              42.4,
              24.1,
              7.2,
              15.5,
              42.4,
              24.1,
              7.2,
              15.5,
              42.4,
              42.4,
              42.4,
              24.1,
              7.2,
              15.5,
              42.4,
              0,
            ],
            xAxisIndex: 2,
            yAxisIndex: 2,
            smooth: true,
            areaStyle: {},
          },
          {
            type: "line",
            data: [
              0,
              74.1,
              67.2,
              79.5,
              46.4,
              46.4,
              46.4,
              74.1,
              67.2,
              79.5,
              46.4,
              74.1,
              67.2,
              79.5,
              46.4,
              46.4,
              46.4,
              74.1,
              67.2,
              79.5,
              46.4,
              0,
            ],
            xAxisIndex: 3,
            yAxisIndex: 3,
            smooth: true,
            areaStyle: {},
          },
          {
            type: "line",
            data: [
              0,
              74.1,
              67.2,
              79.5,
              46.4,
              46.4,
              46.4,
              74.1,
              67.2,
              79.5,
              46.4,
              74.1,
              67.2,
              79.5,
              46.4,
              46.4,
              46.4,
              74.1,
              67.2,
              79.5,
              46.4,
              0,
            ],
            xAxisIndex: 4,
            yAxisIndex: 4,
            smooth: true,
            areaStyle: {},
          },
        ],
      });

      this.chartEle.setOption(option);
    },
  },
  mounted() {
    this.getChart();
  },
  beforeDestroy() {
    this.chartEle.dispose();
  },
};
</script>

<style lang="less" scoped>
#lineCom {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>