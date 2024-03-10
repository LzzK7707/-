import { reqGetCode } from '@/api'
// 登录与注册
const state = {

}

const actions = {
  async getCode(phone) {
    let result = await reqGetCode(phone)
    console.log(result)
  }
}

const mutations = {
}

//主要用来简化仓库中的数据
const getters = {
  
}
export default {
  state,
  actions,
  mutations,
  getters
}
