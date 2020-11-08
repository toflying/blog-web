import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    name: 'wtf',
    list: []
  },
  mutations: {
    //mutations 同步操作
    clickAdd(state, data) {
      state.count++
      state.name = data
      console.log('改变name值--', data)
    }
  },
  actions: {
    //actions 异步操作 也可以同步
    //第一个参数是一个store对象 第二个是接收dispatch传递的数据的
    asyncfill({
      commit,
      state
    }, data) {
      console.log(commit)
      console.log(state)
      console.log(data)
      setTimeout((data) => {
        /* 
        可以异步缓存数据 例如列表 第一次请求可以判断列表数组的长度是否为0 
        是发起axios请求 
        不是获取store里的list数组的数据
        */
        // commit('clickAdd','hello')
        console.log('async 10s 后出来', data)
      }, 1000)
    }
    //这里可以用 async await 
  },
  modules: {}
})