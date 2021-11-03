import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'//相当于'./router/index.ts'
import store from './store'
import Nav from '@/components/Nav.vue';

Vue.config.productionTip = false

Vue.component('Nav',Nav)

new Vue({
  router,//router:router的缩写
  store,
  render: h => h(App)
}).$mount('#app')
