import Vue from 'vue'
import App from './App.vue'
import './assets/element'
import {router} from './router'
import Fragment from 'vue-fragment'
// import '@/utils/index'
import '@/style/index.css'
Vue.use(Fragment.Plugin)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
