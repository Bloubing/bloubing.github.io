import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { createI18n } from 'vue-i18n'


const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
 
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
