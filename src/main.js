import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/style.css'

Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(axios);
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
