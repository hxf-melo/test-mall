<template>
  <div id="cart">
    <nav-bar class="cart-nav"><div class="center" slot="center">购物车({{length}})</div></nav-bar>
    <catr-list></catr-list>
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
      length: 'cartLength'
    })
  }
}
</script>

<style scoped>
#cart {
  height: 100vh;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>