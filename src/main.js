import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import main from './assets/main.css'

import { auth } from './firebase/config.js'

let app

auth.onAuthStateChanged(() => {
  if(!app) {
    app = createApp(App).use(router).mount('#app')
  }
})
