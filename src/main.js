import Vue from 'vue'
import App from './App.vue'
import SsScroll from '../lib/vue-ss-scroll'

Vue.use(SsScroll)

new Vue({
  el: '#app',
  render: h => h(App)
})
