import Vue from 'vue'
// Ant Design
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/reset.css';

Vue.config.productionTip = false

Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')