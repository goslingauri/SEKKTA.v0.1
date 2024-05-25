import { createApp } from 'vue'
import { store } from './js/store'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
app.use(store)
