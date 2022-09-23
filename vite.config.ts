import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const path = require('path') //vite目前不支持require这种写法
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
