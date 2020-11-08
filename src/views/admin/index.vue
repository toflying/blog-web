<template>
  <div class="overview">
    <!-- <div>概览</div> -->
    <!-- 时间 -->
    <div class="time_line">
      <ul>
        <li
          :class="[isActive == index ? 'time_active' : '']"
          v-for="(item, index) in timeArr"
          :key="index"
          @click="getTime(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- 业务统计 -->
    <el-card class="box-card">
      <div class="business">
        <span>业务统计</span>
      </div>
      <div class="business_content">
        <ul>
          <li>
            <span>11</span>
            <span>需求量</span>
          </li>
          <li>
            <span>122</span>
            <span>订单量</span>
          </li>
          <li>
            <span>33%</span>
            <span>订单转化率</span>
          </li>
          <li>
            <span>44</span>
            <span>交易总额</span>
          </li>
          <li>
            <span>33</span>
            <span>合作方应得</span>
          </li>
          <li>
            <span>22</span>
            <span>毛利</span>
          </li>
        </ul>
      </div>
    </el-card>
    <!-- 折线图展示区域 -->
    <el-card>
      <div id="myChart1" style="width: 100%; height: 400px"></div>
    </el-card>
    <!-- 柱形图 和 map地图 展示区域 -->
    <el-row>
      <el-col :span="12">
        <el-card>
          <div id="myChart2" style="width: 100%; height: 400px"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div id="myChart3" style="width: 100%; height: 400px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts";
