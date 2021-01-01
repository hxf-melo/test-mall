<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div> 
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addTocart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
methods:{
  addTocart(){
    this.$emit('addCart')
  }
}
}
</script>

<style scoped>
.bottom-bar {
  position: relative;
  height: 49px;
  z-index: 9;
  background-color: #fff;
  display: flex;
  text-align: center; 
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div{
  flex: 1;
}
.bar-left span {
    font-size: 12px;
  }

.bar-left .icon {
    display: block;
    width: 23px;
    height: 23px;
    margin: 6px auto 1px;
    background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100%;
  }

.bar-left .service {
    background-position:0 -54px;
  }

.bar-left .shop {
    background-position:0 -102px;
  }
.bar-right {
    font-size: 14px;
    color: #fff;
    padding: 6px 0;
    line-height: 36px;
    margin-right: 5px;
  }

.bar-right .cart {
  background-color: var(--color-tint);
  border-radius:20px 0 0 20px;
  }
.bar-right .buy {
  background-color: var(--color-high-text);
  border-radius:0  20px 20px 0;
}
</style>