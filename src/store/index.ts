// 想要使用必须先引入 defineStore；
import { defineStore } from 'pinia';
export const useStore = defineStore('main', {
  state() {
    return {
      count: 10,
      age: 12,
      name: '123'
    }
  },
  persist: { //  固化插件
    enabled: true, // 开启存储
    strategies: [ // 指定存储的位置以及存储的变量都有哪些，该属性可以不写，
      //在不写的情况下，默认存储到 sessionStorage 里面,默认存储 state 里面的所有数据。
      { storage: localStorage, paths: ["count"] }, //所以count被存储在本地，系统自动优先获取本地存储的数据
      // paths 是一个数组，如果写了 就会只存储 count 变量，当然也可以写多个。
    ]
  },
  getters: { // 相当于vue里面的计算属性，可以缓存数据

  },
  actions: {
    // 放这里处理相对复杂的数据
    piniaAdd() {
      this.count++;
    }
  }
})
