import Snackbar from '../components/Snackbar'
import Vuetify from 'vuetify/lib'

const snackbar = (Vue) => {

    const SnackbarConstructor = Vue.extend(Snackbar)
    const instance = new SnackbarConstructor()

    instance.$vuetify = new Vuetify().framework;
    let vm = instance.$mount()

    Vue.nextTick(() => {
        document.getElementById('app').appendChild(vm.$el)
    })
    Vue.prototype.$snackbar = instance.execute
    Vue.prototype.$snackqueue = instance.snackqueue
    Vue.prototype.$snackBarCloseAll = instance.snackBarCloseAll
}

export default snackbar