<!--  -->
<template>
  <div class="right-container">
    <p>right component</p>
    <p>{{ val }}</p>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
export default {
  data () {
    return {
      val: 0,
    };
  },

  components: {},

  computed: {},


  methods: {
  },

  created() {
    bus.$on('passVal', val=>{
      this.val = val
    })
  },
}
</script>

<style lang="less" scoped>
.right-container {
  padding: 0 20px 20px;
  min-height: 250px;
  flex: 1;
}

h3 {
  color: red;
}

/deep/ h5 {
  color: #ccc
}

/deep/ p {
  color: brown;
}
</style>