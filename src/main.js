import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import Axios from 'axios'
import router from './router'


Vue.prototype.$http = Axios;
Vue.prototype.$apiUrl = 'http://localhost:8500';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
