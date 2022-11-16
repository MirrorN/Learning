<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="onReset">reset</button>
    <hr />

    <div class="box">
      <!-- <button @click="print">this</button> -->
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- <Left ref="comLeft"></Left>
      <Right></Right> -->
      <input type="text" v-if="inputVisible" @blur="hideInput" ref="iptRef">
      <button v-else @click="showInput">visible</button>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
// import Right from '@/components/Right.vue'
import Right from '@/components/Right.vue'

export default {
  components:{
    Left,
    Right,
  },
  
  data(){
    return{
      inputVisible: false
    }
  },
  
  methods: {
    print(){
      // console.log(this.$refs.myh1)
      this.$refs.myh1.style.color = 'red'
    },
    onReset(){
      this.$refs.comLeft.count = 0
      this.$refs.comLeft.reset()
    },
    showInput(){
      this.inputVisible = true
      this.$nextTick(()=>{
        this.$refs.iptRef.focus()
      })
    },
    hideInput(){
      this.inputVisible = false
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
