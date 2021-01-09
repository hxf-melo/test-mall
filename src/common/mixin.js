import { debounce } from './untils'
import BackTop from '@/components/content/backTop/BackTop.vue'

export const goodsListmixin = {
    data() {
        return {
            itemImgLoad: null,
            refresh: null
        }
    },
    mounted() {
        //1.使用防抖函数
        this.refresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImgLoad = () => {
                this.refresh()
            }
            //2.监听事件总线
        this.$bus.$on('ItemImageLoad', this.itemImgLoad)
    }
}
export const backTop = {
    data() {
        return {
            isShowBackTop: false,
        }
    },
    components: {
        BackTop
    },
    methods: {
        backTopClick() {
            //调用子组件的方法 this.$refs.xxx,子组件需要设置ref="xxx"
            this.$refs.scroll.scrollTo(0, 0)
        }
    }
}