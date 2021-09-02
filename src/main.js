import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from '@/router'
// 导入Vuex模块
import store from '@/store'
// 导入ElementUI
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
