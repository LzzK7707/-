import { reqGetSearchInfo } from '@/api'
// search模块的小仓库
const state = {
  searchList: {},
}

const actions = {
  async getSearchList({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params)
    if (result.code === 200) {
      commit('RECEIVE_SEARCH_LIST', result.data)
    }
  },
}

const mutations = {
  RECEIVE_SEARCH_LIST(state, searchList) {
    state.searchList = searchList
  },
}

//主要用来简化仓库中的数据
const getters = {
  goodsList: (state) => state.searchList.goodsList || [],
  trademarkList: (state) => state.searchList.trademarkList || [],
  attrsList: (state) => state.searchList.attrsList || [],
  total: (state) => state.searchList.total || 0,
}
export default {
  state,
  actions,
  mutations,
  getters,
}
