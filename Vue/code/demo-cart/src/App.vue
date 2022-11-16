<template>
  <div class="app-container">
    <!-- Header 头部区域 -->
    <Header></Header>

    <!-- 循环渲染每个good -->
    <Goods v-for="item in list" :key="item.id" :id="item.id" :title="item.goods_name" :pic="item.goods_img"
      :price.number="item.goods_price" :state="item.goods_state" :count="item.goods_count" @changeState="getNewState">
    </Goods>

    <!-- Footer 区域 -->
    <Footer :isFull="fullState" @fullStateChange="getFullState" :amount="amt" :fullNum="fullNum"></Footer>
  </div>
</template><!--  -->

<script>
import Header from '@/components/Header/Header.vue'/*  */
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'
import bus from '@/components/eventBus.js'
import axios from 'axios'
import { INSPECT_MAX_BYTES } from 'buffer'
export default {
  components: {
    Header,
    Goods,
    Footer,
  },

  data() {
    return {
      list: [],
    }
  },

  methods: {
    // 封装使用 axios 请求数据的方法
    async initCartList() {
      const { data: res } = await axios.get('https://www.escook.cn/api/cart')
      console.log(res)
      if (res.status === 200) {
        this.list = res.list
      }
    },

    getNewState(val) {
      const [id, state] = val
      this.list.some((item) => {
        if (item.id === id) {
          item.goods_state = state
          return true
        }
      })
    },

    getFullState(val) {
      this.list.forEach(item => item.goods_state = val)
    }
  },

  computed: {
    // 计算属性 计算是否全选
    fullState() {
      const state = this.list.every(item => item.goods_state)
      return state
    },

    amt() {
      return this.list
        .filter(item => item.goods_state)
        .reduce((total, item) => {
          return total += item.goods_price * item.goods_count
        }, 0)
    },

    fullNum() {
      return this.list
        .filter(item => item.goods_state)
        .reduce((total, item) => {
          return total += item.goods_count
        }, 0)
    }
  },

  created() {
    this.initCartList()

    // 接收数据
    bus.$on('share', (val) => {
      // console.log(val)
      this.list.some(item => {
        if (item.id === val.id) {
          item.goods_count = val.count
          return true
        }
      })
    })
  }

}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
