import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss' // global css

import '@/permission' // permission control

Vue.use(ElementUI);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
