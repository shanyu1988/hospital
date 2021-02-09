import 'amfe-flexible';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./utils/vant"
import 'vant/lib/index.css';
import './assets/style/common.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
