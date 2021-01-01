<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index" class="detail-item-swiper">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'
export default {
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: { 
    Swiper, 
    SwiperItem 
    },

}
</script>

<style scoped>
.detail-item-swiper {
  height: 300px;
  overflow: hidden;
}
</style>