import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const app = createApp(App).use(mdiVue, {
  icons: mdijs
})

app.use(router)

app.mount('body')
