<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-if="!isActive"><slot name="icon"></slot></div>
    <div class="item-active-icon" v-else ><slot name="active_icon"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'var(--color-tint)'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
     itemClick(){
        if (this.path !== this.$route.path) {
          this.$router.replace(this.path)
          // console.log('切换');
        } 
     }
  }
}
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
}
.item-icon img,
.item-active-icon img{
  margin-top: 5px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.item-text {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}
</style>