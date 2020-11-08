<template>
  <div id="vuex">
    <span>{{msg}}</span>
    <br />
    <span>{{obj.name}}</span>
    <span>{{obj.age}}</span>
    <span>{{obj.sex}}</span>
    <br />
    <span>{{arr}}</span>
    <br />
    <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "this is a test page",
      obj: {
        name: "wang",
      },
      arr: ["hello", "world", "you", "ok"],
      message: "未更新",
    };
  },
  computed: {},
  created() {
  },
  mounted() {
    // this.obj.age=18 //视图不会更新
    // this.$set(this.obj, 'age', 18) //单个属性
    //this.obj = Object.assign({},this.obj,{age:18,sex:"男"}) //多个属性
    console.log(this.obj);

    // this.arr[0] = 'haha' //视图不会更新
    // this.arr.length = 0 //视图不会更新
    // this.$set(this.arr,0,'haha')
    // this.arr.splice(0,1,'haha') //数组变异方法
    // this.arr.splice(0)

    //vue dom更新是异步的  若要根据dom判断业务逻辑可以在数据变化之后立即调用vue.nextTick()函数
    console.log(this.$el);
    this.message = "已更新";
    console.log(this.$el.lastChild.textContent); // => '未更新'
    this.$nextTick(function () {
      console.log(this.$el.lastChild.textContent); // => '已更新'
    });
  },
  methods: {

  },
};
</script>
<style lang="less" scoped>
</style>