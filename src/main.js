import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/line-awesome'

import './style.css'
import App from './App.vue'
import '@quasar/extras/line-awesome/line-awesome.css'
import 'quasar/src/css/index.sass'

const myApp = createApp(App)

myApp.use(Quasar, {
    plugins: {},
    iconSet: quasarIconSet
})


myApp.mount('#app')
