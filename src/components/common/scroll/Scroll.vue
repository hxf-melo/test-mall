<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props:{
    probeType:{
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  //元素挂载到DOM之后再引用
  mounted(){
    //1.创建scroll实例
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM: true,
      //点击事件可执行
      click: true,
      //由调用者决定是否实时监听位置,默认不监听
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //2.获取滚动位置
    if(this.probeType === 2 || this.probeType === 3){
       this.scroll.on('scroll',(position) => {
         this.$emit('scroll',position)
    })
    }
    //3.监听滚动到底部,上拉加载
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
    }
  },
  methods:{
    //根据调用时输入的坐标到达某位置
      scrollTo(x,y,time=300) {
       this.scroll && this.scroll.scrollTo(x , y , time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
        console.log('自动刷新一次');
      },
      getScrollY() {
        return this.scroll.y ? this.scroll.y : 0
      }
    }
}
</script>

<style scoped>

</style>