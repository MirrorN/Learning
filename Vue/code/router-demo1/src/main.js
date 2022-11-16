import Vue from 'vue'
import App from './App2.vue'
// 导入路由模块 拿到路由的实例对象
import router from '@/router/index.js'

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 全局样式
import '@/assets/global.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 为了使用路由 需要把路由的实例对象挂载到 router
  router: router
  
}).$mount('#app')
