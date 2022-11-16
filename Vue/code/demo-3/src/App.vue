<template>
  <div class="app-container">
    <!-- 使用私有自定义指令 color -->
    <h1 v-color="'green'">App 根组件</h1>
    <p v-color="color">some test text</p>
    <button @click="color='yellow'">change color</button>
    <hr />

    <div class="box">
      <Test>
        <template #title="{val, user}">
          <p>header</p>
          <p>{{ val }}</p>
          <p>{{ user.name }}</p>
        </template>

        <!-- 使用 = 接收一个对象 该对象的属性即为 slot 预留的数据 -->
        <template #content="obj">
          <p>content</p>
          <p>{{ obj }}</p>
        </template>

        <template #footer>
          <p>footer</p>
        </template>
      </Test>
      <br>
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <template #test1>
          <p>test for slot</p>
        </template>
      </Left>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Test from '@/components/Test.vue'
export default {
  data(){
    return{
      color: 'blue'
    }
  },

  components: {
    Left,
    Test,
  },

  // 私有自定义指令的节点
  directives: {
    // 定义名为 color 的指令 （使用时使用格式为 v-color ）
    /* color: {
      // 指令被绑定到元素上的时候触发 bind 函数
      // 形参 el 表示当前指令绑定到的那个 DOM 对象
      bind(el, binding) {
        console.log(binding)
        el.style.color = binding.value
      },
      update(el, binding){
        el.style.color = binding.value
      }
    } */

    // color(el, binding){
    //   el.style.color = binding.value
    // }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
