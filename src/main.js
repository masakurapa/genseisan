import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import store from './vuex/store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
