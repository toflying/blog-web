<template>
  <div>
    <el-breadcrumb separator="/" class="header">
      <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider></el-divider>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log("title--",this.$route.meta.title)
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.header{
  margin-bottom: 10px;
}
</style>