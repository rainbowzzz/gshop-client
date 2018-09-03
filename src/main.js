

import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'

import './filters/index'
import './mock/mockServer'

import router from './router/index'
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import store from './store'
import Split from './components/Split/Split.vue'



Vue.component('Split',Split)
Vue.component('HeaderTop',HeaderTop)
Vue.component(Button.name,Button)
new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store
})
