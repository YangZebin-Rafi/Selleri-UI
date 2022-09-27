<template>
  <button class="testButtonClass" @click="consoleTest()">test-component</button>
</template>
 
<script setup lang="ts">
// import '@/style.css'
const consoleTest = () => {
  console.log('console TestComponent')
}
</script>
 
<style>
.testButtonClass {
  background-color: darkcyan;
}
</style>