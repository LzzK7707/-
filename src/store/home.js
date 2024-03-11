import { reqCategoryList, reqBannerList, reqFloorList } from '@/api'
// home模块的小仓库

const state = {
    categoryList: [], // 存储三级菜单中的数据
    bannerList: [], // 轮播图的数据
    floorList: []
}

const actions = {
    // 通过API里的接口函数调用，想服务器发请求，获取服务器数据
    async getCategoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit('RECEIVE_CATEGORY_LIST', result.data)
        }
    },
    //获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqBannerList()
        if (result.code === 200) {
            commit('RECEIVE_BANNER_LIST', result.data)
        }
    },
    // 获取floor的数据
    async getFloorList({ commit }) {
        let result = await reqFloorList()
        if (result.code === 200) {
            commit('RECEIVE_FLOOR_LIST', result.data)
        }
    }
}

// 处理commit
const mutations = {
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList
    },
    RECEIVE_BANNER_LIST(state, bannerList) {
        state.bannerList = bannerList
    },
    RECEIVE_FLOOR_LIST(state, floorList) {
        state.floorList = floorList
    }
}

const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}
