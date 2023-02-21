import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/assets/scss/main.scss'
import '@/assets/icofont.min.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
