import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入要使用的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'
import MovieItem from '@/components/MovieItem.vue'
import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'

// 调用 Vue.use() 函数 把VueRouter安装为 vue 的插件
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
  // routes 数组用于指定 hash 地址与组件的对应关系
  routes: [
    // 重定向规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/movie', component: Movie },
    { path: '/movie/movieItem/:mid', component: MovieItem, props: true },
    {
      path: '/about',
      component: About,
      redirect: '/about/tab1',
      // 子路由规则
      children: [
        { path: '', component: Tab1 },
        { path: 'tab1', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    },
    { path: '/main', component: Main },
    { path: '/login', component: Login }
  ]
})

// 定义全局前置守卫 每次页面跳转都会触发 fn 回调函数
router.beforeEach((to, from, next) => {
  // to - 将要访问的路由的信息对象
  // from - 将要离开的路由的信息对象
  // next - 调用 next() 函数表示放行 即允许这次路由跳转
  // console.log(to)
  // console.log(from)
  if (to.path === '/main') {
    const token = localStorage.getItem('token')
    if (token) {
      console.log(localStorage.getItem('token'))
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

// 向外共享路由的实例对象
export default router
