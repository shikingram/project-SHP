import Vue from 'vue'
import App from './App.vue'

import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'

Vue.config.productionTip = false

// 注册组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

import router from '@/router'

// 引入store
import store from '@/store'

// 模拟轮播图数据
import '@/mock/mockServe.js'

import 'swiper/css/swiper.css'

// import { reqGetBannerListBack } from "@/api"
// console.log(reqGetBannerListBack())

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
