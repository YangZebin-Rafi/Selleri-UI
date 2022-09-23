// 想要使用必须先引入 defineStore；
import { defineStore } from 'pinia';
export const useStore = defineStore('main', {
  state(){
    return {
      count: 10
    }
  },
  getters:{ // 相当于vue里面的计算属性，可以缓存数据

  },
  actions:{ // 可以通过actions 方法，改变 state 里面的值。
      
  }
})
