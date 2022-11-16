<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <button @click="switchComp">switch</button>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 使用 component 标签实现动态组件的展示 --> 
      <keep-alive include="Left">
        <component :is="compName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components//Right.vue'
export default {
  components: {
    Left,
    Right,
  },

  data() {
    return {
      compName: 'Left',
    }
  },

  methods: {
    switchComp() {
      this.compName = this.compName === 'Left' ? 'Right' : 'Left'
    }
  },


}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
