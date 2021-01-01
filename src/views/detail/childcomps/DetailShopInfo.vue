<template>
  <div class="shop-info">
    <div class="shop-top">
     <div class="shop-top-left shop-top-item">
      <img :src="shops.logo" alt="">
      <span class="title">{{shops.name}}</span>
     </div>
     <div class="shop-top-right shop-top-item">
       <span class="fans-title">粉丝:</span>
       <span class="shops-fans">{{shops.fans}}</span>
     </div>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-life shop-middle-item">
        <div class="info-sells">
          <div class="sells-count">
            {{shops.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shops.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right shop-middle-item">
         <table>
           <tr v-for="(item,index) in shops.score" :key="index">
             <td>{{item.name}}</td>
             <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
             <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
        </tr>
      </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    shops:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters: {
      sellCountFilter (value) {
        return value < 10000 ? value : (value/10000).toFixed(1) + '万'
      }
    }
}
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top {
  display: flex;
  line-height: 45px;
  align-items: center;
}
.shop-top-item {
  flex: 1;
}
.shop-top-left {
  display: flex;
}
.shop-top-left img {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(100,100,100,.1);
  border-radius: 50%;
}
.shop-top-left .title {
  margin-left: 10px;
  vertical-align: center;
}
.shop-top-right {
  text-align: center;
}
.shop-top-right .shops-fans {
  color: var(--color-high-text);
}
.shop-middle {
  display: flex;
  margin-top: 15px;
  align-items: center;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-life {
  display: flex;
  border-right: 1px solid rgba(0,0,0,.1);
  justify-content: space-evenly;
  text-align: center;
  color: #333;
}
.sells-count,
.goods-count {
  font-size: 18px;
}
.sells-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}
.shop-middle-right {
  font-size: 13px;
  color: #333;
}
.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}
.shop-middle-right table td {
  padding: 5px 0;
}
.shop-middle-right .score {
  color: #5ea732;
}
.shop-middle-right .score-better {
  color: #f13e3e;
}
.shop-middle-right .better span {
background-color: #5ea732;
color: #fff;
text-align: center;
}
.shop-middle-right .better-more span {
  background-color: #f13e3e;
}
.shop-bottom {
  margin-top: 10px;
  text-align: center;
}
.enter-shop {
  display: inline-block;
  width: 150px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background-color: var(--color-tint);
  font-size: 14px;
  text-align: center;
  border-radius: 10px;
}
</style>