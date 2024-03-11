import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//三级联动组件
import TypeNav from '@/components/TypeNav/index.vue'
import Carousel from '@/components/Carousel/index.vue'
import Pagination from '@/components/Pagination/index.vue'
import '@/mock/mockServe.js'
import 'swiper/css/swiper.min.css'
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')
