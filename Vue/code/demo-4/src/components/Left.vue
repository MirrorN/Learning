<!-- Left 组件 -->
<template>
  <div class="left-container">
    <h3>Left Component</h3>
    <button @click="getBookInfo">get</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {
    async getBookInfo() {
      const { data: res } = await this.$http.get('/api/get')
      console.log(res)
    }
  }
}

</script>
<style lang='less' scoped>
.left-container{
  background-color: lightgreen;
  min-height: 150px;
  flex: 1;
}
</style>
