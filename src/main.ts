import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import TrainingCard from './components/TrainingCard.vue'
import PulseLoader from './components/PulseLoader.vue'

const app = createApp(App).use(mdiVue, {
  icons: mdijs
})

app.component("TrainingCard", TrainingCard)
app.component("PulseLoader", PulseLoader)

app.use(router)

app.mount('body')
