// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导包的，入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
import Reset from '@/assets/css/reset.css'

//ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//axios
import axios from 'axios'
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'


//如果变成生产模式，自动关闭一些console输出
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
