import Vue from 'vue'
import App from './App.vue'
import route from  "./router/index"
Vue.config.productionTip = false

new Vue({
    route,
  render: h => h(App),
}).$mount('#app')
