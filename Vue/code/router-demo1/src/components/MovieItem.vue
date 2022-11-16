<!-- Movie item detail -->
<template>
  <div class="item-container">
    <p>movie: {{ $route.params.mid }} --- {{ mid }}</p>
    <p>{{ $route.query }}</p>
    <button @click="printThis">This</button>
  </div>
</template>

<script>
export default {
  props: ['mid'],
  data() {
    return {}
  },

  components: {},

  computed: {},

  // mounted: {},

  methods: {
    printThis() {
      console.log(this)
    }
  }
}
</script>
<style lang="less" scoped>
.item-container {
  min-height: 100px;
  background-color: lightseagreen;
}
</style>
