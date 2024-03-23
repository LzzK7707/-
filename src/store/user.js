import { reqGetCode, reqRegisterAccount, reqUserLogin } from '@/api'

// 登录与注册
const state = {
  code: ''
}

const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone)
    if (result.code === 200) {
      commit('GETCODE', result.data)
      return 'success'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 注册账号
  async registerAccount({ commit }, data) {
    let result = await reqRegisterAccount(data.phone, data.password, data.code)
    if (result.code === 200) {
      return 'success'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 登录账号
  async userLogin({commit}, data) {
    let result = await reqUserLogin(data.phone, data.password)
    if (result.code === 200) {
      commit('USERLOGIN',result.code.token) 
      return 'success'
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}

const mutations = {
  GETCODE(state, code) {
    state.code = code
  },
  USERLOGIN(state, token) {
    
  }
}

//主要用来简化仓库中的数据
const getters = {}
export default {
  state,
  actions,
  mutations,
  getters
}