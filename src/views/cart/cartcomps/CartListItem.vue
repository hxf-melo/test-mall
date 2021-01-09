<template>
  <div class="cart-list-item" >
    <div class="item-selector">
      <check-button :isActive="product.check" @click.native="buttonClick" ></check-button>
    </div>
    <div class="item-product" @click="itemClick">
      <div class="item-img">
        <img :src="product.images" alt="">
      </div>
      <div class="item-info">
        <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
        <div class="info-bottom">
          <div class="item-price left">{{'￥'+product.price}}</div>
          <div class="item-count right">{{'x'+product.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton.vue'
export default {
  components: { CheckButton },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    buttonClick(){
     this.product.check = !this.product.check
    },
    itemClick(){
    this.$router.push('/detail/' + this.product.iid)
  }
  }
}
</script>

<style scoped>
.cart-list-item {
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 5px solid #e9e9e9;
}
.item-selector {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-product {
  display: flex;
  width: 95%;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.item-info {
  position: relative;
  overflow: hidden;
  font-size: 16px;
  color: #666;
  padding: 5px 10px;
}
.item-title ,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 15px;
}
.item-info .item-desc {
  font-size: 13px;
  color: #999;
}
.info-bottom {
  position: absolute;
  right: 10px;
  left: 10px;
  bottom: 10px;
}
.info-bottom .item-price {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-tint);
 }
 .info-bottom .item-count {
   border: 1px solid var(--color-tint);
   font-size: 12px;
   padding: 3px;
   color: var(--color-tint);
   border-radius: 50%;
 }
</style>