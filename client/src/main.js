import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// const dotenv = require('dotenv');
// dotenv.load();

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
