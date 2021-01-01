<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
props:{
  recommends:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #ccc;
}
.recommend-item {
  width: 100%;
  flex: 1;
}
.recommend-item img{
  width: 70px;
  height: 70px;
}
</style>