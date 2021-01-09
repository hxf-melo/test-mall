<template>
  <div id="detail">
     <detail-nav-bar class="detail-nav" @tabClick="titleClick" ref="detailNav"></detail-nav-bar>
     <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
       <detail-swriper :top-images="topImages"></detail-swriper>
       <detail-base-info :goods="goods"></detail-base-info>
       <detail-shop-info :shops="shops"></detail-shop-info>
       <detail-goods-info :detail-info="detailInfo" @imageLoad="detailImageLoad"></detail-goods-info>
       <detail-params-info :params-info="paramsInfo" ref="params"></detail-params-info>
       <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
       <detail-recommends :recommend="recommend" ref="recommend"></detail-recommends>
     </scroll>
     <detail-bottom-bar @addCart="addTocart"></detail-bottom-bar>
     <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar.vue'
import DetailSwriper from './childcomps/DetailSwriper.vue'
import DetailBaseInfo from './childcomps/DetailBaseInfo.vue'
import DetailShopInfo from './childcomps/DetailShopInfo.vue'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo.vue'
import DetailParamsInfo from './childcomps/DetailParamsInfo.vue'
import DetailCommentInfo from './childcomps/DetailCommentInfo.vue'
import DetailRecommends from './childcomps/DetailRecommends.vue'
import DetailBottomBar from './childcomps/DetailBottomBar.vue'

import Scroll from '@/components/common/scroll/Scroll.vue'
import {debounce} from '@/common/untils.js'
import {goodsListmixin,backTop} from '@/common/mixin.js'
import BackTop from '../../components/content/backTop/BackTop.vue'
import {getDetail,getRecommend,Goods,Shops,ParamsInfo} from '@/network/detail'

export default {
  name:'Detail',
  components: { 
    DetailNavBar,
    DetailSwriper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommends,
    DetailBottomBar,
    Scroll,
    },
  data(){
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommend: [],
      topsY:[],
    }
  },
 
  created(){
    //1.保存传过来的iid
    this.iid = this.$route.params.iid
    
    getDetail(this.iid).then(res=>{
      console.log(res);
      const data = res.result
      //2.获取轮播图的数据
      this.topImages = data.itemInfo.topImages
      //3.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //4.获取店铺信息
      this.shops = new Shops(data.shopInfo)
      //5.获取商品信息
      this.detailInfo = data.detailInfo
      //6.获取参数信息
      this.paramsInfo = new ParamsInfo(data.itemParams.info,data.itemParams.rule)
      //7.获取评论信息 
      if (data.rate.list) {
            this.commentInfo = data.rate;
          }
    }),
    getRecommend().then(res =>{
      
      this.recommend = res.data.list
    })
  },
  mixins:[goodsListmixin,backTop],
  mounted(){},
  destroyed(){
    this.$bus.$off('ItemImageLoad',this.itemImgLoad)
  },
  methods:{
    detailImageLoad(){
      //或者用防抖函数
      this.$refs.scroll.refresh();
      this.topsY = [];
      this.topsY.push(0);
      this.topsY.push(this.$refs.params.$el.offsetTop)
      this.topsY.push(this.$refs.comment.$el.offsetTop)
      this.topsY.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.topsY);
    },
    //监听title点击，到达标题开始的位置
    titleClick(index){
      this.$refs.scroll.scrollTo(0 ,-this.topsY[index])
    },
    contentScroll(position) {
      //获取滚动坐标y值
      const posY = -position.y
      for (let i = 0 ; i < this.topsY.length; i++) {
        if (( posY >= this.topsY[i] && posY < this.topsY[i+1] )||( i === this.topsY.length-1 && posY >= this.topsY[i])) {
          this.$refs.detailNav.currentIndex = i
        }
      }
      //判断滚动位置来决定是否显示backTop
      this.isShowBackTop = -position.y > 1000
    },
    addTocart(){
      const product = {};
      product.images = this.topImages[0];
      product.price = this.goods.realPrice;
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.iid = this.iid;

      this.$store.dispatch('addCart',product)
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>