import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import dataV from '@jiaminghi/data-view'
Vue.use(dataV);
import echarts from 'echarts'
import http from './utils/request.js'
Vue.prototype.$axios = http
import './mock/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
