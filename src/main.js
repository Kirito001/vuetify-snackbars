import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import snackbar from './plugins/snackbar'

Vue.config.productionTip = false

Vue.use(snackbar)

new Vue({
	vuetify,
	render: h => h(App)
}).$mount('#app')