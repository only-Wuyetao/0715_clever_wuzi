import Vue from "vue"
import App from './App.vue'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'
Vue.component({
  TopHeader
})
new Vue({
  el: "#app",
  components: {
    App
  },
  template: '<App/>',
  router
})
