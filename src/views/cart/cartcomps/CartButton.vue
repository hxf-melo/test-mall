<template>
  <div class="cartList-button">
    <div class="check-button">
      <check-button></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      <div class="total-price">
      合计:
      <span>{{'￥'+totalPrice}}</span>
      </div>
      <div class="account">
        结算({{checkLength}})
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton.vue'
import {mapGetters} from 'vuex'
export default {
  components: { CheckButton },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter(item => item.check).reduce((preValue,item) => {
        return preValue + item.count * item.price
      },0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => item.check).length
    }
  }
}
</script>

<style scoped>
.cartList-button {
  display: flex;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  justify-content: space-between;
  background-color: #cccccc52;
}
.check-button {
  display: flex;
  align-items: center;
  margin: 0 10px 0 5px;
}
.price {
  display: flex;
}
.total-price {
  margin-right: 10px;
}
.total-price span {
  color: var(--color-tint);
}
.account {
  color: #fff;
  text-align: center;
  margin: 5px 5px;
  padding: 0 10px;
  line-height: 30px;
  border-radius: 20px;
  background-color: var(--color-tint);
}
</style>