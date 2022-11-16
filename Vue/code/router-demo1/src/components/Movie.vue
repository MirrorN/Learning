<template>
  <div class="movie-container">
    <h3>Movie 组件</h3>
    <router-link to="/movie/movieItem/1?name=zs age=20">Moive 1</router-link>
    <router-link to="/movie/movieItem/2">Moive 2</router-link>
    <router-link to="/movie/movieItem/3">Moive 3</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Movie'
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
