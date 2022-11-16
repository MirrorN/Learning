import Vue from 'vue'
import App from './App.vue'
// 导入需要全局注册的组件
// import Test from '@/components/test.vue'
// import Count from '@/components/Count.vue'

Vue.config.productionTip = false
// 参数一为 字符串格式的注册组件名称（相当于起别名）
// 参数二为 全局注册组件名称 即上面导入的名称
// Vue.component('Test', Test)
// Vue.component('Count', Count)

new Vue({
  render: h => h(App),
}).$mount('#app')
