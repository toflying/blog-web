<template>
  <div class="home">
    <!-- animate 动画 -->
    <div class="animate animate__animated animate__bounce">are you ok ?</div>
    <!-- nav吸顶 -->
    <div class="nav_bar" :class="isshownav ? 'shownav':''" ref="nav_bar">
      <li>left</li>
      <li>right</li>
    </div>
    <!-- 无缝滚动 -->
    <div class="contont_box">
      <li v-for="(item, index) in list" :key="index">{{item.name}}</li>

      <!-- <vue-seamless-scroll :data="list" class="seamless-warp">
        <li v-for="(item, index) in list" :key="index">{{item.name}}</li>
      </vue-seamless-scroll> -->

      <!-- <vue-seamless-scroll
        :data="list"
        class="seamless-warp"
        :class-option="optionSingleHeightTime"
      >
        <li v-for="(item, index) in list" :key="index">{{item.name}}</li>
      </vue-seamless-scroll>-->
    </div>
    <footer>
      <span>copyright</span>
    </footer>
  </div>
</template>

<script>
import md5 from "blueimp-md5/js/md5";
export default {
  name: "practice",
  components: {},
  data() {
    return {
      isshownav: false,
      str: "hello-world",
      list: [
        { id: 1, name: "哇咔咔" },
        { id: 2, name: "沃欧鸥" },
        { id: 3, name: "没名没姓" },
        { id: 4, name: "are you ok ？" },
        { id: 5, name: "畏畏缩缩" },
        { id: 6, name: "多多少少" },
        { id: 7, name: "滚滚滚" },
        { id: 8, name: "嘎嘎嘎" },
        { id: 9, name: "哈哈哈" },
        { id: 10, name: "首战即终战" },
        { id: 11, name: "安排。。" },
        { id: 12, name: "to happy" },
        { id: 13, name: "so easy" },
        { id: 14, name: "爱拼才会赢" },
        { id: 15, name: "神兵天降" },
        { id: 16, name: "万法归一" },
        { id: 17, name: "在坚持一秒" },
        { id: 18, name: "远方，晴空万里" },
        { id: 19, name: "面朝大海" },
        { id: 20, name: "春暖花开" },
      ],
    };
  },
  computed: {
    optionSingleHeightTime() {
      return {
        singleHeight: 45,
        waitTime: 2000,
      };
    },
  },
  mounted() {
    window.onscroll = this.scrollHandler;
    let hash = md5("123456");
    console.log("md5加密",hash);

    //计算一段代码的执行时间
    // console.time("time"); // 开始
    // for (var i = 0; i < 10; i++) {
    //   console.log(i);
    // }
    // console.timeEnd("time"); // 结束

    //console.log(this.str.substr(1, 2));    // e l 第二个参数是截取的长度
    //console.log(this.str.substring(1, 2)); // e
    //console.log(this.str.slice(1, 2));     // e
    // console.log(this.arr.splice(1,2)); // 改变原数组 第一个参数起始位置 第二个参数删除的长度 第三个参数删除后要替换的类容
    // console.log(this.arr.splice(1));

    //两个数组交集
    let arr1 = [1, 3, 5, 7];
    let arr2 = [2, 4, 6, 3, 3, 5];
    let s = arr1.filter((item) => {
      return arr2.includes(item);
    });
    console.log("数组交集--", s);
    //数组随机取值
    let arr3 = ["哈喽", "哇咔咔", "are you OK ？", "sure"];
    console.log("数组随机值--", arr3[~~(Math.random() * arr3.length)]);
    //删除数组中的虚值 false 0 "" undefined NaN null
    let arr4 = [0, 3, "s", "", undefined, NaN, null, false];
    console.log("过滤数组虚值--", arr4.filter(Boolean));
    //数组转对象
    console.log("数组转为对象--", { ...arr3 });
    //数组去重
    console.log("数组去重--", [...new Set(arr2)]);
    //数组合并
    console.log("数组合并--", [...arr1, ...arr2]);

    //格式化数组数据
    var kvArray = [
      { key: 1, value: 10 },
      { key: 2, value: 20 },
      { key: 3, value: 30 },
    ];
    var reformattedArray = kvArray.map(function (obj) {
      var rObj = {};
      rObj[obj.key] = obj.value;
      return rObj;
    });
    console.log("reformattedArray",reformattedArray);

  },
  methods: {
    scrollHandler() {
      let scrollHeight = document.documentElement.scrollTop;
      if (this.$refs.nav_bar) {
        //others pages is not value
        //Home.vue:81 Uncaught TypeError: Cannot read property 'clientHeight' of undefined
        let elementHeight = this.$refs.nav_bar.clientHeight;
        if (scrollHeight >= elementHeight) {
          this.isshownav = true;
          // console.log(scrollHeight)
        } else {
          this.isshownav = false;
          // console.log(scrollHeight)
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../styles/index.less");
.home {
  .animate {
    height: 45px;
    width: 200px;
    line-height: 45px;
    background: #e02433;
    text-align: center;
    margin: 10px auto;
    color: #fff;
  }
  .nav_bar {
    width: 1600px;
    height: 60px;
    background: rgba(91, 80, 247);
    margin: 0 auto;
    display: flex;
    li {
      width: 50%;
      text-align: center;
      line-height: 60px;
      height: 60px;
      list-style: none;
      color: #fff;
      &:hover {
        background: #4ce60f;
      }
      &:first-child {
        border-right: 1px solid ghostwhite;
      }
    }
  }
  .shownav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .contont_box {
    width: 1600px;
    // height: 650px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 150px;
    background: #ccffff;
    .seamless-warp {
      height: 300px;
      overflow: hidden;
    }
    li {
      list-style: none;
      color: @textColor;
      line-height: 45px;
      border-bottom: 1px solid gray;
      text-align: left;
      margin-left: 20px;
    }
  }
  footer {
    width: 1920px;
    height: 100px;
    background: #666666;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
