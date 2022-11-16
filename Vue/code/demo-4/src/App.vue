<!-- app vue -->
<template>
  <div>
    <h1>APP Root Component</h1>
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
export default {
  data() {
    return {
    }
  },

  components: {
    Left,
    Right
  },

  computed: {},

  // mounted: {},

  methods: {}
}

</script>
<style lang='less' scoped>
  .box{
    display: flex;
  }
</style>
