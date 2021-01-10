<template>
  <div id="cart">
    <nav-bar class="cart-nav"><div class="center" slot="center">购物车({{length}})</div></nav-bar>
    <catr-list v-if="cartList.length"></catr-list>
    <div class="cart-none" v-else>
      <div class="none-text" @click="textClick">
        购物车为空...去逛逛~
      </div>
    </div>
    <cart-button></cart-button>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import{mapGetters} from 'vuex'
import CatrList from './cartcomps/CatrList.vue'
import CartButton from './cartcomps/CartButton.vue'
export default {
  components: {
    NavBar,
    CatrList,
    CartButton,
  },
  computed:{
    //把vuex里面的getters转换成computed直接使用,要先从vuex导入mapGetters
    ...mapGetters({
      length: 'cartLength',
      cartList:'cartList'
    })
  },
  methods:{
    textClick() {
      this.$router.replace('/home')
    }
  }
}
</script>

<style scoped>
#cart {
  height: 100vh;
}
.cart-none {
  height: calc(100% - 44px - 49px - 40px);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.none-text {
  padding: 20px;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 2px;
  border-radius: 10px;
  background-color: var(--color-tint);
}
.cart-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>