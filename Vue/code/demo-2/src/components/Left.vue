<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>{{ count }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    }
  },

  methods: {
    add() {
      this.count += 1
    }
  },

  created() {
    console.log('Left created')
  },

  destroyed() {
    console.log('Left destroyed')
  },

  activated(){
    console.log('activated')
  },

  deactivated(){
    console.log('deactivated')
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
