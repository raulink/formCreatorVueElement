// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


// ================
// Use Element UI
// ----------------
import Element from 'element-ui'
//import locale from 'element-ui/lib/locale/lang/en' // Default lang is Chinese
//import './assets/scss/_var.scss'
Vue.use(Element)
import './assets/scss/main.scss'


import App from './App'

// ================
// Transitions
// ----------------
/* import Animate from 'vue2-animate/dist/vue2-animate.min.css'
Vue.use(Animate)
 */
// ================
// Lodash A small wrapper for integrating lodash to Vuejs (Inspired by vue-axios plugin)
// ----------------
import VueLodash from 'vue-lodash'
Vue.use(VueLodash)

// ================
// Use Vue Router
// ----------------
import router from './router'


// ================
// Layout default
// ----------------
import Default from './layouts/Default'
Vue.component('default-layout', Default);


// ================
// Vue-stash alternative vuex
// ----------------
import VueStash from 'vue-stash'
import store from './store/store'
Vue.use(VueStash)



Vue.config.productionTip = false

var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  data: { store },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')

global.vm = vm;