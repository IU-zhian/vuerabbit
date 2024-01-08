<template>
  <layoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<script setup>
  import LayoutNav from './components/LayoutNav.vue'
  import LayoutHeader from './components/LayoutHeader.vue'
  import LayoutFooter from './components/LayoutFooter.vue'
  import layoutFixed from './components/layoutFixed.vue'
</script>

<style>

</style>