import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import AosVue from 'aos-vue'

import 'bootstrap/scss/bootstrap.scss'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

createApp(App).use(AosVue).use(PrimeVue).mount('#app')