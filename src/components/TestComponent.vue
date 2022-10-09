<template>
  <button class="testButtonClass" @click="consoleTest()">test-component</button>
</template>
 
<script setup lang="ts">
// import '@/style.css'
const consoleTest = () => {
  console.log('console TestComponent')
}
</script>
 
<style scoped lang="scss">
.testButtonClass {
  background-color: darkmagenta;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
}

.testButtonClass:hover {
  border-color: #646cff;
}

.testButtonClass:focus,
e {
  outline: 4px auto -webkit-focus-ring-color;
}

.testButtonClass:focus-visibl {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>