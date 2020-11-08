import Vue from 'vue'
//全局过滤器
Vue.filter('datafilter', (val)=>{
   console.log("过滤器--",val);
   let arr = []
   for (let index = 0; index < val.length; index++) {
       if(val[index]>5){
        arr.push(val[index])
       }
   }
   return arr
})