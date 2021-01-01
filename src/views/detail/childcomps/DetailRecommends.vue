<template>
  <div class="detail-recommends">
    <div class="recommend-info">相关推荐</div>
    <goods-list :goods="recommend"></goods-list>
  </div>
</template>

<script>
import GoodsList from '@/components/content/goods/GoodsList.vue'
export default {
  components: { 
    GoodsList 
    },
  props:{
    recommend: {
      type:Array,
      default(){
        return []
      }
    }
  }  
}
</script>

<style scoped>
.detail-recommends {
  padding: 10px 0 ;
  border-bottom: 5px solid #f2f5f8;
}
.recommend-info {
  margin: 15px 145px;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  background-color: var(--color-tint);
  color: #fff;
  border-radius: 10px;
}
</style>