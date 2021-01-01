<template>
  <div class="goods-list">
    <!-- 通过遍历来决定展示数量,数组元素item是对象-->
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
props:{
  //从父元素获取数据保存在goods
  goods:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>