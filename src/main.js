import Vue from 'vue'
import App from './App.vue'

import './assets/css/body.css'
import './assets/images/news.png'

const root = document.createElement('div')
document.body.append(root)
new Vue({
  render: h => h(App)
}).$mount(root)
