import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App.vue'

import store from './config/store'
import router from './config/router'

import './config/bootstrap'
import '@/global/global.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
