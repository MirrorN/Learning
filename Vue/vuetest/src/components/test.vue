<!-- test vue component -->
<template>
  <div>
    <button @click="filter">filter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  components: {},

  computed: {},

  // mounted: {},

  methods: {
    filter() {
      const arr = [1, 2, 3, 4, 5]
      const res = arr.filter((item) => item >= 3)
      console.log(res)
    },
  },
}
</script>
<style lang="stylus" scoped></style>
