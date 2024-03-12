import Home from '@/views/Home/index.vue'
import Login from '@/views/Login/index.vue'
import Search from '@/views/Search/index.vue'
import Register from '@/views/Register/index.vue'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isShowFooter: false
    }
  },
  {
    name: 'search',
    path: '/Search/:keyword?',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { isShowFooter: true }
  },
  // 重定向

  {
    path: '/',
    redirect: '/home'
  }
]
