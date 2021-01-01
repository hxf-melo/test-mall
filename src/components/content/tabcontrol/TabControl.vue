<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key='item' class="tab-control-item"
     @click="itemClick(index)"
     :class="{active:currentIndex === index}"
     >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
props:{
  titles:{
    type:Array,
    default(){
      return []
    }
  }
},
data(){
  return{
    //默认显示元素
    currentIndex:0
  }
},
methods:{
  itemClick(index){
    //监听点击index来决定显示的元素
    this.currentIndex = index;
    //把'tabclick'和index传给父组件
    this.$emit('tabclick',index)
  }
}
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  background-color: #ffffff;
  z-index: 9;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>