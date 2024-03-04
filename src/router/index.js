import routes from './ruoters'
import VueRouter from 'vue-router'
import Vue from 'vue'

// 使用VueRouter插件
Vue.use(VueRouter)

//把VueRouter原型对象的push方法保存起来
let originalPush = VueRouter.prototype.push
//把VueRouter原型对象的replace方法保存起来
let originalReplace = VueRouter.prototype.push

//修改原型对象中的push方法
VueRouter.prototype.push = function (location, onResolved, onRejected) {
  //如果调用push方法时没有传递成功或失败的回调函数,就给他们指定一个空函数
  if (onResolved === undefined && onRejected === undefined) {
    return originalPush.call(this, location).catch(() => {})
  } else {
    return originalPush.call(this, location, onResolved, onRejected)
  }
}

/* VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originalPush.call(this, location, resolve, reject)
    } else {
        originalPush.call(this,location, ()=>{}, ()=>{})
    }
} */

//修改原型对象中的replace方法
VueRouter.prototype.replace = function (location, onResolved, onRejected) {
  //如果调用push方法时没有传递成功或失败的回调函数,就给他们指定一个空函数
  if (onResolved === undefined && onRejected === undefined) {
    return originalReplace.call(this, location).catch(() => {})
  } else {
    return originalReplace.call(this, location, onResolved, onRejected)
  }
}

export default new VueRouter({
  routes,
  // 滚动行为
  scrollBehavior(to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})
