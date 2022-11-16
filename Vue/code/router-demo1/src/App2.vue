<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <router-link to="/main">Main</router-link>
    <router-link to="/login">Login</router-link>
    <button @click="back">back</button>
    <button @click="forward">forward</button>
    <router-link to="/home">Home</router-link>
    <router-link to="/movie">Movie</router-link>
    <router-link to="/about">About</router-link>
    <!-- <a href="#/home">Home</a>
    <a href="#/movie">Movie</a>
    <a href="#/about">About</a> -->
    <hr />

    <!-- router-view 标签由 vue-router 提供 其作用相当于占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    back() {
      this.$router.back()
    },

    forward() {
      this.$router.forward()
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
