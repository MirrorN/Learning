<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="sub">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ cnt }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
export default {
  props:{
    cnt:{
      default: 0,
      type: Number,
    },
    id:{
      type: Number,
      required: true,
    }
  },

  methods:{
    add(){
      // 准备将数据发送给 App 发送数据的格式为 {id, count}
      const obj = {id: this.id, count: this.cnt+1}
      // 使用 EventBus 方案发送数据
      bus.$emit('share', obj)
    },
    sub(){
      const obj = {id: this.id, count: (this.cnt-1)>0?(this.cnt-1):0}
      bus.$emit('share', obj)
    }
  }
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
