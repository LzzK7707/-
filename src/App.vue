<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 通过路由元信息来控制是否显示Footer组件 -->
    <Footer v-show="$route.meta.isShowFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 派发action，获取商品分类列表的数据
    // 只触发一次
    this.$store.dispatch('getCategoryList')
  },
}
</script>

<style></style>