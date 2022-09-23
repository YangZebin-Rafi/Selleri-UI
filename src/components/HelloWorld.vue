<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store/index'
let store = useStore()
// 直接修改count只能修改单个数据
// $patch可同时修改多个 
const add = () => {
  // store.$patch({
  //   count: store.count + 1,
  //   age:store.age + 2
  // })
  // 或者传递方法修改
  store.$patch(state => {
    state.count++;
    state.age++;
  })
}

</script>

<template>
  <div>
    <h3>count{{store.count}}</h3>
    <h3>age{{store.age}}</h3>
    <button @click="store.count++,store.age++">one</button>
    <button @click="add()">any</button>
    <button @click="store.piniaAdd()">action</button>
  </div>
</template>

<style scoped>

</style>
