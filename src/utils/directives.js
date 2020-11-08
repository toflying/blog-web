
import Vue from 'vue'
// 注册一个全局自定义指令 `v-color`
Vue.directive('color', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el,binding) {
     console.log("自定义指令",el,binding);
     if(binding.value){
        el.style.color = binding.value
     }else{
        el.style.color = 'red'
     }
    }
  })