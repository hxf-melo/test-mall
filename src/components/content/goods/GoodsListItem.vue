<template>
  <div class="goods-item">
    <!-- 展示商品图片 -->
    <img :src="showIamge" alt=""  @load="imageLoad" @click="itemClick">
    <div class="goods-info">
      <!-- 展示商品信息 -->
      <p>{{goodsItem.title}}</p>
      <!-- 展示商品价格 -->
      <span class="price">{{goodsItem.price}}</span>
      <!-- 展示收藏数量 -->
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
props:{
  //从父元素获取数据保存在goodsItem
  goodsItem:{
    type:Object,
    default(){
      return {}
    }
  }
},
computed:{
  showIamge(){
    return  this.goodsItem.image ||this.goodsItem.show.img 
  }
},
methods:{
  imageLoad(){
    this.$bus.$emit('ItemImageLoad')
  },
  itemClick(){
    this.$router.push('/detail/' + this.goodsItem.iid)
  }
}
}
</script>

<style scoped>
.goods-item {
  position: relative;
  width: 48%;
  padding-bottom: 40px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  font-size : 12px;
  text-align: center;
  overflow: hidden;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
/* 通过伪元素把图标加到collect前面 */
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('~@/assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>