<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <!-- 将floorList的每一个floor传给Floor组件 -->
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer/index.vue'
import Recommend from '@/views/Home/Recommend/index.vue'
import Rank from '@/views/Home/Rank/index.vue'
import Like from '@/views/Home/Like/index.vue'
import Floor from '@/views/Home/Floor/index.vue'
import Brand from '@/views/Home/Brand/index.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('getFloorList') //floor会被使用两次，所以在这里派遣
    // 获取用户信息在首页展示
    // this.$store.dispatch('getUserInfo')
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}
</script>

<style scoped lang="less"></style>
