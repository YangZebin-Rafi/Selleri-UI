import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
// 下面是我们安装的固化插件。
import piniaPersist from 'pinia-plugin-persist'

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPersist);

app.use(pinia);

app.mount('#app')
