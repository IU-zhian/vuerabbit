<script setup>

</script>

<template>
  <!-- 一级路由出口组件 -->
  <!-- RouterView是<router-view></router-view>的简写 -->
  <RouterView />
  <div class="test">
    test scss 
  </div>
</template>

<style scoped lang="scss">
  .test{
    color:$priceColor
  }
</style>
