<template>
  <!--轮播图-->
  <div class="swiper-container" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in list" :key="item.id" ref="box">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Carousel',
  props: ['list'],

  watch: {
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          //初始化Swiper类的实例
          var mySwiper = new Swiper(this.$refs.floor1Swiper, {
            //设置轮播图防线
            direction: 'horizontal',
            //开启循环模式
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              //分页器类型
              type: 'bullets',
              //点击分页器，切换轮播
              clickable: true
            },
            //自动轮播
            autoplay: {
              delay: 1000,
              // pauseOnMouseEnter: true,
              //如果设置为true，当切换到最后一个slide时停止自动切换
              stopOnLastSlide: true,
              //用户操作swiper之后，是否禁止autoplay
              disableOnInteraction: false
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
            //切换效果
            // effect: "cube",
          })
        })
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
