import { reqGoodsInfo } from '@/api'

const state = {
  goodsInfo: {}
}

const actions = {
  async getGoodsInfo({ commit }, skuid) {
    let result = await reqGoodsInfo(skuid)
    if (result.code == 200) {
      commit('RECEIVE_GOODS_INFO', result.data)
    }
  }
}

const mutations = {
  RECEIVE_GOODS_INFO(state, goodsInfo) {
    state.goodsInfo = goodsInfo
  }
}

const getters = {
  categoryView() {
    return state.goodsInfo.categoryView || {} 
  },
  skuInfo() {
    return state.goodsInfo.skuInfo || {}
  },

}

export default {
  state,
  mutations,
  actions,
  getters
}





