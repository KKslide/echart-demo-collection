<template>
  <div>
    <el-divider>基站退服预测系统</el-divider>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>广州市</el-breadcrumb-item>
    </el-breadcrumb>
    <el-container id="fxxxxxxk" direction="vertical" style="height:85vh;margin:15px;">
      <el-row style="height:42.5vh;margin-bottom:10px">
        <el-col :span="8" style="height:21.25vh;">
          <el-form style="height:21.25vh;background-color:#fff;padding:0px 10px 8px 10px;margin:0 5px;" label-position="left" label-width="80px">
            <el-form-item class="form_date">
				<div class="form_date_content" v-html="currentTime"></div>
			</el-form-item>
            <el-form-item label="时间范围">
              <el-select v-model="pickedTime" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in timeRange"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="模型名称">
              <el-select v-model="pickedModel" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in modelList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="基站类型">
              <el-select v-model="pickedBaseStation" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in baseStationList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="厂商" v-if="true">
              <el-select v-model="pickedCompany" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in companyList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-col :span="8" style="height:21.25vh;width:50%; padding:8px 5px 0px 5px;">
            <div class="normal_part">
              <div class="normal_part_title">平均提前预测重要警告时间</div>
              <div class="normal_part_data">
                24
                <span>小时</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8" style="height:21.25vh;width:50%; padding:8px 5px 0px 5px;">
            <div class="normal_part">
              <div class="normal_part_title">精确率</div>
              <div class="normal_part_data blue">
                20%
                <span>⬆</span>
              </div>
            </div>
          </el-col>
        </el-col>

        <el-col :span="9" style="height:100%">
          <map-com></map-com>
        </el-col>
        <el-col :span="7" style="height:100%">
          <div class="normal_part city_table">
            <div class="city_table_title">城市详情列表</div>
            <div class="city_table_list">
              <el-table :data="cityList" height="33vh" border style="width: 100%">
                <el-table-column prop="name" label="城市"></el-table-column>
                <el-table-column prop="value" label="精准率"></el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- ********************************************************************* -->
      <el-row style="height:42.5vh">
        <el-col :span="8" style="height:100%">
          <el-col :span="8" style="height:21vh;width:50%; padding:5px">
            <div class="normal_part">
              <div class="normal_part_title">预测重要告警数</div>
              <div class="normal_part_data">18</div>
            </div>
          </el-col>
          <el-col :span="8" style="height:21vh;width:50%; padding:5px">
            <div class="normal_part">
              <div class="normal_part_title">真实重要告警数</div>
              <div class="normal_part_data">15</div>
            </div>
          </el-col>
          <el-col :span="8" style="height:21vh;width:50%; padding:5px">
            <div class="normal_part">
              <div class="normal_part_title">召回率</div>
              <div class="normal_part_data">
                15
                <span>%</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8" style="height:21vh;width:50%; padding:5px">
            <div class="normal_part">
              <div class="normal_part_title">AUC</div>
              <div class="normal_part_data">0.91</div>
            </div>
          </el-col>
        </el-col>
        <el-col :span="16" style="height:100%;padding:5px 0 5px 5px">
          <line-com></line-com>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import { dateFormat } from "../utils/timeUtil"; // 时间格式化
import mapCom from "./mapCom/Map"; // 引入地图echart组件
import lineCom from "./mapCom/Line"; // 引入地图echart组件
export default {
  name: "fucking_big_screen",
  data() {
    return {
      currentTime: dateFormat("YYYY-MM-DD hh:mm", new Date()),
      timeRange: [
        { label: "最近30天", value: "30" },
        { label: "最近20天", value: "20" },
        { label: "最近10天", value: "10" },
        { label: "最近5天", value: "5" },
        { label: "最近1天", value: "1" },
      ],
      pickedTime: "30",
      modelList: [
        { label: "模型AAA", value: "a" },
        { label: "模型BBB", value: "b" },
        { label: "模型CCC", value: "c" },
      ],
      pickedModel: "a",
      baseStationList: [
        { label: "5G", value: "5G" },
        { label: "4G", value: "4G" },
        { label: "3G", value: "3G" },
      ],
      pickedBaseStation: "5G",
      companyList: [
        { label: "华为", value: "huawei" },
        { label: "AT&T", value: "AT&T" },
      ],
      pickedCompany: "huawei",
      cityList: [
        { name: "凉山", value: "20%" },
        { name: "泸州", value: "20%" },
        { name: "攀枝花", value: "20%" },
        { name: "雅安", value: "20%" },
        { name: "乐山", value: "20%" },
        { name: "乐山", value: "20%" },
        { name: "乐山", value: "20%" },
      ],
    };
  },
  components: {
    "map-com": mapCom,
    "line-com": lineCom,
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
#fxxxxxxk {
  .normal_part {
    background-color: #fff;
    height: 100%;
    text-align: center;
    position: relative;
    .normal_part_title {
      width: 100%;
      font-size: 15px;
      position: absolute;
      top: 15%;
      left: 50%;
      transform: translateX(-50%);
    }
    .normal_part_data {
      color: #479c96;
      position: absolute;
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, 20%);
      font-size: 35px;
      span {
        color: #8c8c8c;
        font-size: 18px;
      }
    }
    .normal_part_data.blue {
      color: #6490f2;
      span {
        color: inherit;
      }
    }
  }
  .normal_part.city_table {
    padding: 0 10px;
    background-color: #fff;
    .city_table_title {
      text-align: left;
      padding: 20px 0;
    }
    .city_table_list {
    }
  }
}
</style>