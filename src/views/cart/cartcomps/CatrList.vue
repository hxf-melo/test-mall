<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :product=item ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
import {mapGetters} from 'vuex'
import Scroll from '@/components/common/scroll/Scroll.vue'
export default {
  components: { CartListItem, Scroll },
  computed:{
    ...mapGetters(['cartList'])
  },
  activated() {
    return this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>