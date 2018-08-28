

import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import store from './store'

Vue.component('HeaderTop',HeaderTop)
new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store
})
