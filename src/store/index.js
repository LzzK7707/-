import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import detail from './detail'
import user from '@/store/user'
Vue.use(Vuex)

export default new Vuex.Store({
    //实现Vuex模块化开发存储数据
    modules: {
        home,
        search,
        detail,
        user
    }
})
