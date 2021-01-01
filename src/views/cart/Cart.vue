<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div class="center" slot="center">购物车({{length}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import{mapGetters} from 'vuex'
export default {
  components: {
    NavBar,
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
.cart-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>