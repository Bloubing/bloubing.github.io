import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: navigator.language,
  fallbackLocale: 'fr',
  messages: {
    en: '',
    fr: '',
    es: '',
  },
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
