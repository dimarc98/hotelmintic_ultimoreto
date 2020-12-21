// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router_conf.js'
import vueRouter from "vue-router";

Vue.config.productionTip = false
Vue.use(vueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

origin =["https://hotelmintic-ultimoreto.herokuapp.com"]