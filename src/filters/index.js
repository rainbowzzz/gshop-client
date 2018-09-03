

import Vue from 'vue'
import moment from 'moment'
Vue.filter('date-format',function (value,format) {
  return moment(value).format(format || 'YYY-MM-DD HH:mm:ss')
})
