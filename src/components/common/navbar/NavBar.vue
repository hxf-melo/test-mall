<template>
  <div class="nav-bar">
    <div class="nav-left" ><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
}
.nav-left,
.nav-right {
width: 60px;
}
.nav-center {
  flex: 1;
}
</style>