<!-- left component -->
<template>
  <div>
    <h4>left component</h4>
    <p>{{ count }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    };
  },

  components: {},

  computed: {},

  methods: {
    add(){
      this.count += 1
    },
    reset(){
      this.count = 0
    }
  }
}

</script>
<style lang='stylus' scoped>
</style>