import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Pagination from '@/components/Pagination'
// import {reqGetSearchInfo} from '@/api'
import store from '@/store'
//执行一次mockServer文件，引用
import '@/mock/mockServer'
//引入样式直接引入，不需要暴露样式
import 'swiper/css/swiper.css'
import * as API from '@/api';
import { Button,MessageBox} from 'element-ui';
Vue.use(VueRouter)
Vue.component(TypeNav.name, TypeNav)
Vue.component(Pagination.name, Pagination)
Vue.config.productionTip = false

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;



// reqGetSearchInfo()

new Vue({
  render: h => h(App),
  // 注册路由信息，所有组件新加$route,$router属性
  router,
  // 注册仓库
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API;
  }
  
}).$mount('#app')
