<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{arr}}</div>
    <div v-color>{{arr|datafilter}}</div>
    <div v-color="'green'">{{arr|datafilter}}</div>
  </div>
</template>
<script>
import mixin from "../utils/mixin";
import "../utils/directives";
import "../utils/filters";
import { moneyFt } from "../utils/publikMethods";
export default {
  /* 
  当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。
  比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
  */
  mixins: [mixin],
  data() {
    return {
      message: "goodbye",
      bar: "def",
      arr: [1, 3, 5, 2, 6, 8, 3, 9],
    };
  },
  created() {
    console.log("组件内mixin");
    //组件内相同属性 组件内的权重更高 这里的 message 显示是 goodbye
    console.log("对象混入--", this.$data);
    let money = moneyFt(11111);
    console.log("格式化金额--",money);
    
  },
  methods: {},
};
</script>
<style lang="less" scoped>
</style>