// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// http://element-cn.eleme.io/#/zh-CN/
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Mock from './api/mock'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
