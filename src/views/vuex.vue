<template>
  <div id="vuex">
    <div>vuex 使用</div>
    <div>
      <el-button @click="addone" type="primary">add</el-button>
      <span>点击加1--{{this.$store.state.count}}----name值--{{name}}</span>
    </div>
    <div>
      <el-button @click="asyncclick" type="primary">异步提交</el-button>
      <span></span>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      msg: "vuex",
    };
  },
  computed: {
    ...mapState(["name"]),
  },
  mounted() {
    console.log(this.$store.state.count);
  },
  methods: {
    addone() {
      this.$store.commit("clickAdd", "哈哈");
    },
    asyncclick() {
      this.$store.dispatch("asyncfill",{num:10});
    },
  },
};
</script>
<style lang="less" scoped>
#vuex {
  width: 960px;
  height: 100%;
  margin: 0 auto;
  div {
    text-align: left;
    margin-bottom: 20px;
  }
}
</style>