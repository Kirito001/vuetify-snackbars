import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import snackbar from './plugins/snackbar'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(snackbar)

new Vue({
    vuetify,
    router: new VueRouter({
        mode: 'hash',
        routes: [{
            path: '/',
            name: 'App',
            component: () => import('./App')
        }]
    }),
	render: h => h(App)
}).$mount('#app')