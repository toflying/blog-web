import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from '@/http/http.js'
//rem 适配
import './utils/rem'
//css样式重置
import "@/styles/reset.less"
//css 动画
import animated from 'animate.css'
Vue.use(animated)
//平滑滚动
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import { saveCookie, getCookie, removeCookie } from '@/utils/getToken.js';
Vue.prototype.saveCookie = saveCookie;
Vue.prototype.getCookie = getCookie;
Vue.prototype.removeCookie = removeCookie;

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
  

Vue.config.productionTip = false


