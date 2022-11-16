<template>
  <div class="left-container">
    <h3 v-color="'lightgreen'">Left 组件</h3>
    <!-- slot 占位 -->
    <slot name="test1">
      <p v-color="'lightgreen'">默认内容</p>
      <!-- <h1 v-color="'green'">App 根组件</h1> -->
    </slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
