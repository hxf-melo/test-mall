<template>
  <div v-if="Object.keys(detailInfo).length !==0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div v-for="(item,index) in detailInfo.detailImage" :key="index">
      <div class="info-key">{{item.key}}</div>
      <div class="info-list">
        <img v-for="(items, index) in item.list" :key="index" :src="items" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      counter:0,
      imagesLength: 0
    }
  },
  methods:{
    imageLoad(){
      //当所有图片加载完成之后再发射事件
      if (++this.counter === this.imagesLength){
        this.$emit('imageLoad')
      }
    }
  },
  watch:{
    detailInfo(){
      //拿到图片数量
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
.goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 20px;
    line-height: 20px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: var(--color-high-text);
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 10px;
    text-indent: 2em;
    font-size: 14px;
    color: #c6c6c6;
  }

  .info-key {
    margin: 10px 120px;
    line-height: 25px;
    text-align: center;
    font-size: 16px;
    background-color: var(--color-tint);
    color: #fff;
    border-radius: 10px;
  }

  .info-list img {
    width: 100%;
  }
</style>