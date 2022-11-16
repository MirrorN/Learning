<!-- Right 组件 -->
<template>
  <div class="right-container">
    <h3>Right component</h3>
    <button @click="postInfo">POST</button>
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

  // mounted: {},

  methods: {
    async postInfo() {
      const { data: res } = await this.$http.post('/api/post', { name: 'zs', age: 12 })
      console.log(res)
    }
  }
}

</script>
<style lang='less' scoped>
.right-container{
  background-color: lightgrey;
  min-height: 150px;
  flex: 1;
}
</style>
