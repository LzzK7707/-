import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api'

const state = {
  goodsInfo: {}
}

const actions = {
  // 获取商品详情信息
  async getGoodsInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId)
    if (result.code == 200) {
      commit('RECEIVE_GOODS_INFO', result.data)
    }
  },
  // 将产品添加到购物车
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    // 发送请求
    let result = await reqAddOrUpdateShopCart(skuId, skuNum)
    // 加入购物车成功
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
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
  spuSaleAttrList() {
    return state.goodsInfo.spuSaleAttrList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