import "../../../node_modules/echarts/map/js/china";
import moment from "moment";
export default {
  data() {
    return {
      isActive: 0,
      startTime: moment().format("YYYY-MM-DD"),
      entTime: moment().format("YYYY-MM-DD"),
      timeArr: ["当天", "当月", "当年", "全部"],
    };
  },
  created() {},
  mounted() {
    this.qushiChart();
    this.barChart();
    this.mapChart();
  },
  methods: {
    getTime(index) {
      console.log(index);
      switch (index) {
        case 0: //当天
          this.isActive = 0;
          this.startTime = moment().format("YYYY-MM-DD");
          this.entTime = moment().format("YYYY-MM-DD");
          console.log("开始时间", this.startTime);
          console.log("结束时间", this.entTime);
          break;
        case 1: //当月
          this.isActive = 1;
          this.startTime =
            moment().year() + "-" + (moment().month() + 1) + "-" + "01";
          this.entTime = moment().format("YYYY-MM-DD");
          console.log("开始时间", this.startTime);
          console.log("结束时间", this.entTime);
          break;
        case 2: //当年
          this.isActive = 2;
          this.startTime = moment().year() + "-" + "01" + "-" + "01";
          this.entTime = moment().format("YYYY-MM-DD");
          console.log("开始时间", this.startTime);
          console.log("结束时间", this.entTime);
          break;
        case 3: //全部
          this.isActive = 3;
          this.startTime = "";
          this.entTime = "";
          console.log("开始时间", this.startTime);
          console.log("结束时间", this.entTime);
          break;
        default:
          break;
      }
    },
    qushiChart() {
      var myChart = echarts.init(document.getElementById("myChart1"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "趋势分析",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["订单", "需求"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "订单",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "需求",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    barChart() {
      var myChart = echarts.init(document.getElementById("myChart2"));
      var option = {
        color: ["#3398DB"],
        title: {
          text: "产品销售分部",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "ICP",
              "代理记账",
              "公司注册",
              "园区注册",
              "刻章服务",
              "税控申请",
            ],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 520, 330],
          },
        ],
      };

      myChart.setOption(option);
    },
    mapChart() {
      var myChart = echarts.init(document.getElementById("myChart3"));
      window.dataList = [
        {
          name: "南海诸岛",
          value: 0,
        },
        {
          name: "北京",
          value: 54,
        },
        {
          name: "天津",
          value: 13,
        },
        {
          name: "上海",
          value: 40,
        },
        {
          name: "重庆",
          value: 75,
        },
        {
          name: "河北",
          value: 13,
        },
        {
          name: "河南",
          value: 83,
        },
        {
          name: "云南",
          value: 11,
        },
        {
          name: "辽宁",
          value: 19,
        },
        {
          name: "黑龙江",
          value: 15,
        },
        {
          name: "湖南",
          value: 69,
        },
        {
          name: "安徽",
          value: 60,
        },
        {
          name: "山东",
          value: 39,
        },
        {
          name: "新疆",
          value: 4,
        },
        {
          name: "江苏",
          value: 31,
        },
        {
          name: "浙江",
          value: 104,
        },
        {
          name: "江西",
          value: 36,
        },
        {
          name: "湖北",
          value: 1052,
        },
        {
          name: "广西",
          value: 33,
        },
        {
          name: "甘肃",
          value: 7,
        },
        {
          name: "山西",
          value: 9,
        },
        {
          name: "内蒙古",
          value: 7,
        },
        {
          name: "陕西",
          value: 22,
        },
        {
          name: "吉林",
          value: 4,
        },
        {
          name: "福建",
          value: 18,
        },
        {
          name: "贵州",
          value: 5,
        },
        {
          name: "广东",
          value: 98,
        },
        {
          name: "青海",
          value: 1,
        },
        {
          name: "西藏",
          value: 0,
        },
        {
          name: "四川",
          value: 44,
        },
        {
          name: "宁夏",
          value: 4,
        },
        {
          name: "海南",
          value: 22,
        },
        {
          name: "台湾",
          value: 3,
        },
        {
          name: "香港",
          value: 5,
        },
        {
          name: "澳门",
          value: 5,
        },
      ];
      var option = {
        title: {
          text: "客户地域分布",
        },
        tooltip: {
          triggerOn: "click",
          formatter: function (e, t, n) {
            return 0.5 == e.value
              ? e.name + "：有疑似病例"
              : e.seriesName + "<br />" + e.name + "：" + e.value;
          },
        },
        visualMap: {
          min: 0,
          max: 1000,
          left: 26,
          bottom: 40,
          showLabel: !0,
          text: ["高", "低"],
          pieces: [
            {
              gt: 100,
              label: "> 100 人",
              color: "#7f1100",
            },
            {
              gte: 10,
              lte: 100,
              label: "10 - 100 人",
              color: "#ff5428",
            },
            {
              gte: 1,
              lt: 10,
              label: "1 - 9 人",
              color: "#ff8c71",
            },
            {
              gt: 0,
              lt: 1,
              label: "疑似",
              color: "#ffd768",
            },
            {
              value: 0,
              color: "#ffffff",
            },
          ],
          show: !0,
        },
        geo: {
          map: "china",
          roam: !1,
          scaleLimit: {
            min: 1,
            max: 2,
          },
          zoom: 1.23,
          top: 40,
          label: {
            normal: {
              show: !0,
              fontSize: "14",
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0,
            },
          },
        },
        series: [
          {
            name: "确诊病例",
            type: "map",
            geoIndex: 0,
            data: window.dataList,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.overview {
  > div:first-child {
    text-align: left;
    color: #000;
    font-size: 18px;
  }
  .time_line {
    display: flex;
    ul {
      display: flex;
      width: 100%;
      justify-content: left;
      flex-direction: row;
      align-items: center;
      background: #ffffff;
      margin: 10px 0;
      border: 1px solid #d8d8d8;
      li {
        padding: 10px 40px;
        height: 40px;
        border-right: 1px solid #d8d8d8;
        list-style: none;
        cursor: pointer;
      }
    }
  }
  .time_active {
    background: #409eff !important;
    color: #ffffff;
  }
  .box-card {
    .business {
      text-align: left;
      font-size: 18px;
    }
    .business_content {
      ul {
        display: flex;
        margin-top: 20px;
      }
      li {
        display: flex;
        flex-direction: column;
        padding: 10px 40px;
        height: 60px;
        background: #ffffff;
        border-right: 1px solid gray;
      }
    }
  }
}
</style>