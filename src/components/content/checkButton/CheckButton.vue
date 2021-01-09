<template>
  <div class="check-button" :class="{check:isActive}">
    <img src="~@/assets/img/cart/tick.svg"  alt="">
  </div>
</template>

<script>
export default {
props:{
  isActive:{
    type:Boolean,
    default:false
  }
}
}
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
}
.check {
  background-color: var(--color-tint);
  border-color: var(--color-tint);
}
</style>