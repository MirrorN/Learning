<!-- test for vue -->
<template>
  <div>
    <button>ccc</button>
    <Left></Left>
    <Left2></Left2>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/test.vue'
import Left from '@/components/Left.vue'
import Left2 from '@/components/Left2.vue'
export default {
  data() {
    return {
      name: 'vagent poem',
    }
  },

  components: { HelloWorld, Test, Left, Left2 },

  computed: {},

  // mounted: {},

  methods: {},
}
</script>
<style lang="less" scoped>
html,
body {
  height: 100%;
  width: 100%;
}
</style>
