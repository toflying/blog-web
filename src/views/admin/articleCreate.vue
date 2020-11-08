<template>
  <div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="文章类容">
          <el-input type="textarea" v-model="form.body"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        title: "",
        body: "",
      },
    };
  },
  created() {
   
  },
  methods: {
    onSubmit() {
      this.$http.post('api/articles',this.form).then((res)=>{
        this.$message({
          message: '恭喜你，文章创建成功！',
          type: 'success'
        })
        this.$router.push("articleList")
      })
    },
  },
};
</script>
<style lang="less" scoped>

</style>