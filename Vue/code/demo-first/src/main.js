import Vue from 'vue'
// import App from './App.vue'
import test from './test.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(test),
}).$mount('#app')

// vue 实例的 .$mount()方法与 el 作用一致