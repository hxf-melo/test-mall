<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabclick="tabclick" ref="tabcontrol2" v-show="isShowTabCtrl"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swriperImageLoad="swriperImageLoad"/>
      <home-recommends-view :recommends="recommends"/>
      <home-feature-view/>
      <tab-control :titles="['流行','新款','精选']"  @tabclick="tabclick" ref="tabcontrol1"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabcontrol/TabControl.vue'

import GoodsList from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'

import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendsView from './childComps/HomeRecommendsView.vue'
import HomeFeatureView from './childComps/HomeFeatureView.vue'

import {getHomeMultidata,getHomeGoods} from '@/network/home.js'
import {debounce} from '@/common/untils'
import {goodsListmixin,backTop} from '@/common/mixin.js'

export default {
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommendsView,
    HomeFeatureView,
    GoodsList,
    Scroll,
    
  },
  data() {
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      tabOffSetTop: 0,
      isShowTabCtrl: false,
      saveY:0,
    }
  },
  computed:{
    showGoods() {
      //把数据传给子元素
      return this.goods[this.currentType].list
    }
  },
  created() {
    //1.发送网络请求
    this.getHomeMultidata()

    //2.发送商品网络请求
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
   mixins:[goodsListmixin,backTop],
  mounted() {},
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.scroll && this.$refs.scroll.refresh()
  },
  deactivated() {
     this.saveY = this.$refs.scroll.getScrollY();
     //取消全局事件监听
     this.$bus.$off('ItemImageLoad',this.itemImgLoad)
  },
  methods:{
    /* 
    事件监听相关
    */
  
    tabclick(index) {
      //监听子组件的点击事件，并获得index，通过index来决定传给子元素的值
      switch(index) {
        case 0 :
          this.currentType = 'pop'
          break
        
        case 1 :
          this.currentType = 'new'
          break
        
        case 2 :
          this.currentType = 'sell'
          break
        
      }
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
    },
    contentScroll(position) {
      //子组件传出的事件
      //1.根据滚动位置显示回到顶部
      this.isShowBackTop = (-position.y) > 1000
      //2.根据滚动位置显示tabControl
      this.isShowTabCtrl = (-position.y) > this.tabOffSetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swriperImageLoad() {
     this.tabOffSetTop = this.$refs.tabcontrol1.$el.offsetTop
    },
    /* 
    网络请求相关
    */
    getHomeMultidata() {
      getHomeMultidata().then(res =>{
        //因为函数调用完毕后，函数里面的变量会被回收
        //所以需要把请求到的数据赋值给外部变量保存下来
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
    getHomeGoods(type) {
      //由当前页决定需要访问的数据页
    const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res =>{
        //把请求到的数据通过'原数组push(...请求到的数组)'加到原数组中
      this.goods[type].list.push(...res.data.list);
      //请求完数据把当前页加1,决定下一次请求的页
      this.goods[type].page += 1
      this.$refs.scroll.finishPullUp()
    })
  }
}
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  text-align: center;
  background-color: var(--color-tint);
  color: #ffffff;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 9;
}
</style>